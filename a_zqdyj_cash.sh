#!/bin/bash
# new Env('BBK-赚钱大赢家提现');
# cron 0 0 * * * a_zqdyj_cash.sh
# export JD_LOG_XYZ_TOKEN="从机器人获取的token"
# export Proxy_Url="代理网址 例如：星空、熊猫 生成选择txt 一次一个"
# export ZQDYJ_WX_T_PROXY="true" #强制使用代理 默认不用代理 可选参数,可以不填。
# export ZQDYJ_WX_T_PINS="指定pin，多个用英文&分割"
# export ZQDYJ_WX_T="true" #自动提现，默认最大可提现金额
# export ZQDYJ_WX_T_NUM="100" #指定金额 不生效时默认采用最大可提现金额 仅支持设置0.3 1 3 8 20 100
# export ZQDYJ_WX_T_TOP_CKS="10" #提现前10个号 可选参数,可以不填。
# 仅支持PIN方式
# "pin提现" 和 "提现前几个" 两者都存在时优先执行pin方式提现
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
        eval "./BBK/$_ftype.bbk -t zqdyj_wx"
    else
        if [ ! -f "$PWD/$_ftype.bbk" ]; then
            echo "在$PWD/BBK目录、$PWD目录下均未找到文件$_ftype.bbk"
            exit 1
        fi
        echo "$PWD/$_ftype.bbk"
        eval "chmod +x $PWD/$_ftype.bbk"
        eval "$PWD/$_ftype.bbk -t zqdyj_wx"
    fi
fi