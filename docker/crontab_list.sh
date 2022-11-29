# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############活动##############
# 京东自动评价
30 21 * * * node /scripts/jd_autocomment.js >> /scripts/logs/jd_autocomment.log 2>&1
# 京东资产变动通知
30 21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 领京豆额外奖励
23 1,18 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 详细版京东京豆统计
20 22 * * * node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log 2>&1
# 京东多合一签到脚本修改版
0 0 * * * node /scripts/JD_DailyBonus.js >> /scripts/logs/JD_DailyBonus.log 2>&1
# 京东多合一签到
0 0 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 美丽研究院
20 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 头文字
30 4,16 * * * node /scripts/jd_carplay.js >> /scripts/logs/jd_carplay.log 2>&1
# 领现金
11 1,20 * * * node /scripts/jd_cash_nolan.js >> /scripts/logs/jd_cash_nolan.log 2>&1
# 微信签到领现金
11 1,20 * * * node /scripts/jd_cash_wx.js >> /scripts/logs/jd_cash_wx.log 2>&1
# 财富岛
1 0-23/2 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 京东日常签到-加密
1 0,8 * * * node /scripts/jd_dailysign.js >> /scripts/logs/jd_dailysign.log 2>&1
# 东东乐园
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
# 店铺签到
0 4,18 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
# LZ刮刮乐抽奖通用活动
31 1 1 1 1 node /scripts/jd_drawCenter.js >> /scripts/logs/jd_drawCenter.log 2>&1
# 京喜工厂
10 0,6-23 * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京豆夺宝
40,45 23 * * * node /scripts/jd_duobao.js >> /scripts/logs/jd_duobao.log 2>&1
# 积分换话费
33 7 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
# 东东农场日常任务
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 东东农场好友删减奖励
10 2 * * * node /scripts/jd_fruit_friend.js >> /scripts/logs/jd_fruit_friend.log 2>&1
# 东东农场好友删减奖励
20 4,16 * * * node /scripts/jd_fruit_help.js >> /scripts/logs/jd_fruit_help.log 2>&1
# 通用游戏任务
5 6-18/6 * * * node /scripts/jd_game.js >> /scripts/logs/jd_game.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 京东金榜
13 1,22 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 京洞察问卷通知
35 11 * * * node /scripts/jd_insight.js >> /scripts/logs/jd_insight.log 2>&1
# 京东到家果园
10 0,3,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
# 东东工厂
10 0,6-23 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 京东赚赚
10 1,19 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# 汪汪乐园-跑步+组队
30 0 * * * * node /scripts/jd_joy_park_run.ts >> /scripts/logs/jd_joy_park_run.log 2>&1
# 汪汪乐园每日任务
0 1,7,20 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1
# 汪汪赛跑-提现10元
3 0 0 * * 5 node /scripts/jd_joy_run_reward.ts >> /scripts/logs/jd_joy_run_reward.log 2>&1
# JoyJd任务脚本
0 1,7,20 * * * node /scripts/jd_joyjd_open.js >> /scripts/logs/jd_joyjd_open.log 2>&1
# JOY庄园每日任务
0 1,7,20 * * * node /scripts/jd_joymanor_task.js >> /scripts/logs/jd_joymanor_task.log 2>&1
# 京东金融-双签
10 19 * * * node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1
# 极速版签到提现
0 1 * * * node /scripts/jd_js_sign.js >> /scripts/logs/jd_js_sign.log 2>&1
# 京喜签到
20 1,8 * * * node /scripts/jd_jx_sign.js >> /scripts/logs/jd_jx_sign.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# joy抽奖机通用
0 0,10 * * * node /scripts/jd_lottery.js >> /scripts/logs/jd_lottery.log 2>&1
# 京东新品-集魔方兑换-本地log版
10 8 * * * node /scripts/jd_mofang.js >> /scripts/logs/jd_mofang.log 2>&1
# 生鲜早起打卡
15 6,7 * * * node /scripts/jd_morningSc.js >> /scripts/logs/jd_morningSc.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet_help.js >> /scripts/logs/jd_pet_help.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean_help.js >> /scripts/logs/jd_plantBean_help.log 2>&1
# 京东保价
40 19 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 闪购签到有礼
10 10 * * * node /scripts/jd_shangou.js >> /scripts/logs/jd_shangou.log 2>&1
# 京东签到
48 9,22 * * * node /scripts/jd_sign.js >> /scripts/logs/jd_sign.log 2>&1
# 京东签到翻牌
48 9,22 * * * node /scripts/sign_graphics_validate.js >> /scripts/logs/sign_graphics_validate.log 2>&1
# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
21 3,8 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东极速版签到免单
18 8,20 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 特务Z-II
35 10,18,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 特务集卡
2 10,18,20 * * * node /scripts/jd_superBrandJK.js >> /scripts/logs/jd_superBrandJK.log 2>&1
# 特务集勋章
8 10,18,20 * * * node /scripts/jd_superBrandJXZ.js >> /scripts/logs/jd_superBrandJXZ.log 2>&1
# 特务之明星送好礼
36 2,19 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1
# 探味奇遇记
31 0,13 13-20 8 * node /scripts/jd_tanwei.js >> /scripts/logs/jd_tanwei.log 2>&1
# 京东试用
4 1-22/8 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 京东试用待领取通知
22 15 * * * node /scripts/jd_try_notify.py >> /scripts/logs/jd_try_notify.log 2>&1
# 取关所有主播
55 22 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
# 批量取关京东店铺和商品
5 3,19 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 众筹许愿池
40 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 极速版我是大老板农场
5 0-23/6 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1
# 京享周周乐
2 6 * * 5 node /scripts/jd_xs_zzl.js >> /scripts/logs/jd_xs_zzl.log 2>&1
# 柠檬赚金币
20 0 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
# 东东爱消除
12 5-10/1 * * * node /scripts/jd_moxigame.js >> /scripts/logs/jd_moxigame.log 2>&1
# 京东宝藏榜
10 13 * * * node /scripts/jd_TreasureRank.js >> /scripts/logs/jd_TreasureRank.log 2>&1
# 京东推一推
10 3 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 宠汪汪🐕喂食
33 0-23/4 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 秒秒币
38 9 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京东小魔方
45 10 * * * node /scripts/jd_mf_new.js >> /scripts/logs/jd_mf_new.log 2>&1

