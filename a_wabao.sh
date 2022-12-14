#!/bin/bash
# new Env('BBK-挖宝顺序助力版');
# export JD_LOG_XYZ_TOKEN="从机器人获取的token"
# export Proxy_Url="代理网址 例如：星空、熊猫 生成选择txt 一次一个"
# export WABAO_SUSSCESS_COUNT="111" #挖宝助力次数限制，助力111次
# export WABAO_PINS="指定pin助力，多个用英文&分割"
# export WABAO_BAN_PINS="123&456" #挖宝助力时这里指定的pin将不助力(黑名单)
# export CK_START_INDEX="10"  #从第10个号开始助力 可选参数,可以不填。
# export WABAO_SHUNXU_DELAY="2" # 助力等待多少秒 默认0秒 可选参数,可以不填。
# export WABAO_USE_PROXY="true" #强制使用代理 默认不用代理 可选参数,可以不填。
# 支持PIN或者链接方式(`wabaolist.txt`存放需要助力的URL,一行一个)
pwd
_ftype=""
use_get_arch=${BBK_ARCH}
get_arch=`arch`
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
        eval "./BBK/$_ftype.bbk -t wabao"
    else
        if [ ! -f "$PWD/$_ftype.bbk" ]; then
            echo "在$PWD/BBK目录、$PWD目录下均未找到文件$_ftype.bbk"
            exit 1
        fi
        echo "$PWD/$_ftype.bbk"
        eval "chmod +x $PWD/$_ftype.bbk"
        eval "$PWD/$_ftype.bbk -t wabao"
    fi
fi