'''
cron: 5 10 * * *
new Env('京东评价');
变量: JD_COOKIE, RabbitToken
export RabbitToken="token值"

一次评价四个商品
log剩余次数大于1300方可使用
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
    os.system('apk add --no-cache gcc python3-dev libc-dev libssl-dev build-essential libffi-dev libsas12-dev')
    os.system('pip3 install pycryptodome requests')

systype = "x86"
sysver = platform.uname()
if "aarch64" in sysver:
    from MR_util.Comment_util import run
elif "Windows" in sysver:
    from jd_comment_util import run
else:
    from MR_util.Comment_util import run

if "LOG_DEBUG" in os.environ:  # 判断调试模式变量
    logging.basicConfig(level=logging.DEBUG, format='%(message)s')  # 设置日志为 Debug等级输出
    logger = logging.getLogger(__name__)  # 主模块
    logger.debug("\nDEBUG模式开启!\n")  # 消息输出
else:  # 判断分支
    logging.basicConfig(level=logging.INFO, format='%(message)s')  # Info级日志
    logger = logging.getLogger(__name__)  # 主模块

if __name__ == '__main__':
    run()
