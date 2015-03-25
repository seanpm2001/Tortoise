// (C) Uri Wilensky. https://github.com/NetLogo/Tortoise

package org.nlogo.tortoise.json

import
  java.lang.{ Boolean => JBoolean, Double => JDouble, Integer => JInteger }

import
  org.nlogo.core.{ Chooseable, Col, Direction, Horizontal, InputBoxType,
    LogoList, Num, Pen, Str, StrCommand, StrReporter, UpdateMode, Vertical }

import
  scalaz.{ syntax, Scalaz, Validation, NonEmptyList, ValidationNel },
    Validation.FlatMap.ValidationFlatMapRequested,
    Scalaz.ToValidationOps,
    syntax.std.option._

import
  TortoiseJson.{ JsArray, JsBool, JsDouble, JsInt, JsNull, JsObject, JsString }

object WidgetRead {
  implicit object tortoiseJs2NilString extends JsonReader[TortoiseJson, String] {
    def apply(json: TortoiseJson): ValidationNel[String, String] = json match {
      case JsNull      => "NIL".successNel
      case JsString(s) => s.successNel
      case other       => s"could not convert ${other.getClass.getSimpleName} to String".failureNel
    }
  }

  implicit object tortoiseJs2UpdateMode extends JsonReader[TortoiseJson, UpdateMode] {
    def apply(t: TortoiseJson) = t match {
      case JsString(s) if s.toUpperCase == "CONTINUOUS" =>
        UpdateMode.Continuous.successNel
      case JsString(s) if s.toUpperCase == "TICKBASED"  =>
        UpdateMode.TickBased.successNel
      case other                                        =>
        s"View update mode can only be 'Continuous' or 'TickBased' but was $other".failureNel
    }
  }

  implicit object tortoiseJs2OptionString extends JsonReader[TortoiseJson, Option[String]] {
    override def read(key: String, json: Option[TortoiseJson]): ValidationNel[String, Option[String]] =
      json.map(j =>
          apply(j).leftMap(value => NonEmptyList(s"$value is an invalid value for $key")))
            .getOrElse(None.successNel)

            def apply(t: TortoiseJson): ValidationNel[String, Option[String]] =
              t match {
                case JsNull          => None.successNel
                case JsString("NIL") => None.successNel
                case JsString(s)     => Some(s).successNel
                case other           => other.toString.failureNel
              }
  }

  implicit object tortoiseJs2Direction extends JsonReader[TortoiseJson, Direction] {
    def apply(t: TortoiseJson) = t match {
      case JsString(s) if s.toUpperCase == "HORIZONTAL" =>
        Horizontal.successNel
      case JsString(s) if s.toUpperCase == "VERTICAL"   =>
        Vertical.successNel
      case other                                        =>
        s"Slider direction can only be 'Horizontal' or 'Vertical' but was $other".failureNel
    }
  }

  implicit object tortoiseJs2InputBoxType extends JsonReader[TortoiseJson, InputBoxType] {
    private def invalidType(s: String): String = s"Invalid input box type $s"
    def apply(t: TortoiseJson) = t match {
      case JsString(s) =>
        List(Num, Str, StrReporter, StrCommand, Col).find(_.name == s).toSuccess(NonEmptyList(invalidType(s)))
      case other => invalidType(other.toString).failureNel
    }
  }

  implicit object tortoiseJs2Chooseable extends JsonReader[TortoiseJson, List[Chooseable]] {
    import org.nlogo.core.{ ChooseableDouble, ChooseableList, ChooseableBoolean, ChooseableString }
    def apply(t: TortoiseJson): ValidationNel[String, List[Chooseable]] = t match {
      case JsArray(els) => (els map chooseableElement).foldLeft(List[Chooseable]().successNel[String]) {
        case (validList, c) => validList.flatMap(chooseables => c.map(chooseables :+ _))
      }
      case other        => s"choices must be a list of chooseable values - found $other".failureNel
    }

    def chooseableElement(t: TortoiseJson): ValidationNel[String, Chooseable] = t match {
      case JsDouble(d)    => ChooseableDouble(d).successNel
      case JsString(s)    => ChooseableString(s).successNel
      case JsBool(b)      => ChooseableBoolean(b).successNel
      case JsArray(elems) =>
        def toLogoList(els: Seq[TortoiseJson]): ValidationNel[String, LogoList] =
          els.foldLeft(LogoList.Empty.successNel[String]) {
            case (acc, el) => acc.flatMap(l =>
                el match {
                  case JsDouble(d) => l.lput(d: JDouble).successNel
                  case JsInt(i)    => l.lput(i: JInteger).successNel
                  case JsBool(b)   => l.lput(b: JBoolean).successNel
                  case JsString(s) => l.lput(s).successNel
                  case JsArray(a)  => toLogoList(a).map(newList => l.lput(newList))
                  case x           => s"could not convert $x to a chooseable value".failureNel
                })
          }
        toLogoList(elems).map(ChooseableList)
      case other          => s"Could not convert $other to a chooseable value".failureNel
    }
  }

  implicit object tortoiseJs2PenList extends JsonReader[TortoiseJson, List[Pen]] {
    private def penListError = s"Must supply a list of pens".failureNel

    def apply(json: TortoiseJson): ValidationNel[String, List[Pen]] = json match {
      case JsArray(els) => els.foldLeft(List[Pen]().successNel[String]) {
        case (acc, j@JsObject(_)) =>
          acc.flatMap(l => Jsonify.reader[JsObject, Pen](j).map(newPen => l :+ newPen))
        case (acc, other) => penListError
      }
      case other        => penListError
    }
  }
}