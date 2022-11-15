#!/bin/bash
# new Env('BBK-锦鲤顺序助力版');
# export JD_LOG_XYZ_TOKEN="从机器人获取的token"
# export KOIS_PINS="第1个要助力的pin&第2个要助力的pin" # 英文'&'分隔
# export Proxy_Url="代理网址 例如：星空、熊猫 生成选择txt 一次一个"
# export AUTO_OPEN_JINLI_READPACKET="true" # 助力满自动开红包，默认不开
# export JINLI_REDPACKET_IDS="要助力的红包ID&要助力的红包ID" # 英文'&'分隔，设置了此变量就直接助力,不获取助力码了
# export JINLI_BAN_PINS="123&456" #锦鲤助力时这里指定的pin将不助力(黑名单)
# export JINLI_SHUNXU_DEALY="2" #助力等待2秒,可选参数,可以不填,默认0秒
# export CK_START_INDEX="10"  #从第10个号开始助力,可选参数,可以不填
# export JINLI_SUCCESS_COUNT="90" # 每个号要助力多少个自动切下一个号,可选参数,可以不填,默认助力满
# export JINLI_USE_PROXY="true" #强制使用代理访问
# export JINLI_ONLY_APPCK="true" #仅执行appck
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
        eval "./BBK/$_ftype.bbk -t jinli"
    else
        if [ ! -f "$PWD/$_ftype.bbk" ]; then
            echo "在$PWD/BBK目录、$PWD目录下均未找到文件$_ftype.bbk"
            exit 1
        fi
        echo "$PWD/$_ftype.bbk"
        eval "chmod +x $PWD/$_ftype.bbk"
        eval "$PWD/$_ftype.bbk -t jinli"
    fi
fi