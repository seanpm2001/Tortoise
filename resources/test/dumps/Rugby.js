var workspace     = require('engine/workspace')([])(['kick-line', 'goal-size', 'goal-pos', 'show-level-curves?', 'current-max', 'col', 'ang', 'best-dist', 'analytic', 'try-line', 'histogram-area', 'kicks', 'goals'], ['kick-line', 'goal-size', 'goal-pos', 'show-level-curves?'], ['start-patch'], [], ['score', 'left-angle', 'right-angle', 'goal-angle', 'slope'], 0, 60, 0, 80, 6.0, false, false, {"default":{"rotate":true,"elements":[{"xcors":[150,40,150,260],"ycors":[5,250,205,250],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"airplane":{"rotate":true,"elements":[{"xcors":[150,135,120,120,15,15,120,135,105,120,150,180,210,165,180,285,285,180,180,165],"ycors":[0,15,60,105,165,195,180,240,270,285,270,285,270,240,180,195,165,105,60,15],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"arrow":{"rotate":true,"elements":[{"xcors":[150,0,105,105,195,195,300],"ycors":[0,150,150,293,293,150,150],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"box":{"rotate":false,"elements":[{"xcors":[150,285,285,150],"ycors":[285,225,75,135],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[150,15,150,285],"ycors":[135,75,15,75],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[15,15,150,150],"ycors":[75,225,285,135],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x1":150,"y1":285,"x2":150,"y2":135,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false},{"x1":150,"y1":135,"x2":15,"y2":75,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false},{"x1":150,"y1":135,"x2":285,"y2":75,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false}]},"bug":{"rotate":true,"elements":[{"x":96,"y":182,"diam":108,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":110,"y":127,"diam":80,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":110,"y":75,"diam":80,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x1":150,"y1":100,"x2":80,"y2":30,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":150,"y1":100,"x2":220,"y2":30,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"butterfly":{"rotate":true,"elements":[{"xcors":[150,209,225,225,195,165,150],"ycors":[165,199,225,255,270,255,240],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[150,89,75,75,105,135,150],"ycors":[165,198,225,255,270,255,240],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[139,100,55,25,10,10,25,40,85,139],"ycors":[148,105,90,90,105,135,180,195,194,163],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[162,200,245,275,290,290,275,260,215,162],"ycors":[150,105,90,90,105,135,180,195,195,165],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[150,135,120,135,150,165,180,165],"ycors":[255,225,150,120,105,120,150,225],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":135,"y":90,"diam":30,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x1":150,"y1":105,"x2":195,"y2":60,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false},{"x1":150,"y1":105,"x2":105,"y2":60,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false}]},"car":{"rotate":false,"elements":[{"xcors":[300,279,261,240,226,213,203,185,159,135,75,0,0,0,300,300],"ycors":[180,164,144,135,132,106,84,63,50,50,60,150,165,225,225,180],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":180,"y":180,"diam":90,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":30,"y":180,"diam":90,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xcors":[162,132,134,209,194,189,180],"ycors":[80,78,135,135,105,96,89],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":47,"y":195,"diam":58,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":195,"y":195,"diam":58,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"circle":{"rotate":false,"elements":[{"x":0,"y":0,"diam":300,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"circle 2":{"rotate":false,"elements":[{"x":0,"y":0,"diam":300,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":30,"y":30,"diam":240,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"cow":{"rotate":false,"elements":[{"xcors":[200,197,179,177,166,140,93,78,72,49,48,37,25,25,45,103,179,198,252,272,293,285,255,242,224],"ycors":[193,249,249,196,187,189,191,179,211,209,181,149,120,89,72,84,75,76,64,81,103,121,121,118,167],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[73,86,62,48],"ycors":[210,251,249,208],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[25,16,9,23,25,39],"ycors":[114,195,204,213,200,123],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"cylinder":{"rotate":false,"elements":[{"x":0,"y":0,"diam":300,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"dot":{"rotate":false,"elements":[{"x":90,"y":90,"diam":120,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"face happy":{"rotate":false,"elements":[{"x":8,"y":8,"diam":285,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":60,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":180,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xcors":[150,90,62,47,67,90,109,150,192,210,227,251,236,212],"ycors":[255,239,213,191,179,203,218,225,218,203,181,194,217,240],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"face neutral":{"rotate":false,"elements":[{"x":8,"y":7,"diam":285,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":60,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":180,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xmin":60,"ymin":195,"xmax":240,"ymax":225,"type":"rectangle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"face sad":{"rotate":false,"elements":[{"x":8,"y":8,"diam":285,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":60,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":180,"y":75,"diam":60,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xcors":[150,90,62,47,67,90,109,150,192,210,227,251,236,212],"ycors":[168,184,210,232,244,220,205,198,205,220,242,229,206,183],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"fish":{"rotate":false,"elements":[{"xcors":[44,21,15,0,15,0,13,20,45],"ycors":[131,87,86,120,150,180,214,212,166],"type":"polygon","color":"rgba(255, 255, 255, 1.0)","filled":true,"marked":false},{"xcors":[135,119,95,76,46,60],"ycors":[195,235,218,210,204,165],"type":"polygon","color":"rgba(255, 255, 255, 1.0)","filled":true,"marked":false},{"xcors":[75,83,71,86,166,135],"ycors":[45,77,103,114,78,60],"type":"polygon","color":"rgba(255, 255, 255, 1.0)","filled":true,"marked":false},{"xcors":[30,151,226,280,292,292,287,270,195,151,30],"ycors":[136,77,81,119,146,160,170,195,210,212,166],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":215,"y":106,"diam":30,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"flag":{"rotate":false,"elements":[{"xmin":60,"ymin":15,"xmax":75,"ymax":300,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[90,270,90],"ycors":[150,90,30],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x1":75,"y1":135,"x2":90,"y2":135,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":75,"y1":45,"x2":90,"y2":45,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"flower":{"rotate":false,"elements":[{"xcors":[135,165,180,180,150,165,195,195,165],"ycors":[120,165,210,240,300,300,240,195,135],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"x":85,"y":132,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":130,"y":147,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":192,"y":85,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":85,"y":40,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":177,"y":40,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":177,"y":132,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":70,"y":85,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":130,"y":25,"diam":38,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":96,"y":51,"diam":108,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":113,"y":68,"diam":74,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xcors":[189,219,249,279,234],"ycors":[233,188,173,188,218],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[180,150,105,75,135],"ycors":[255,210,210,240,240],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false}]},"house":{"rotate":false,"elements":[{"xmin":45,"ymin":120,"xmax":255,"ymax":285,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xmin":120,"ymin":210,"xmax":180,"ymax":285,"type":"rectangle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xcors":[15,150,285],"ycors":[120,15,120],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x1":30,"y1":120,"x2":270,"y2":120,"type":"line","color":"rgba(0, 0, 0, 1.0)","filled":false,"marked":false}]},"leaf":{"rotate":false,"elements":[{"xcors":[150,135,120,60,30,60,60,15,30,15,40,45,60,90,105,120,105,120,135,150,165,180,195,180,195,210,240,255,263,285,270,285,240,240,270,240,180,165],"ycors":[210,195,210,210,195,180,165,135,120,105,104,90,90,105,120,120,60,60,30,15,30,60,60,120,120,105,90,90,104,105,120,135,165,180,195,210,210,195],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[135,135,120,105,105,135,165,165],"ycors":[195,240,255,255,285,285,240,195],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"line":{"rotate":true,"elements":[{"x1":150,"y1":0,"x2":150,"y2":300,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"line half":{"rotate":true,"elements":[{"x1":150,"y1":0,"x2":150,"y2":150,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"pentagon":{"rotate":false,"elements":[{"xcors":[150,15,60,240,285],"ycors":[15,120,285,285,120],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"person":{"rotate":false,"elements":[{"x":110,"y":5,"diam":80,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[105,120,90,105,135,150,165,195,210,180,195],"ycors":[90,195,285,300,300,225,300,300,285,195,90],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xmin":127,"ymin":79,"xmax":172,"ymax":94,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[195,240,225,165],"ycors":[90,150,180,105],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[105,60,75,135],"ycors":[90,150,180,105],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"plant":{"rotate":false,"elements":[{"xmin":135,"ymin":90,"xmax":165,"ymax":300,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[135,90,45,75,135],"ycors":[255,210,195,255,285],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[165,210,255,225,165],"ycors":[255,210,195,255,285],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[135,90,45,75,135],"ycors":[180,135,120,180,210],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[165,165,225,255,210],"ycors":[180,210,180,120,135],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[135,90,45,75,135],"ycors":[105,60,45,105,135],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[165,165,225,255,210],"ycors":[105,135,105,45,60],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[135,120,150,180,165],"ycors":[90,45,15,45,90],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"square":{"rotate":false,"elements":[{"xmin":30,"ymin":30,"xmax":270,"ymax":270,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"square 2":{"rotate":false,"elements":[{"xmin":30,"ymin":30,"xmax":270,"ymax":270,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xmin":60,"ymin":60,"xmax":240,"ymax":240,"type":"rectangle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"star":{"rotate":false,"elements":[{"xcors":[151,185,298,207,242,151,59,94,3,116],"ycors":[1,108,108,175,282,216,282,175,108,108],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"target":{"rotate":false,"elements":[{"x":0,"y":0,"diam":300,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":30,"y":30,"diam":240,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":60,"y":60,"diam":180,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":90,"y":90,"diam":120,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":120,"y":120,"diam":60,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"tree":{"rotate":false,"elements":[{"x":118,"y":3,"diam":94,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xmin":120,"ymin":195,"xmax":180,"ymax":300,"type":"rectangle","color":"rgba(157, 110, 72, 1.0)","filled":true,"marked":false},{"x":65,"y":21,"diam":108,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":116,"y":41,"diam":127,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":45,"y":90,"diam":120,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":104,"y":74,"diam":152,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"triangle":{"rotate":false,"elements":[{"xcors":[150,15,285],"ycors":[30,255,255],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"triangle 2":{"rotate":false,"elements":[{"xcors":[150,15,285],"ycors":[30,255,255],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[151,225,75],"ycors":[99,223,224],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false}]},"truck":{"rotate":false,"elements":[{"xmin":4,"ymin":45,"xmax":195,"ymax":187,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[296,296,259,244,208,207],"ycors":[193,150,134,104,104,194],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xmin":195,"ymin":60,"xmax":195,"ymax":105,"type":"rectangle","color":"rgba(255, 255, 255, 1.0)","filled":true,"marked":false},{"xcors":[238,252,219,218],"ycors":[112,141,141,112],"type":"polygon","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":234,"y":174,"diam":42,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"xmin":181,"ymin":185,"xmax":214,"ymax":194,"type":"rectangle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":144,"y":174,"diam":42,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":24,"y":174,"diam":42,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x":24,"y":174,"diam":42,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x":144,"y":174,"diam":42,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x":234,"y":174,"diam":42,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"turtle":{"rotate":true,"elements":[{"xcors":[215,240,246,228,215,193],"ycors":[204,233,254,266,252,210],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[195,225,245,260,269,261,240,225,210],"ycors":[90,75,75,89,108,124,105,105,105],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[105,75,55,40,31,39,60,75,90],"ycors":[90,75,75,89,108,124,105,105,105],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[132,134,107,108,150,192,192,169,172],"ycors":[85,64,51,17,2,18,52,65,87],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[85,60,54,72,85,107],"ycors":[204,233,254,266,252,210],"type":"polygon","color":"rgba(89, 176, 60, 1.0)","filled":true,"marked":false},{"xcors":[119,179,209,224,220,175,128,81,74,88],"ycors":[75,75,101,135,225,261,261,224,135,99],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]},"wheel":{"rotate":false,"elements":[{"x":3,"y":3,"diam":294,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x":30,"y":30,"diam":240,"type":"circle","color":"rgba(0, 0, 0, 1.0)","filled":true,"marked":false},{"x1":150,"y1":285,"x2":150,"y2":15,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":15,"y1":150,"x2":285,"y2":150,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x":120,"y":120,"diam":60,"type":"circle","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"x1":216,"y1":40,"x2":79,"y2":269,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":40,"y1":84,"x2":269,"y2":221,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":40,"y1":216,"x2":269,"y2":79,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true},{"x1":84,"y1":40,"x2":221,"y2":269,"type":"line","color":"rgba(141, 141, 141, 1.0)","filled":false,"marked":true}]},"x":{"rotate":false,"elements":[{"xcors":[270,225,30,75],"ycors":[75,30,225,270],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true},{"xcors":[30,75,270,225],"ycors":[75,30,225,270],"type":"polygon","color":"rgba(141, 141, 141, 1.0)","filled":true,"marked":true}]}}, {"default":{}});
var AgentSet      = workspace.agentSet;
var BreedManager  = workspace.breedManager;
var LayoutManager = workspace.layoutManager;
var LinkPrims     = workspace.linkPrims;
var Prims         = workspace.prims;
var Updater       = workspace.updater;
var world         = workspace.world;

var Call       = require('engine/call');
var ColorModel = require('engine/colormodel');
var Dump       = require('engine/dump');
var Exception  = require('engine/exception');
var Link       = require('engine/link');
var LinkSet    = require('engine/linkset');
var Nobody     = require('engine/nobody');
var PatchSet   = require('engine/patchset');
var Tasks      = require('engine/tasks');
var Trig       = require('engine/trig');
var Turtle     = require('engine/turtle');
var TurtleSet  = require('engine/turtleset');
var Type       = require('engine/typechecker');

var AgentModel     = require('integration/agentmodel');
var Denuller       = require('integration/denuller');
var notImplemented = require('integration/notimplemented');
var Random         = require('integration/random');
var StrictMath     = require('integration/strictmath');function setup() {
  world.clearAll();
  Call(setupField);
  Call(setupBalls);
  world.observer.setGlobal('current-max', 0);
  world.observer.setGlobal('best-dist', -1);
  world.observer.setGlobal('kicks', 0);
  Prims.ask(world.observer.getGlobal('try-line'), true, function() {
    Prims.setPatchVariable('score', 0);
  });
  Call(findAnalyticSolution);
  if (world.observer.getGlobal('show-level-curves?')) {
    Call(drawLevelCurves);
  }
  world.ticker.reset();
}
function setupField() {
  Prims.ask(world.patches(), true, function() {
    if (!Prims.equality(Prims.getNeighbors().size(), 8)) {
      Prims.setPatchVariable('pcolor', 15);
    }
    if (((Prims.equality(Prims.getPatchVariable('pycor'), world.minPycor) && Prims.gte(Prims.getPatchVariable('pxcor'), world.observer.getGlobal('goal-pos'))) && Prims.lt(Prims.getPatchVariable('pxcor'), (world.observer.getGlobal('goal-pos') + world.observer.getGlobal('goal-size'))))) {
      Prims.setPatchVariable('pcolor', 55);
    }
  });
  world.observer.setGlobal('try-line', world.patches().agentFilter(function() {
    return (Prims.equality(Prims.getPatchVariable('pxcor'), world.observer.getGlobal('kick-line')) && Prims.equality(Prims.getPatchVariable('pcolor'), 0));
  }));
  Prims.ask(world.observer.getGlobal('try-line'), true, function() {
    Prims.setPatchVariable('pcolor', 45);
  });
  world.observer.setGlobal('histogram-area', world.patches().agentFilter(function() {
    return (Prims.lt(Prims.getPatchVariable('pxcor'), world.observer.getGlobal('kick-line')) && Prims.equality(Prims.getPatchVariable('pcolor'), 0));
  }));
}
function setupBalls() {
  BreedManager.setDefaultShape(world.turtles().getBreedName(), "circle")
  Prims.ask(world.observer.getGlobal('try-line'), true, function() {
    Prims.ask(Prims.sprout(1, ""), true, function() {
      Prims.setVariable('color', 25);
      Prims.setVariable('start-patch', AgentSet.self().getPatchHere());
      Prims.setVariable('heading', (Prims.randomFloat(90) + 90));
    });
  });
  Call(plotScores);
}
function go() {
  while (world.turtles().nonEmpty()) {
    Prims.ask(world.turtles(), true, function() {
      Call(move);
    });
    notImplemented('display', undefined)();
  }
  world.observer.setGlobal('kicks', (world.observer.getGlobal('kicks') + world.observer.getGlobal('try-line').size()));
  world.observer.setGlobal('goals', Prims.sum(Prims.of(world.observer.getGlobal('try-line'), function() {
    return Prims.getPatchVariable('score');
  })));
  Call(setupBalls);
  world.ticker.tick();
}
function move() {
  if ((Prims.gte(Prims.getPatchVariable('pxcor'), (world.maxPxcor - 1)) || Prims.gte(Prims.getPatchVariable('pycor'), (world.minPycor + 1)))) {
    Call(checkPatch, Call(nextPatch));
    Call(checkPatch, AgentSet.self().patchAhead(1));
  }
  Prims.fd(1);
}
function checkPatch(thePatch) {
  if (Prims.equality(Prims.of(thePatch, function() {
    return Prims.getPatchVariable('pcolor');
  }), 15)) {
    Prims.die();
  }
  if (Prims.equality(Prims.of(thePatch, function() {
    return Prims.getPatchVariable('pcolor');
  }), 55)) {
    Prims.ask(Prims.getVariable('start-patch'), true, function() {
      Prims.setPatchVariable('score', (Prims.getPatchVariable('score') + 1));
    });
    Prims.die();
  }
}
function nextPatch() {
  if (Prims.lt(Prims.getVariable('heading'), AgentSet.self().towardsXY((Prims.getPatchVariable('pxcor') + 0.5), (Prims.getPatchVariable('pycor') + 0.5)))) {
    return AgentSet.self().patchAt(0, 1);
  }
  if (Prims.lt(Prims.getVariable('heading'), AgentSet.self().towardsXY((Prims.getPatchVariable('pxcor') + 0.5), (Prims.getPatchVariable('pycor') - 0.5)))) {
    return AgentSet.self().patchAt(1, 0);
  }
  if (Prims.lt(Prims.getVariable('heading'), AgentSet.self().towardsXY((Prims.getPatchVariable('pxcor') - 0.5), (Prims.getPatchVariable('pycor') - 0.5)))) {
    return AgentSet.self().patchAt(0, -1);
  }
  if (Prims.lt(Prims.getVariable('heading'), AgentSet.self().towardsXY((Prims.getPatchVariable('pxcor') - 0.5), (Prims.getPatchVariable('pycor') + 0.5)))) {
    return AgentSet.self().patchAt(-1, 0);
  }
  return AgentSet.self().patchAt(0, 1);
}
function plotScores() {
  world.observer.setGlobal('current-max', Prims.max(Prims.of(world.observer.getGlobal('try-line'), function() {
    return Prims.getPatchVariable('score');
  })));
  if (Prims.equality(world.observer.getGlobal('current-max'), 0)) {
    Prims.ask(world.observer.getGlobal('histogram-area'), true, function() {
      Prims.setPatchVariable('pcolor', 0);
    });
    throw new Exception.StopInterrupt;
  }
  Prims.ask(world.observer.getGlobal('try-line'), true, function() {
    if (Prims.equality(Prims.getPatchVariable('score'), world.observer.getGlobal('current-max'))) {
      world.observer.setGlobal('best-dist', Prims.getPatchVariable('pycor'));
      Prims.ask(AgentSet.self().patchAt(2, 0), true, function() {
        Prims.setPatchVariable('plabel', Prims.getPatchVariable('pycor'));
      });
    }
    else {
      if (!Prims.equality(Prims.getPatchVariable('pcolor'), 125)) {
        Prims.ask(AgentSet.self().patchAt(2, 0), true, function() {
          Prims.setPatchVariable('plabel', "");
        });
      }
    }
  });
  Prims.ask(world.observer.getGlobal('histogram-area'), true, function() {
    if (Prims.gt(Prims.getPatchVariable('pxcor'), (world.observer.getGlobal('kick-line') - ((Prims.of(AgentSet.self().patchAt((world.observer.getGlobal('kick-line') - Prims.getPatchVariable('pxcor')), 0), function() {
      return Prims.getPatchVariable('score');
    }) * (world.observer.getGlobal('kick-line') - world.minPxcor)) / world.observer.getGlobal('current-max'))))) {
      if (Prims.equality(Prims.of(AgentSet.self().patchAt((world.observer.getGlobal('kick-line') - Prims.getPatchVariable('pxcor')), 0), function() {
        return Prims.getPatchVariable('score');
      }), world.observer.getGlobal('current-max'))) {
        Prims.setPatchVariable('pcolor', 45);
      }
      else {
        Prims.setPatchVariable('pcolor', 105);
      }
    }
    else {
      Prims.setPatchVariable('pcolor', 0);
    }
  });
}
function findAnalyticSolution() {
  Prims.ask(world.patches().agentFilter(function() {
    return Prims.gt(Prims.getPatchVariable('pycor'), world.minPycor);
  }), true, function() {
    Call(calcGoalAngle);
  });
  var winningPatch = world.observer.getGlobal('try-line').minOneOf(function() {
    return Prims.getPatchVariable('goal-angle');
  });
  Prims.ask(winningPatch, true, function() {
    Prims.setPatchVariable('pcolor', 125);
    Prims.ask(AgentSet.self().patchAt(2, 0), true, function() {
      Prims.setPatchVariable('plabel', Prims.getPatchVariable('pycor'));
    });
  });
  world.observer.setGlobal('analytic', Prims.of(winningPatch, function() {
    return Prims.getPatchVariable('pycor');
  }));
}
function drawLevelCurves() {
  Prims.ask(world.patches().agentFilter(function() {
    return (Prims.gt(Prims.getPatchVariable('pxcor'), world.observer.getGlobal('kick-line')) && Prims.lt(Prims.getPatchVariable('pcolor'), 10));
  }), true, function() {
    if (Prims.gt(Prims.getPatchVariable('goal-angle'), 270)) {
      Prims.setPatchVariable('pcolor', ((360 - Prims.mod(Prims.getPatchVariable('goal-angle'), 10)) * 0.8));
    }
  });
}
function calcGoalAngle() {
  Prims.setPatchVariable('left-angle', AgentSet.self().towardsXY((world.observer.getGlobal('goal-pos') - 0.5), (world.minPycor + 0.5)));
  Prims.setPatchVariable('right-angle', AgentSet.self().towardsXY(((world.observer.getGlobal('goal-pos') + world.observer.getGlobal('goal-size')) - 0.5), (world.minPycor + 0.5)));
  Prims.setPatchVariable('goal-angle', Prims.mod((Prims.getPatchVariable('right-angle') - Prims.getPatchVariable('left-angle')), 360));
}
world.observer.setGlobal('kick-line', 20);
world.observer.setGlobal('goal-size', 11);
world.observer.setGlobal('goal-pos', 40);
world.observer.setGlobal('show-level-curves?', false);
