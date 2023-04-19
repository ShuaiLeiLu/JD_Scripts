# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

##############活动##############

# 京东资产变动
30 21 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change_pro.log 2>&1
# 领京豆额外奖励
23 1,18 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京豆详情统计
20 22 * * * node /scripts/jd_bean_info.js >> /scripts/logs/jd_bean_info.log 2>&1
# 京东多合一签到
0 7 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 美丽研究院
20 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 头文字J
30 4,16 * * * node /scripts/jd_car_play.js >> /scripts/logs/jd_car_play.log 2>&1
# 签到领现金
30 8,14 * * * node /scripts/jd_cash_nolan.js >> /scripts/logs/jd_cash_nolan.log 2>&1
# 微信签到领现金
16 0,5 * * * node /scripts/jd_cash_wx.js >> /scripts/logs/jd_cash_wx.log 2>&1
# 京喜财富岛
1 0-23/2 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 财富岛互助
33 0,14 * * * node /scripts/jd_cfd_help.js >> /scripts/logs/jd_cfd_help.log 2>&1
# 清空购物车
53 22 * * * node /scripts/jd_cleancart.js >> /scripts/logs/jd_cleancart.log 2>&1
# 摇京豆
11 0,18 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 京东快递-每日抽奖
30 9 * 7 * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
# 店铺签到
15 2,14 * * * node /scripts/jd_dpqd.js >> /scripts/logs/jd_dpqd.log 2>&1
# 积分换话费
33 7 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
# 东东农场好友删减奖励
10 2 * * * node /scripts/jd_fruit_friend.js >> /scripts/logs/jd_fruit_friend.log 2>&1
# 东东农场内部水滴互助
20 4,16 * * * node /scripts/jd_fruit_help.js >> /scripts/logs/jd_fruit_help.log 2>&1
# 东东农场日常任务
5 6-18/6 * * * node /scripts/jd_fruit_task.js >> /scripts/logs/jd_fruit_task.log 2>&1
# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 东东健康社区
13 1,6,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 东东健康社区收集能量收集
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 东东健康社区内部互助
5 4,14 * * * node /scripts/jd_health_help.js >> /scripts/logs/jd_health_help.log 2>&1
# 京洞察问卷通知
35 11 * * * node /scripts/jd_insight.js >> /scripts/logs/jd_insight.log 2>&1
# 京东赚赚修复版
10 1,19 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
26 0,19 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
# JOY庄园每日任务
11 1,15 * * * node /scripts/jd_joymanor_task.js >> /scripts/logs/jd_joymanor_task.log 2>&1
# 金融双签-加密
10 19 * * * node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1
# 极速版签到提现-加密
30 0,15 * * * node /scripts/jd_js_sign.js >> /scripts/logs/jd_js_sign.log 2>&1
# 京喜双签-加密
23 11,20 * * * node /scripts/jd_jx_sign.js >> /scripts/logs/jd_jx_sign.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kuaidi.js >> /scripts/logs/jd_kuaidi.log 2>&1
# 京东快递签到
10 0 * * * node /scripts/jd_kuaidi_leaf.js >> /scripts/logs/jd_kuaidi_leaf.log 2>&1
# 京东摇钱树
3 0-23/11 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 种豆得豆内部互助
40 4,17 * * * node /scripts/jd_plantBean_help.js >> /scripts/logs/jd_plantBean_help.log 2>&1
# 京东保价
39 20 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 闪购盲盒
20 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 闪购签到有礼
10 10 * * * node /scripts/jd_shangou.js >> /scripts/logs/jd_shangou.log 2>&1
# M京东签到
48 9,22 * * * node /scripts/jd_sign.js >> /scripts/logs/jd_sign.log 2>&1
# MM领京豆
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
# 赚京豆
21 11 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东签到翻牌
10 8 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
# 京东极速版领红包-加密
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 京东极速版
21 3,8 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 特务Z-II
35 10,18,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 特务集卡
2 10,18,20 * * * node /scripts/jd_superBrandJK_1.js >> /scripts/logs/jd_superBrandJK_1.log 2>&1
# 特务集勋章
8 10,18,20 * * * node /scripts/jd_superBrandJXZ.js >> /scripts/logs/jd_superBrandJXZ.log 2>&1
# 频道关注
6 8 * * * node /scripts/jd_supergz.js >> /scripts/logs/jd_supergz.log 2>&1
# 特务之明星送好礼
36 2,19 * * * node /scripts/jd_superBrandStar.js >> /scripts/logs/jd_superBrandStar.log 2>&1
# 京东超市任务
59 59 9 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 京东超市兑换
59 59 9 * * * node /scripts/jd_supermarket_exchange.js >> /scripts/logs/jd_supermarket_exchange.log 2>&1
# 取关所有主播
55 22 * * * node /scripts/jd_unsubscriLive.js >> /scripts/logs/jd_unsubscriLive.log 2>&1
# 批量取关店铺和商品
22 22 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 众筹许愿池
40 0,2 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 邀请有礼
45 0 * * * node /scripts/jd_yqyl.js >> /scripts/logs/jd_yqyl.log 2>&1
# 极速版赚金币邀请
20 0 * * * node /scripts/jd_zjb.js >> /scripts/logs/jd_zjb.log 2>&1
# 赚喜豆-TS版
15,30,45 0 * * * node /scripts/jd_zjd.ts >> /scripts/logs/jd_zjd.log 2>&1
# 超级品牌殿堂
18 10,18 * * * node /scripts/jd_ppdt.js >> /scripts/logs/jd_ppdt.log 2>&1
# 吃喝玩乐抽豆
45 2 * * * node /scripts/jd_lottery_chwl.js >> /scripts/logs/jd_lottery_chwl.log 2>&1
# 医药馆抽豆
32 1 * * * node /scripts/jd_lottery_yyg.js >> /scripts/logs/jd_lottery_yyg.log 2>&1
# 卷民空间站分红包
15 8,12,21 * * * node /scripts/jd_couponspace.js >> /scripts/logs/jd_couponspace.log 2>&1
# 京东魔方
45 10 * * * node /scripts/jd_mf_new.js >> /scripts/logs/jd_mf_new.log 2>&1
# 点点券
35 16 * * * node /scripts/jd_necklace_6dy.js >> /scripts/logs/jd_necklace_6dy.log 2>&1
# 临期京豆换积分
30 0 0 * * * node /scripts/jd_washbeans.js >> /scripts/logs/jd_washbeans.log 2>&1
# 物流积分换豆
30 0 0 * * * node /scripts/jd_fen2bean.js >> /scripts/logs/jd_fen2bean.log 2>&1
# 金融签到
0 4 * * * node /scripts/jd_jrsign.js >> /scripts/logs/jd_jrsign.log 2>&1




