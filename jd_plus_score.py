'''
京东查plus分
@Leaf

低于80的可能各种活动会开始火爆，仅供参考

const $ = new Env('查plus分');
cron: 56 8 * * *
'''
import os
import requests
import sys
import time


def printf(text):
    print(text)
    sys.stdout.flush()


def queryScore(ck, count):
    try:
        name = ck.split('pin=')[1].split(';')[0]
        printf(f"\n---- 账号[{count}][{name}] ----")
        headers = {
            "Host": "rsp.jd.com",
            "Connection": "keep-alive",
            "User-Agent": "JD4iPhone/168210%20(iPhone;%20iOS;%20Scale/2.00)",
            "Cookie": ck
        }
        url = f"https://rsp.jd.com/windControl/queryScore/v1?lt=m&an=plus.mobile&stamp={int(time.time() * 1000)}"
        result = requests.get(url=url, headers=headers).json()
        if 'code' in result and result['code'] == '1000':
            rs = result["rs"]
            printf(f"plus分: {rs['userSynthesizeScore']['totalScore']}")
            printf(f"周期: {rs['scoreUserInfo']['calBeginDate']} ~ {rs['scoreUserInfo']['calEndDate']}")
            printf(f"各项相对分数：")
            printf(f"账户信息 -- {rs['userDimensionScore']['accountInfo']}/5")
            printf(f"信用价值 -- {rs['userDimensionScore']['baiScore']}/5")
            printf(f"购物合规 -- {rs['userDimensionScore']['active']}/5")
            printf(f"购物历史 -- {rs['userDimensionScore']['shop']}/5")
            printf(f"售后行为 -- {rs['userDimensionScore']['shopAfter']}/5")
        elif 'msg' in result:
            printf(f"查询出错: {result['msg']}")
        else:
            printf('查询出错')
    except Exception as e:
        printf(e)


try:
    with open(os.path.join(os.path.dirname(__file__), 'cklist.txt'), 'r') as f:
        cks = f.read().split('\n')
except:
    cks = os.environ['JD_COOKIE'].split('&')

printf('plus分低于80的可能各种活动会开始火爆，仅供参考')
count = 0
for ck in cks:
    count += 1
    queryScore(ck, count)
