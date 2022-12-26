#!/bin/bash
# new Env('BBK-炸年兽任务');
# export JD_LOG_XYZ_TOKEN="从机器人获取的token"
# export Proxy_Url="代理网址 例如：星空、熊猫 生成选择txt 一次一个"
# export CXJ_OPEN_CARD_TASK="true" # 默认不做开卡任务，要做开卡任务就设置
# export CXJ_AUTO_PROMOTE="true" # 自动升级
# export CXJ_TASK_BINGFA="true" # 启用并发
# export CXJ_BINGFA_COUNT="5" # 5个并发数量，限制最多20个，默认4个
# export CXJ_MCK="true" #启用MCK，默认禁用MCK
# export CXJ_TASK_BAN_PINS="jd_xxx&jd_xxx" #跳过黑号pin
pwd
_ftype=""
get_arch=`arch`
use_get_arch=${BBK_ARCH}
if [ "$use_get_arch" != "" ]; then
  get_arch=$use_get_arch
  echo "指定运行$use_get_arch"
fi
echo $get_arch
if [[ $get_arch =~ "x86_64" ]];then
	_ftype="linux-amd64"
elif [[ $get_arch =~ "x86" ]];then
	_ftype="linux-386"
elif [[ $get_arch =~ "i386" ]];then
	_ftype="linux-386"
elif [[ $get_arch =~ "aarch64" ]];then
	_ftype="linux-arm64"
elif [[ $get_arch =~ "arm" ]];then
	_ftype="linux-arm"
else
	_ftype=""
fi

if [ $_ftype == "" ]; then
	echo "不支持的架构$get_arch"
else
	echo "执行$_ftype"
    if [ -f "$PWD/BBK/$_ftype.bbk" ]; then
        echo "$PWD/BBK/$_ftype.bbk"
        eval "chmod +x ./BBK/$_ftype.bbk"
        eval "./BBK/$_ftype.bbk -t cxj"
    else
        if [ ! -f "$PWD/$_ftype.bbk" ]; then
            echo "在$PWD/BBK目录、$PWD目录下均未找到文件$_ftype.bbk"
            exit 1
        fi
        echo "$PWD/$_ftype.bbk"
        eval "chmod +x $PWD/$_ftype.bbk"
        eval "$PWD/$_ftype.bbk -t cxj"
    fi
fi