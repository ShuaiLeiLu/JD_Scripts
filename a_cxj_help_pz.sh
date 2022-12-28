#!/bin/bash
# new Env('BBK-炸年兽膨胀助力');
# export JD_LOG_XYZ_TOKEN="从机器人获取的token"
# export Proxy_Url="代理网址 例如：星空、熊猫 生成选择txt 一次一个"
# export CXJ_HELP_PZ_PINS="jd_xxx&jd_xxx" # 指定pin助力，多个用英文&分割
# export CXJ_HELP_PZ_DEALY="2" #助力等待2秒,可选参数,可以不填,默认2秒
# export CXJ_PZ_CK_START_INDEX="10" #从第11个ck开始助力
# export CXJ_PZ_INVITE_CODES="xxx&xxx" #膨胀助力码 & 分隔，如填写会优先执行
# export CXJ_PZ_BAN_PINS="jd_xxx&jd_xxx" #跳过黑号pin
# export CXJ_MCK="true" #启用MCK，默认禁用MCK
# export CXJ_PZ_USE_PROXY="true" #强制使用代理 默认不用代理 可选参数,可以不填。
# 支持 膨胀助力码(CXJ_PZ_INVITE_CODES) 或 pin(CXJ_HELP_PZ_PINS) 或者 链接方式(`cxj_pz_list.txt`存放需要助力的URL,一行一个)
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
        eval "./BBK/$_ftype.bbk -t cxj_help_pz"
    else
        if [ ! -f "$PWD/$_ftype.bbk" ]; then
            echo "在$PWD/BBK目录、$PWD目录下均未找到文件$_ftype.bbk"
            exit 1
        fi
        echo "$PWD/$_ftype.bbk"
        eval "chmod +x $PWD/$_ftype.bbk"
        eval "$PWD/$_ftype.bbk -t cxj_help_pz"
    fi
fi