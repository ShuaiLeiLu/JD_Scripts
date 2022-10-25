'''
new Env('热爱穿行-2022');
变量: RabbitToken
export RabbitToken="token值"
export CXJ_THREADS_NUMS=1
export CXJ_PINS="pin1,pin2,pin3"
export CXJ_NUM="0"
export CXJ_RAISE="1"


CXJ_THREADS_NUMS: 并发数
CXJ_PIN: 需要跑的ck的pin值
CXJ_NUM: 需要的前多少个号为车头
CXJ_RAISE: 是否自动升级，1：为自动升级，0为不自动升级

log剩余次数大于5000方可使用
'''

import os

if not os.environ.get("LogHost"):
    print("请先填写LogHost变量\nexport LogHost='xxxxx'")
    exit()

try:
    CXJ_THREADS_NUM = int(os.environ.get("CXJ_THREADS_NUMS", 1))
except:
    CXJ_THREADS_NUM = 1
if CXJ_THREADS_NUM > 1:
    try:
        from gevent import monkey

        monkey.patch_all()
    except:
        import os

        os.system("apk add g++ python3-dev libc-dev gcc libev-dev")
        os.system("pip3 install --upgrade pip")
        os.system("pip3 install --upgrade pip")
        os.system("pip3 install gevent")
    try:
        from gevent import monkey

        monkey.patch_all()
    except:
        print("缺少依赖，无法并发")
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