'''
cron: 5 0 * * *
new Env('安静的锦鲤');
入口: 京东首页>领券>锦鲤红包
变量: JD_COOKIE, kois, Rabbit_Url
export JD_COOKIE="第1个cookie&第2个cookie"
export kois=" 第1个cookie的pin,第2个cookie的pin "
export RabbitToken="token值"
export Proxy_Url="http://xxxx"

支持设置多车头 kois="pin1,pin2"
403自动换代理
先本地ip，后代理
代理ip黑名单，获取到重复的重新获取
脚本内或环境变量填写，优先环境变量
'''
import logging  # 用于日志输出

import os.path
import platform

try:
    import requests
    import Crypto
except ImportError:
    import shutil
    import os

    print("缺依赖，尝试进行修复，也可手动修复： pip3 install requests pycryptodome")
    os.system('pip3 install pycryptodome requests')

systype = "x86"
sysver = platform.uname()
if os.environ.get("Koi_Thread"):
    from MR_util.Koi_threads import main
else:
    from MR_util.Koi_util import main



if "LOG_DEBUG" in os.environ:  # 判断调试模式变量
    logging.basicConfig(level=logging.DEBUG, format='%(message)s')  # 设置日志为 Debug等级输出
    logger = logging.getLogger(__name__)  # 主模块
    logger.debug("\nDEBUG模式开启!\n")  # 消息输出
else:  # 判断分支
    logging.basicConfig(level=logging.INFO, format='%(message)s')  # Info级日志
    logger = logging.getLogger(__name__)  # 主模块


if __name__ == '__main__':
    main()
