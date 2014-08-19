(ns topology.patch-math
  (:require [util.math :refer [squash
                               clamp]]
            [world :refer [get-patch-at]]
            [topology.vars :refer [min-pxcor  max-pxcor
                                   min-pycor  max-pycor
                                   wrap-in-x? wrap-in-y?]]
            [shim.strictmath]
            [shim.random]))

;; TODO: make wrap-x/y macros and pass whether wrapping
;; should ever occur when created as fns in a topology
;; -- JTT (8/11/14)

(defn squash-4 [v mn]
  (squash v mn 1.0E-4))

(defn wrap [p mn mx]
  ;; squash so that -5.500001 != 5.5 -- JTT (7/28/14)
  (let [pos (squash-4 p mn)]
  (cond
    ;; use >= to consistently return -5.5 for the "seam" of the
    ;; wrapped shape -- i.e., -5.5 = 5.5, so consistently
    ;; report -5.5 in order to have equality checks work
    ;; correctly. -- JTT (7/23/14)
    (>= pos mx) (-> pos (- mx) (mod (- mx mn)) (+ mn))
    (< pos mn)  (- mx (-> (- mn pos)
                          (mod (- mx mn)))) ;; ((min - pos) % (max - min))
    :default pos)))

;; these "stubs" are overwritten during instantiation
;; if a topology wraps in either direction -- JTT (8/12/14)

(defn wrap-y [y]
  (clamp y min-pycor max-pycor))

(defn wrap-x [x]
  (clamp x min-pxcor max-pxcor))

;; direct neighbors (eg getNeighbors4 patches)

(defn _get_patch_north [x y] (.getPatchAt workspace.world x (wrap-y (inc y))))

(defn _get_patch_east  [x y] (.getPatchAt workspace.world (wrap-x (inc x)) y))

(defn _get_patch_south [x y] (.getPatchAt workspace.world  x (wrap-y (dec y))))

(defn _get_patch_west  [x y] (.getPatchAt workspace.world (wrap-x (dec x)) y))

;; corners

(defn _get_patch_northeast [x y]
  (.getPatchAt workspace.world (wrap-x (inc x)) (wrap-y (inc y))))

(defn _get_patch_southeast [x y]
  (.getPatchAt workspace.world (wrap-x (inc x)) (wrap-y (dec y))))

(defn _get_patch_southwest [x y]
  (.getPatchAt workspace.world (wrap-x (dec x)) (wrap-y (dec y))))

(defn _get_patch_northwest [x y]
  (.getPatchAt workspace.world (wrap-x (dec x)) (wrap-y (inc y))))

;; get neighbors

(defn _get_neighbors_4 [x y]
   (filter #(not= % nil)
          [(_get_patch_north x y)
           (_get_patch_east x y)
           (_get_patch_south x y)
           (_get_patch_west x y)]))

(defn _get_neighbors [x y]
  (concat
    (_get_neighbors_4 x y)
    (filter #(not= % nil)
          [(_get_patch_northeast x y)
           (_get_patch_northwest x y)
           (_get_patch_southwest x y)
           (_get_patch_southeast x y)])))

;; shortest-x wraps a difference out of bounds.
;; _shortestX does not. -- JTT (7/28/14)

(defn shortest-x [x1 x2]
  (wrap-x (- x2 x1)))

(defn shortest-y [y1 y2]
  (wrap-y (- y2 y1)))

;; distances

(defn distance-xy [x1 y1 x2 y2]
  (let [a2 (.pow shim.strictmath (shortest-x x1, x2) 2)
        b2 (.pow shim.strictmath (shortest-y y1, y2) 2)]
    (.sqrt shim.strictmath (+ a2 b2))))

(defn distance [x y agent]
  ;; FIXME: cl dependent (.getCoords agent) -- JTT (8/11/14)
  (let [[ax ay] (.getCoords agent)]
    (distance-xy x y ax ay)))

;; towards

(defn towards [x1 y1 x2 y2]
  (let [dx (shortest-x x1 x2)
        dy (shortest-y y1 y2)]
    (cond
     (= dx 0) (or (and (< dy 0) 180) 0)
     (= dy 0) (or (and (< dx 0) 270) 90)
     :default (-> (- dy)
                  (shim.strictmath.atan2 dx)
                  (+ (.-PI js/Math))
                  (shim.strictmath.toDegrees)
                  (mod 360)
                  (+ 270)))))

;; midpoints

(defn midpoint-x [x1 x2]
  (wrap-x (-> (shortest-x x1 x2) (/ 2) (+ x1))))

(defn midpoint-y [y1 y2]
  (wrap-y (-> (shortest-y y1 y2) (/ 2) (+ y1))))

;; in-radius

(defn in-radius [x y agents radius]
  (filter #(<= (distance x y %) radius) agents))

;; random cors

(defn random-cor [mn  mx]
  (-> mn (- 0.5) (+ (.nextDouble shim.random)) (* (inc (- mx mn)))))

(defn random-x []
  (random-cor min-pxcor max-pxcor))

(defn random-y []
  (random-cor min-pycor max-pycor))