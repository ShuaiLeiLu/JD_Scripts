'''
new Env('热爱穿行-组队-2022');
export RabbitToken="token值"
export ZD_ReverseCk=0 或 1 或 2
export ZD_HELP_PIN="pin1,pin2,pin3"
export ZD_HELP_NUM=200
export ZD_GROUP_MAX_NUM=30

变量:
RabbitToken： 机器人给你发的token
ZD_HELP_PIN：设置车头pin
ZD_HELP_NUM：设置前多少个号为车头,设置了pin时，这个设置失效
ZD_ReverseCk：0：正序，1：反序，2：乱序
ZD_GROUP_MAX_NUM：每个队伍的人数

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

from MR_util.racx_util_2022 import main_zd


if __name__ == '__main__':
    main_zd()