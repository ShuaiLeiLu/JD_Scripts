'''
new Env('热爱穿行-组队-2022');
export RabbitToken="token值"
export ZD_ReverseCk=true 或者 false
export RABBIT_HELP_PIN="pin1,pin2,pin3"

变量:
RabbitToken： 机器人给你发的token
RABBIT_HELP_PIN：设置车头pin
ZD_ReverseCk：ck是否反序运行，默认正序

log剩余次数大于6500方可使用
'''

try:
    import requests
    import Crypto
except ImportError:
    import shutil
    import os

    print("缺依赖，尝试进行修复，也可手动修复： pip3 install requests pycryptodome")
    os.system('pip3 install pycryptodome requests')

from MR_util.racx_util_2022 import main_zd


if __name__ == '__main__':
    main_zd()
