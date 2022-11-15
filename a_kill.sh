#!/bin/bash
# new Env('BBK-刹车');

pkill linux-386.bbk
pkill linux-amd64.bbk
pkill linux-arm64.bbk
pkill linux-arm.bbk

killall linux-386.bbk
killall linux-amd64.bbk
killall linux-arm64.bbk
killall linux-arm.bbk

# 查询指定程序并停止
function kill_app() {
    app_name=$1
    pid=`ps -ef | grep $app_name | grep -v grep | awk '{print $1}'`
    if [ -n "$pid" ]; then
        echo "$app_name is running, kill it pid:$pid"
        kill -9 $pid
    else
        echo "$app_name is not running"
    fi
}
# kill_app BBK

kill_app linux-386.bbk
kill_app linux-amd64.bbk
kill_app linux-arm64.bbk
kill_app linux-arm.bbk