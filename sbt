#!/bin/bash

CURR_DIR=`dirname $0`
export JAVA_HOME='/home/jordan/Downloads/jdk1.8.0_11'

export PATH=$JAVA_HOME/bin:$PATH
JAVA=$JAVA_HOME/bin/java

# Most of these settings are fine for everyone
XSS=-Xss2m
XMX=-Xmx2048m
XX=
ENCODING=-Dfile.encoding=UTF-8
HEADLESS=-Djava.awt.headless=true
BOOT=xsbt.boot.Boot

SBT_LAUNCH=$HOME/.sbt/sbt-launch-0.13.2.jar
URL='http://repo.typesafe.com/typesafe/ivy-releases/org.scala-sbt/sbt-launch/0.13.2/sbt-launch.jar'

if [ ! -f $SBT_LAUNCH ] ; then
  echo "downloading" $URL
  mkdir -p $HOME/.sbt
  curl -s -S -f $URL -o $SBT_LAUNCH || exit
fi

# Windows/Cygwin users need these settings
if [[ `uname -s` == *CYGWIN* ]] ; then

  # While you might want the max heap size lower, you'll run out
  # of heap space from running the tests if you don't crank it up
  # (namely, from TestChecksums)
  XMX=-Xmx2048m
  SBT_LAUNCH=`cygpath -w $SBT_LAUNCH`

fi

"$JAVA" \
    $XSS $XMX $XX \
    $ENCODING \
    $JAVA_OPTS \
    $HEADLESS \
    -classpath $SBT_LAUNCH \
    $BOOT "$@"
