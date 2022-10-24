'''
new Env('热爱穿行-膨胀-助力码-2022');
export RabbitToken="token值"
export HELP_CODE="助力码"
export HELP_CODE_ReverseCk=0 或 1 或 2

变量:
RabbitToken： 机器人给你发的token
HELP_CODE_ReverseCk：0：正序，1：反序，2：乱序
HELP_CODE：助力码

log剩余次数大于5000方可使用
'''

try:
    import requests
    import Crypto
except ImportError:
    import shutil
    import os

    print("缺依赖，尝试进行修复，也可手动修复： pip3 install requests pycryptodome")
    os.system('pip3 install pycryptodome requests')

from MR_util.racx_util_2022 import help_by_invite_code


if __name__ == '__main__':
    help_by_invite_code()