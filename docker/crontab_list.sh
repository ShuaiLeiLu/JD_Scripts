# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############活动##############
# 京东资产变动通知
30 21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 领京豆额外奖励
23 1,18 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 详细版京东京豆统计
20 22 * * * node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log 2>&1
# 京东多合一签到
0 0 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 领现金
11 1,20 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 领现金
11 2,21 * * * node /scripts/jd_cash_freesoul.js >> /scripts/logs/jd_cash_freesoul.log 2>&1
# 微信签到领现金
11 1,20 * * * node /scripts/jd_cash_wx.js >> /scripts/logs/jd_cash_wx.log 2>&1
# 财富岛
1 0-23/2 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东乐园
30 7 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
# 京东集魔方
2 0,11 * * * node /scripts/jd_desire.js >> /scripts/logs/jd_desire.log 2>&1
# 店铺签到
0 4,18 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
# 汪汪乐园-跑步+组队
30 0 * * * * node /scripts/jd_joy_park_run.ts >> /scripts/logs/jd_joy_park_run.log 2>&1
# 汪汪乐园每日任务
0 1,7,20 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1
# 京豆夺宝
40,45 23 * * * node /scripts/jd_duobao.js >> /scripts/logs/jd_duobao.log 2>&1
## 发财挖宝
#40 6,17 * * * node /scripts/jd_fcwb.js >> /scripts/logs/jd_fcwb.log 2>&1
# 发财挖宝付费
40 1,17 * * * node /scripts/jd_fcwb_token.js >> /scripts/logs/jd_fcwb_token.log 2>&1
# 发财挖宝Nark免费
40 1,17 * * * node /scripts/jd_fcwb_mfhelp.js >> /scripts/logs/jd_fcwb_mfhelp.log 2>&1
# 东东农场好友删减奖励
10 2 * * * node /scripts/jd_fruit_friend.js >> /scripts/logs/jd_fruit_friend.log 2>&1
# 东东农场日常任务
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 通用游戏任务
5 6-18/6 * * * node /scripts/jd_game.js >> /scripts/logs/jd_game.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 东东健康社区收集能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 京东到家果园
10 0,3,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
# 东东工厂
10 0,6-23 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 京东赚赚
10 1,19 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# JoyJd任务脚本
0 1,7,20 * * * node /scripts/jd_joyjd_open.js >> /scripts/logs/jd_joyjd_open.log 2>&1
# JOY庄园每日任务
0 1,7,20 * * * node /scripts/jd_joymanor_task.js >> /scripts/logs/jd_joymanor_task.log 2>&1
# 极速版签到提现
0 1 * * * node /scripts/jd_js_sign.js >> /scripts/logs/jd_js_sign.log 2>&1
# 京喜工厂自动化生产
20 7,19 * * * node /scripts/jd_jx_factory_automation.js >> /scripts/logs/jd_jx_factory_automation.log 2>&1
# 京喜工厂
10 0,6-23 * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京东-京喜双签
23 11,20 * * * node /scripts/jd_jx_sign.js >> /scripts/logs/jd_jx_sign.log 2>&1
# 京喜工厂商品列表详情
10 10 * * * node /scripts/jd_jxgckc.js >> /scripts/logs/jd_jxgckc.log 2>&1
# 京喜牧场
20 0-23/2 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
# 砍价免费拿
0 0 * * * node /scripts/jd_kanjia.js >> /scripts/logs/jd_kanjia.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东摇钱树
3 0-23/2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
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
# 特务
35 10,18,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 特务
2 10,18,20 * * * node /scripts/jd_superBrandJK.js >> /scripts/logs/jd_superBrandJK.log 2>&1
# 京东试用
4 1-22/8 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 京东试用待领取通知
22 15 * * * node /scripts/jd_try_notify.js >> /scripts/logs/jd_try_notify.log 2>&1
# 推一推
0 1 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 推一推助力码
0 0 * * * node /scripts/jd_tyt_ks.js >> /scripts/logs/jd_tyt_ks.log 2>&1
# 取关所有主播
55 22 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
# 批量取关京东店铺和商品
5 3,19 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 众筹许愿池
40 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 众筹许愿池
3 0,11 * * * node /scripts/jd_wq_wxsign.js >> /scripts/logs/jd_wq_wxsign.log 2>&1
# 极速版我是大老板农场
5 0-23/6 * * * node /scripts/jd_wsdlb.js >> /scripts/logs/jd_wsdlb.log 2>&1
# 京享周周乐
2 6 * * 5 node /scripts/jd_xs_zzl.js >> /scripts/logs/jd_xs_zzl.log 2>&1
# 柠檬赚金币
20 0 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
