'''
new Env('热爱穿行-2022');
变量: RabbitToken
export RabbitToken="token值"

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

from MR_util.racx_task_2022 import main


if __name__ == '__main__':
    main()
