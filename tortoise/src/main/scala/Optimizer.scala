// (C) Uri Wilensky. https://github.com/NetLogo/Tortoise

package org.nlogo.tortoise

import
  java.lang.{ Double => JDouble }

import
  org.nlogo.core.{ Command, Syntax, Reporter }

import
  org.nlogo.core.{ prim, AstTransformer, ProcedureDefinition, ReporterApp, Statement },
    prim.{ _const, _fd, _other, _any, _count }

object Optimizer {

  // scalastyle:off class.name
  class _fdone extends Command {
    override def syntax: Syntax =
      Syntax.commandSyntax(agentClassString = "-T--")
  }

  object Fd1Transformer extends AstTransformer {
    override def visitStatement(statement: Statement): Statement = {
      statement match {
        case Statement(command: _fd, Seq(ReporterApp(reporter: _const, _, _)), _) if reporter.value == 1 => statement.copy(command = new _fdone, args = Seq())
        case _ => super.visitStatement(statement)
      }
    }
  }

  class _fdlessthan1 extends Command {
    override def syntax: Syntax =
      Syntax.commandSyntax(agentClassString = "-T--")
  }

  object FdLessThan1Transformer extends AstTransformer {
    override def visitStatement(statement: Statement): Statement = {
      statement match {
        case Statement(command: _fd, Seq(ReporterApp(_const(value: JDouble), _, _)), _) if ((value > -1) && (value < 1)) =>
          statement.copy(command = new _fdlessthan1)
        case _ =>
          super.visitStatement(statement)
      }
    }
  }

  class _anyother extends Reporter {
    override def syntax: Syntax =
      Syntax.reporterSyntax(right = List(Syntax.AgentsetType), ret = Syntax.BooleanType)
  }

  object AnyOtherTransformer extends AstTransformer {
    override def visitReporterApp(ra: ReporterApp): ReporterApp = {
      ra match {
        case ReporterApp(reporter: _any, Seq(ReporterApp(other: _other, otherArgs, _)), _) => ra.copy(reporter = new _anyother, args = otherArgs)
        case _ => super.visitReporterApp(ra)
      }
    }
  }

  class _countother extends Reporter {
    override def syntax: Syntax =
      Syntax.reporterSyntax(right = List(Syntax.AgentsetType), ret = Syntax.BooleanType)
  }
  // scalastyle:on class.name

  object CountOtherTransformer extends AstTransformer {
    override def visitReporterApp(ra: ReporterApp): ReporterApp = {
      ra match {
        case ReporterApp(reporter: _count, Seq(ReporterApp(other: _other, countArgs, _)), _) => ra.copy(reporter = new _countother, args = countArgs)
        case _ => super.visitReporterApp(ra)
      }
    }
  }

  def apply(pd: ProcedureDefinition): ProcedureDefinition = {
    val newDef = Fd1Transformer.visitProcedureDefinition(pd)
    val newDef1 = FdLessThan1Transformer.visitProcedureDefinition(newDef)
    val newDef2 = CountOtherTransformer.visitProcedureDefinition(newDef1)
    AnyOtherTransformer.visitProcedureDefinition(newDef2)
  }

}