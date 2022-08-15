/*
8.10-8.17 大牌狂欢品质嗨购
开卡脚本,一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 8.10-8.17 大牌狂欢品质嗨购 ]

请求太频繁会被黑ip
过10分钟再执行

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#8.10-8.17 大牌狂欢品质嗨购
1 1 1 1 * jd_opencardL215.js, tag=8.10-8.17 大牌狂欢品质嗨购, enabled=true

*/
const $ = new Env('8.10-8.17 大牌狂欢品质嗨购');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(Q0OQ000 => {
        cookiesArr.push(jdCookieNode[Q0OQ000]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(QQO00Q0 => QQO00Q0.cookie)].filter(OQOQOQQ => !!OQOQOQQ);
}
let lz_cookie = {};
allMessage = '';
message = '';
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
let lz_jdpin_token_cookie = '';
let activityCookie = '';
let cookies = [];
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {'open-url': 'https://bean.m.jd.com/'});
        return;
    }
    $.activityId = 'dz45d75c9840c09fd9bf0ce96d2e0d';
    $.shareUuid = 'c1e5383b4c394777b16cd65bf1c878d8';
    console.log('入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/aug/brandUnion/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid);
    let QQOQ0OQ = [];
    let O000Q00 = Math.floor(Math.random() * 3);
    let O0000OO = 0;
    O0000OO = Math.floor(Math.random() * QQOQ0OQ.length);
    $.shareUuid = QQOQ0OQ[O0000OO] ? QQOQ0OQ[O0000OO] : $.shareUuid;
    for (let Q0O0OOQ = 0; Q0O0OOQ < cookiesArr.length; Q0O0OOQ++) {
        cookie = cookiesArr[Q0O0OOQ];
        originCookie = cookiesArr[Q0O0OOQ];
        if (cookie) {
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = (Q0O0OOQ + 1);
            message = '';
            $.bean = 0;
            $.hotFlag = false;
            $.nickName = '';
            console.log('\n\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            await getUA();
            await run();
            await $.wait(3000);
            if (Q0O0OOQ == 0 && !$.actorUuid) break;
            if ($.outFlag || $.activityEnd) break;
        }
    }
    if ($.outFlag) {
        let QOO00OQ = '此ip已被限制，请过10分钟后再执行脚本';
        $.msg($.name, '', '' + QOO00OQ);
        if ($.isNode()) await notify.sendNotify('' + $.name, '' + QOO00OQ);
    }
    if (allMessage) {
        $.msg($.name, '', '' + allMessage);
    }
    console.log($.toStr(cookies));
})().catch(QOO0Q00 => $.logErr(QOO0Q00)).finally(() => $.done());

async function run() {
    try {
        $.joinShopStatus = true;
        $.hasEnd = true;
        $.endTime = 0;
        lz_jdpin_token_cookie = '';
        $.Token = '';
        $.Pin = '';
        let OQOQ000 = false;
        await getToken();
        if ($.Token == '') {
            console.log('获取[token]失败！');
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console.log('获取cookie失败');
            return;
        }
        if ($.activityEnd === true) {
            console.log('活动结束');
            return;
        }
        if ($.outFlag) {
            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
            return;
        }
        if (!$.shopId || !$.venderId) await takePostRequest('getSimpleActInfoVo');
        await takePostRequest('getMyPing');
        if (!$.Pin) {
            console.log('获取[Pin]失败！');
            return;
        }
        if ($.hotFlag) return;
        await takePostRequest('accessLogWithAD');
        await takePostRequest('getUserInfo');
        await takePostRequest('activityContent');
        if ($.hotFlag) return;
        if (!$.actorUuid) {
            console.log('获取不到[actorUuid]退出执行，请重新执行');
            return;
        }
        if (($.hasEnd === true) || (Date.now() > $.endTime)) {
            $.activityEnd = true;
            console.log('活动结束');
            return;
        }
        console.log($.actorUuid);
        await takePostRequest('drawContent');
        await $.wait(1000);
        $.openList = [];
        $.allOpenCard = false;
        await takePostRequest('checkOpenCard');
        if ($.allOpenCard == false) {
            console.log('开卡任务');
            for (o of $.openList) {
                $.openCard = false;
                if (o.openStatus == 0) {
                    OQOQ000 = true;
                    $.shopactivityId = '';
                    $.joinVenderId = o.venderId;
                    await getshopactivityId();
                    for (let OQO0QQ0 = 0; OQO0QQ0 < Array(5).length; OQO0QQ0++) {
                        if (OQO0QQ0 > 0) console.log('第' + OQO0QQ0 + '次 重新开卡');
                        await joinShop();
                        await $.wait(500);
                        if (($.errorJoinShop.indexOf('活动太火爆，请稍后再试') == -1) && ($.errorJoinShop.indexOf('加入店铺会员失败') == -1)) {
                            break;
                        }
                    }
                    if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') > -1) {
                        console.log('开卡失败❌ ，重新执行脚本');
                    } else {
                        $.joinStatus = true;
                    }
                    await takePostRequest('activityContent');
                    await takePostRequest('drawContent');
                    await takePostRequest('checkOpenCard');
                    await $.wait(1000);
                }
            }
        } else {
            console.log('已全部开卡');
        }
        $.log('关注: ' + $.followShop);
        if (!$.followShop && !$.outFlag) {
            OQOQ000 = true;
            await takePostRequest('followShop');
        }
        $.log('关注频道: ' + $.followPeony);
        if (!$.followPeony && !$.outFlag) {
            OQOQ000 = true;
            await takePostRequest('followPeony');
        }
        $.log('加购: ' + $.skuAddCart);
        if (!$.skuAddCart && !$.outFlag) {
            OQOQ000 = true;
            await takePostRequest('addSku');
            await $.wait(parseInt((Math.random() * 2000) + 1000, 10));
        }
        if (OQOQ000) {
            await takePostRequest('activityContent');
        }
        console.log($.score + '值');
        $.runFalag = true;
        let QQQQO0O = parseInt($.score / 1);
        console.log('抽奖次数为:' + QQQQO0O);
        for (m = 1; QQQQO0O--; m++) {
            console.log('第' + m + '次抽奖');
            await takePostRequest('抽奖');
            if ($.runFalag == false) break;
            if (Number(QQQQO0O) <= 0) break;
            if (m >= 1) {
                console.log('抽奖太多次，多余的次数请再执行脚本');
                break;
            }
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        if ($.outFlag) {
            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
            return;
        }
        console.log($.actorUuid);
        console.log('当前助力:' + $.shareUuid);
        if ($.index == 1) {
            $.shareUuid = $.actorUuid;
            console.log('后面的号都会助力:' + $.shareUuid);
        }
        if ($.index % 3 == 0) console.log('休息一下，别被黑ip了\n可持续发展');
        if ($.index % 3 == 0) await $.wait(parseInt(Math.random() * 5000 + 10000, 10));
    } catch (OQOQQO0) {
        console.log(OQOQQO0);
    }
}

async function takePostRequest(O00O0OO) {
    if ($.outFlag) return;
    let QOO0O0O = 'https://lzdz1-isv.isvjcloud.com';
    let OQO000O = '';
    let OQO0OO0 = 'POST';
    let OQO000Q = '';
    switch (O00O0OO) {
        case 'isvObfuscator':
            url = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            OQO000O = 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=66e3681131700de71385967326bf41cf9fc5e163&client=apple&clientVersion=10.1.4&st=1647872191952&sv=120&sign=af51071ecb7198d560b138c8528642f1';
            break;
        case 'getSimpleActInfoVo':
            url = QOO0O0O + '/dz/common/getSimpleActInfoVo';
            OQO000O = 'activityId=' + $.activityId;
            break;
        case 'getMyPing':
            url = QOO0O0O + '/customer/getMyPing';
            OQO000O = 'userId=' + ($.shopId || $.venderId || '') + '&token=' + $.Token + '&fromType=APP';
            break;
        case 'accessLogWithAD':
            url = QOO0O0O + '/common/accessLogWithAD';
            let QO0OOO0 = QOO0O0O + '/dingzhi/aug/brandUnion/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
            OQO000O = 'venderId=' + ($.shopId || $.venderId || '') + '&code=99&pin=' + encodeURIComponent($.Pin) + '&activityId=' + $.activityId + '&pageUrl=' + encodeURIComponent(QO0OOO0) + '&subType=app&adSource=';
            break;
        case 'getUserInfo':
            url = QOO0O0O + '/wxActionCommon/getUserInfo';
            OQO000O = 'pin=' + encodeURIComponent($.Pin);
            break;
        case'activityContent':
            url = QOO0O0O + '/dingzhi/aug/brandUnion/activityContent';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&pinImg=' + encodeURIComponent($.attrTouXiang) + '&nick=' + encodeURIComponent($.nickname) + '&cjyxPin=&cjhyPin=&shareUuid=' + $.shareUuid;
            break;
        case 'drawContent':
            url = QOO0O0O + '/dingzhi/taskact/common/drawContent';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            break;
        case 'checkOpenCard':
            url = QOO0O0O + '/dingzhi/aug/brandUnion/initOpenCard';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&shareUuid=' + $.shareUuid;
            break;
        case 'info':
            url = QOO0O0O + '/dingzhi/linkgame/task/opencard/info';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case 'startDraw':
            url = QOO0O0O + '/joint/order/draw';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&drawType=1';
            break;
        case 'followShop':
            url = QOO0O0O + '/dingzhi/aug/brandUnion/saveTask';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&shareUuid=' + $.shareUuid + '&taskType=23&taskValue=23';
            break;
        case 'sign':
        case 'addCart':
        case 'browseGoods':
            url = QOO0O0O + '/dingzhi/opencard/' + O00O0OO;
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            if (O00O0OO == 'browseGoods') OQO000O += '&value=' + $.visitSkuValue;
            break;
        case'邀请':
        case'助力':
            if (O00O0OO == '助力') {
                url = QOO0O0O + '/dingzhi/linkgame/assist';
            } else {
                url = QOO0O0O + '/dingzhi/linkgame/assist/status';
            }
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&shareUuid=' + $.shareUuid;
            break;
        case 'viewVideo':
        case'visitSku':
        case 'toShop':
        case 'followPeony':
        case 'addSku':
            url = QOO0O0O + '/dingzhi/aug/brandUnion/saveTask';
            let O0OOOOQ = '';
            let QO0O00Q = '';
            if (O00O0OO == 'viewVideo') {
                O0OOOOQ = 31;
                QO0O00Q = 31;
            } else if (O00O0OO == 'visitSku') {
                O0OOOOQ = 5;
                QO0O00Q = $.visitSkuValue || 5;
            } else if (O00O0OO == 'toShop') {
                O0OOOOQ = 14;
                QO0O00Q = $.toShopValue || 14;
            } else if (O00O0OO == 'followPeony') {
                O0OOOOQ = 6;
                QO0O00Q = 6;
            } else if (O00O0OO == 'addSku') {
                O0OOOOQ = 21;
                QO0O00Q = 21;
            }
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&taskType=' + O0OOOOQ + '&taskValue=' + QO0O00Q;
            break;
        case 'getDrawRecordHasCoupon':
            url = QOO0O0O + '/dingzhi/taskact/common/getDrawRecordHasCoupon';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case 'getShareRecord':
            url = QOO0O0O + '/dingzhi/taskact/common/getShareRecord';
            OQO000O = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case'抽奖':
            url = QOO0O0O + '/dingzhi/aug/brandUnion/draw';
            OQO000O = 'activityId=' + $.activityId + '&actorUuid=' + $.actorUuid + '&pin=' + encodeURIComponent($.Pin);
            break;
        default:
            console.log('错误' + O00O0OO);
    }
    let QOOQO0O = getPostRequest(url, OQO000O, OQO0OO0);
    return new Promise(async O0O0QOO => {
        $.post(QOOQO0O, (OO0Q00Q, QOOQO0Q, QO00QO0) => {
            try {
                setActivityCookie(QOOQO0Q);
                if (OO0Q00Q) {
                    if (QOOQO0Q && (typeof QOOQO0Q.statusCode != 'undefined')) {
                        if (QOOQO0Q.statusCode == 493) {
                            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
                            $.outFlag = true;
                        }
                    }
                    console.log('' + $.toStr(OO0Q00Q, OO0Q00Q));
                    console.log(O00O0OO + ' API请求失败，请检查网路重试');
                } else {
                    dealReturn(O00O0OO, QO00QO0);
                }
            } catch (Q0Q000O) {
                console.log(Q0Q000O, QOOQO0Q);
            } finally {
                O0O0QOO();
            }
        });
    });
}

async function dealReturn(QQQQ0O0, Q0Q000Q) {
    let O0Q0OQQ = '';
    try {
        if ((QQQQ0O0 != 'accessLogWithAD') || (QQQQ0O0 != 'drawContent')) {
            if (Q0Q000Q) {
                O0Q0OQQ = JSON.parse(Q0Q000Q);
            }
        }
    } catch (OQQQQ00) {
        console.log(QQQQ0O0 + ' 执行任务异常');
        console.log(Q0Q000Q);
        $.runFalag = false;
    }
    try {
        switch (QQQQ0O0) {
            case 'isvObfuscator':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.errcode == 0) {
                        if (typeof O0Q0OQQ.token != 'undefined') $.Token = O0Q0OQQ.token;
                    } else if (O0Q0OQQ.message) {
                        console.log('isvObfuscator ' + (O0Q0OQQ.message || ''));
                    } else {
                        console.log(Q0Q000Q);
                    }
                } else {
                    console.log(Q0Q000Q);
                }
                break;
            case 'getSimpleActInfoVo':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        if (typeof O0Q0OQQ.data.shopId != 'undefined') $.shopId = O0Q0OQQ.data.shopId;
                        if (typeof O0Q0OQQ.data.venderId != 'undefined') $.venderId = O0Q0OQQ.data.venderId;
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'getMyPing':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        if (O0Q0OQQ.data && (typeof O0Q0OQQ.data.secretPin != 'undefined')) $.Pin = O0Q0OQQ.data.secretPin;
                        if (O0Q0OQQ.data && (typeof O0Q0OQQ.data.nickname != 'undefined')) $.nickname = O0Q0OQQ.data.nickname;
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'getUserInfo':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        if (O0Q0OQQ.data && typeof O0Q0OQQ.data.yunMidImageUrl != 'undefined') $.attrTouXiang = O0Q0OQQ.data.yunMidImageUrl || 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'activityContent':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        $.endTime = O0Q0OQQ.data.endTime || O0Q0OQQ.data.activityVo && O0Q0OQQ.data.activityVo.endTime || O0Q0OQQ.data.activity.endTime || 0;
                        $.hasEnd = O0Q0OQQ.data.hasEnd || false;
                        $.score = O0Q0OQQ.data.score || 0;
                        $.actorUuid = O0Q0OQQ.data.actorUuid || '';
                        $.followShop = O0Q0OQQ.data.allFollowShop || false;
                        $.skuAddCart = O0Q0OQQ.data.skuAddCart || false;
                        $.followPeony = O0Q0OQQ.data.followPeony || false;
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'info':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        $.addCart = O0Q0OQQ.data.addCart || false;
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'checkOpenCard':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        let OO00QQQ = O0Q0OQQ.data.cardList1 || [];
                        let O0O0QQO = O0Q0OQQ.data.cardList2 || [];
                        let O0O0QQQ = O0Q0OQQ.data.cardList || [];
                        let OO0QQQ0 = O0Q0OQQ.data.openCardList || [];
                        let O0O0000 = O0Q0OQQ.data.openInfo || [];
                        $.openList = [...O0O0QQQ, ...OO00QQQ, ...O0O0QQO, ...OO0QQQ0, ...O0O0000];
                        $.allOpenCard = O0Q0OQQ.data.allOpenCard || O0Q0OQQ.data.isOpenCardStatus || false;
                        $.openCardScore1 = O0Q0OQQ.data.score1 || 0;
                        $.openCardScore2 = O0Q0OQQ.data.score2 || 0;
                        $.drawScore = O0Q0OQQ.data.score || 0;
                        if (O0Q0OQQ.data.beans || O0Q0OQQ.data.addBeanNum) console.log('开卡获得:' + (O0Q0OQQ.data.beans || O0Q0OQQ.data.addBeanNum) + '豆');
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'startDraw':
            case 'followShop':
            case 'viewVideo':
            case 'visitSku':
            case 'followPeony':
            case 'toShop':
            case 'addSku':
            case 'sign':
            case 'addCart':
            case 'browseGoods':
            case'抽奖':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        if (typeof O0Q0OQQ.data == 'object') {
                            let Q0OOOOQ = '';
                            let Q0QQOO0 = '抽奖';
                            if (O0Q0OQQ.data.taskbeanNum) {
                                Q0OOOOQ = O0Q0OQQ.data.taskbeanNum + '京豆';
                            }
                            if (O0Q0OQQ.data.addPoint) {
                                Q0OOOOQ += ' ' + O0Q0OQQ.data.addPoint + '游戏机会';
                            }
                            if (QQQQ0O0 == 'followShop') {
                                Q0QQOO0 = '关注';
                                if (O0Q0OQQ.data.beanNumMember && O0Q0OQQ.data.assistSendStatus) {
                                    Q0OOOOQ += ' 额外获得:' + O0Q0OQQ.data.beanNumMember + '京豆';
                                }
                            } else if ((QQQQ0O0 == 'addSku') || QQQQ0O0 == 'addCart') {
                                Q0QQOO0 = '加购';
                            } else if (QQQQ0O0 == 'viewVideo') {
                                Q0QQOO0 = '热门文章';
                            } else if (QQQQ0O0 == 'toShop') {
                                Q0QQOO0 = '浏览店铺';
                            } else if (QQQQ0O0 == 'followPeony') {
                                Q0QQOO0 = '关注频道';
                            } else if ((QQQQ0O0 == 'visitSku') || (QQQQ0O0 == 'browseGoods')) {
                                Q0QQOO0 = '浏览商品';
                            } else if (QQQQ0O0 == 'sign') {
                                Q0QQOO0 = '签到';
                            } else {
                                Q0OOOOQ = (O0Q0OQQ.data.wdsrvo.drawOk == true) && (O0Q0OQQ.data.wdsrvo.name || '空气💨');
                            }
                            if (!Q0OOOOQ) {
                                Q0OOOOQ = '空气💨';
                            }
                            console.log(Q0QQOO0 + '获得:' + (Q0OOOOQ || Q0Q000Q));
                        } else {
                            console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                        }
                    } else if (O0Q0OQQ.errorMessage) {
                        $.runFalag = false;
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case 'getDrawRecordHasCoupon':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && (O0Q0OQQ.result === true)) {
                        console.log('我的奖品：');
                        let OQ0O0OO = 0;
                        let Q0Q0OQO = 0;
                        for (let QO0OOOO in O0Q0OQQ.data) {
                            let QO0OOOQ = O0Q0OQQ.data[QO0OOOO];
                            if (QO0OOOQ.infoName == '20京豆' && QO0OOOQ.drawStatus && QO0OOOQ.value) {
                                OQ0O0OO++;
                                Q0Q0OQO = QO0OOOQ.infoName.replace('京豆', '');
                            } else {
                                console.log('' + QO0OOOQ.infoName);
                            }
                        }
                        if (OQ0O0OO > 0) console.log('邀请好友(' + OQ0O0OO + '):' + ((OQ0O0OO * parseInt(Q0Q0OQO, 10)) || 30) + '京豆');
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case'getShareRecord':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.result && O0Q0OQQ.result === true && O0Q0OQQ.data) {
                        $.ShareCount = O0Q0OQQ.data.length;
                        $.log('=========== 你邀请了:' + $.ShareCount + '个\n');
                    } else if (O0Q0OQQ.errorMessage) {
                        console.log(QQQQ0O0 + ' ' + (O0Q0OQQ.errorMessage || ''));
                    } else {
                        console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
                break;
            case'邀请':
            case'助力':
                if (typeof O0Q0OQQ == 'object') {
                    if (O0Q0OQQ.data.status == 200) {
                        if (QQQQ0O0 == '助力') {
                            console.log('助力成功');
                        } else {
                            $.yaoqing = true;
                        }
                    } else if (O0Q0OQQ.data.status == 105) {
                        console.log('已经助力过');
                    } else if (O0Q0OQQ.data.status == 104) {
                        console.log('已经助力其他人');
                    } else if (O0Q0OQQ.data.status == 101) {
                    } else {
                        console.log(Q0Q000Q);
                    }
                } else {
                    console.log(QQQQ0O0 + ' ' + Q0Q000Q);
                }
            case 'accessLogWithAD':
            case 'drawContent':
                break;
            default:
                console.log(QQQQ0O0 + '-> ' + Q0Q000Q);
        }
        if (typeof O0Q0OQQ == 'object') {
            if (O0Q0OQQ.errorMessage) {
                if (O0Q0OQQ.errorMessage.indexOf('火爆') > -1) {
                    $.hotFlag = true;
                }
            }
        }
    } catch (OO0000O) {
        console.log(OO0000O);
    }
}

function getPostRequest(QQQO0QO, OQ0O0OQ, Q0Q0OQQ = 'POST') {
    let O0QQOQQ = {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookie,
        'User-Agent': $.UA,
        'X-Requested-With': 'XMLHttpRequest'
    };
    if (QQQO0QO.indexOf('https://lzdz1-isv.isvjcloud.com') > -1) {
        O0QQOQQ.Referer = 'https://lzdz1-isv.isvjcloud.com/dingzhi/aug/brandUnion/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
        O0QQOQQ.Cookie = '' + ((lz_jdpin_token_cookie && lz_jdpin_token_cookie) || '') + ($.Pin && ('AUTH_C_USER=' + $.Pin) + ';' || '') + activityCookie;
    }
    return {'url': QQQO0QO, 'method': Q0Q0OQQ, 'headers': O0QQOQQ, 'body': OQ0O0OQ, 'timeout': 30000};
}

function getCk() {
    return new Promise(OQQO0QQ => {
        let OOQOQQ0 = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/aug/brandUnion/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid,
            'followRedirect': false,
            'headers': {'User-Agent': $.UA},
            'timeout': 30000
        };
        $.get(OOQOQQ0, async (QO00OQO, Q0QOQOQ, O0Q0QQO) => {
            try {
                if (QO00OQO) {
                    if (Q0QOQOQ && (typeof Q0QOQOQ.statusCode != 'undefined')) {
                        if (Q0QOQOQ.statusCode == 493) {
                            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
                            $.outFlag = true;
                        }
                    }
                    console.log('' + $.toStr(QO00OQO));
                    console.log($.name + ' cookie API请求失败，请检查网路重试');
                } else {
                    let O0Q0000 = O0Q0QQO.match(/(活动已经结束)/) && O0Q0QQO.match(/(活动已经结束)/)[1] || '';
                    if (O0Q0000) {
                        $.activityEnd = true;
                        console.log('活动已结束');
                    }
                    setActivityCookie(Q0QOQOQ);
                }
            } catch (O0QOOQQ) {
                $.logErr(O0QOOQQ, Q0QOQOQ);
            } finally {
                OQQO0QQ();
            }
        });
    });
}

function setActivityCookie(QO0Q00O) {
    if (QO0Q00O.headers['set-cookie']) {
        cookie = originCookie + ';';
        for (let OQQO0OO of QO0Q00O.headers['set-cookie']) {
            lz_cookie[OQQO0OO.split(';')[0].substr(0, OQQO0OO.split(';')[0].indexOf('='))] = OQQO0OO.split(';')[0].substr(OQQO0OO.split(';')[0].indexOf('=') + 1);
        }
        for (const O0Q000O of Object.keys(lz_cookie)) {
            cookie += (O0Q000O + '=' + lz_cookie[O0Q000O] + ';');
        }
        activityCookie = cookie;
    }
}

async function getToken() {
    let QO0Q000 = await getSign('isvObfuscator', {'id': '', 'url': 'https://lzdz1-isv.isvjcloud.com'});
    let OOQOQO0 = {
        'url': 'https://api.m.jd.com/client.action?functionId=isvObfuscator',
        'headers': {
            'Host': 'api.m.jd.com',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'JD4iPhone/167650 (iPhone; iOS 13.7; Scale/3.00)',
            'Accept-Language': 'zh-Hans-CN;q=1',
            'Accept-Encoding': 'gzip, deflate, br'
        },
        'body': '' + $.Signz
    };
    return new Promise(QO0QQQO => {
        $.post(OOQOQO0, (OQQOQ0Q, O0Q0OOO, OQQOQ0O) => {
            try {
                if (OQQOQ0Q) {
                    $.log(OQQOQ0Q);
                } else {
                    if (OQQOQ0O) {
                        OQQOQ0O = JSON.parse(OQQOQ0O);
                        if (OQQOQ0O.code === '0') {
                            $.Token = OQQOQ0O.token;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (O0QQQQO) {
                $.log(O0QQQQO);
            } finally {
                QO0QQQO();
            }
        });
    });
}

function getSign(OQ0OO0Q, OQ0OO0O) {
    let OOQQQOQ = {'fn': OQ0OO0Q, 'body': JSON.stringify(OQ0OO0O)};
    let OOQQQOO = {
        'url': 'https://api.nolanstore.top/sign',
        'body': JSON.stringify(OOQQQOQ),
        'headers': {'Content-Type': 'application/json'},
        'timeout': 30000
    };
    return new Promise(async Q0QOOO0 => {
        $.post(OOQQQOO, (OOQ0QQQ, QQ0Q0Q0, OOQQQOQ) => {
            try {
                if (OOQ0QQQ) {
                    console.log('' + JSON.stringify(OOQ0QQQ));
                    console.log($.name + ' getSign API请求失败，请检查网路重试');
                } else {
                    OOQQQOQ = JSON.parse(OOQQQOQ);
                    if (typeof OOQQQOQ === 'object' && OOQQQOQ && OOQQQOQ.body) {
                        $.Signz = OOQQQOQ.body || '';
                    } else {
                        console.log('获取服务失败~~');
                    }
                }
            } catch (Q0Q0QO0) {
                $.logErr(Q0Q0QO0, QQ0Q0Q0);
            } finally {
                Q0QOOO0(OOQQQOQ);
            }
        });
    });
};

async function getUA() {
    $.UA = 'jdapp;iPhone;10.1.4;13.1.2;' + randomString(40) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(OQ0QQ00) {
    OQ0QQ00 = OQ0QQ00 || 32;
    let OOQQQO0 = 'abcdef0123456789', OOQOOQ0 = OOQQQO0.length, Q00QOQ0 = '';
    for (i = 0; i < OQ0QQ00; i++) Q00QOQ0 += OOQQQO0.charAt(Math.floor(Math.random() * OOQOOQ0));
    return Q00QOQ0;
}

function jsonParse(OO0QOQO) {
    if (typeof OO0QOQO == 'string') {
        try {
            return JSON.parse(OO0QOQO);
        } catch (Q0Q0QOQ) {
            console.log(Q0Q0QOQ);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
}

async function joinShop() {
    if (!$.joinVenderId) return;
    return new Promise(async O0QO00Q => {
        $.errorJoinShop = '活动太火爆，请稍后再试';
        let QQ00Q0Q = '';
        if ($.shopactivityId) QQ00Q0Q = ',"activityId":' + $.shopactivityId;
        let O0QO00O = '{"venderId":"' + $.joinVenderId + '","shopId":"' + $.joinVenderId + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + QQ00Q0Q + ',"channel":406}';
        let QO0QOQQ = await geth5st();
        const QQ000QO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + O0QO00O + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + QO0QOQQ,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(QQ000QO, async (OQ0Q0QQ, OOQO00O, OQ0Q0QO) => {
            try {
                OQ0Q0QO = OQ0Q0QO && OQ0Q0QO.match(/jsonp_.*?\((.*?)\);/) && OQ0Q0QO.match(/jsonp_.*?\((.*?)\);/)[1] || OQ0Q0QO;
                let QQ0Q0OO = $.toObj(OQ0Q0QO, OQ0Q0QO);
                if (QQ0Q0OO && typeof QQ0Q0OO == 'object') {
                    if (QQ0Q0OO && (QQ0Q0OO.success === true)) {
                        console.log(QQ0Q0OO.message);
                        $.errorJoinShop = QQ0Q0OO.message;
                        if (QQ0Q0OO.result && QQ0Q0OO.result.giftInfo) {
                            for (let QOQOQOQ of QQ0Q0OO.result.giftInfo.giftList) {
                                console.log('入会获得:' + QOQOQOQ.discountString + QOQOQOQ.prizeName + QOQOQOQ.secondLineDesc);
                            }
                        }
                    } else if (QQ0Q0OO && (typeof QQ0Q0OO == 'object') && QQ0Q0OO.message) {
                        $.errorJoinShop = QQ0Q0OO.message;
                        console.log('' + (QQ0Q0OO.message || ''));
                    } else {
                        console.log(OQ0Q0QO);
                    }
                } else {
                    console.log(OQ0Q0QO);
                }
            } catch (O0QOOOQ) {
                $.logErr(O0QOOOQ, OOQO00O);
            } finally {
                O0QO00Q();
            }
        });
    });
}

async function getshopactivityId() {
    return new Promise(async OQ00O0Q => {
        let Q000Q00 = '{"venderId":"' + $.joinVenderId + '","channel":406,"payUpShop":true}';
        let Q0000OQ = await geth5st();
        const QOQOOQ0 = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + Q000Q00 + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + Q0000OQ,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(QOQOOQ0, async (O00QOQ0, OOQ0O0Q, QOQQQO0) => {
            try {
                QOQQQO0 = QOQQQO0 && QOQQQO0.match(/jsonp_.*?\((.*?)\);/) && QOQQQO0.match(/jsonp_.*?\((.*?)\);/)[1] || QOQQQO0;
                let QQ00QOO = $.toObj(QOQQQO0, QOQQQO0);
                if (QQ00QOO && (typeof QQ00QOO == 'object')) {
                    if (QQ00QOO && (QQ00QOO.success == true)) {
                        console.log('入会:' + (QQ00QOO.result.shopMemberCardInfo.venderCardName || ''));
                        $.shopactivityId = QQ00QOO.result.interestsRuleList && QQ00QOO.result.interestsRuleList[0] && QQ00QOO.result.interestsRuleList[0].interestsInfo && QQ00QOO.result.interestsRuleList[0].interestsInfo.activityId || '';
                    }
                } else {
                    console.log(QOQQQO0);
                }
            } catch (OOQQ0QQ) {
                $.logErr(OOQQ0QQ, OOQ0O0Q);
            } finally {
                OQ00O0Q();
            }
        });
    });
}

var _0xodb = 'jsjiami.com.v6', _0xodb_ = ['‮_0xodb'],
    _0x3c1b = [_0xodb, 'wqkgAcKeOQ==', 'NBDCnDEf', 'wqhhw7HDi8Ka', 'wrzCuHM/w6Qj', 'wpJyw7PDuMKE', 'E0bCnA==', 'BxbCg8KoSA==', 'QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==', 'N8KtRw==', 'LDbCrMKSfQ==', 'w6LDpG1qNA==', 'wpEXUcOjCA==', 'FV7Ch8KGZQ==', 'CWPCmXPCnA==', 'wrg0w4g=', 'YsOYw4oQw7oKAMOowok=', 'AAbCgQwHw6g=', 'w5bDjClaCcO8YcK7', 'JMKpOsO2ayRI', 'WsO5CMKfwq7DnMOJwqE=', 'w40KQnnCnMOYf8OJw4Na', 'PsKnRGvCtjUTZEhE', 'w7QjwrVeScOw', 'JcKgIcOdeA==', 'OMKgX0rCkA==', 'VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==', 'w5bCmMOtwrAXw4Je', 'UHLCjsOsw4wt', 'F8O3VsOmKXXDjDsLJCQ=', 'wqojL8K/L8Ke', 'PlfDgMKmScOr', 'wqZow6nDn8Kwwog=', 'CUzCmH4=', 'wrHDkTw=', 'TMONdMOcwq0=', 'KgzCnQYSw7Q=', 'OcK7N8K8w7w=', 'wro5I8KvOsKY', 'wro+w5FlHFg=', 'c8OmMcKhwoM=', 'WQQTw6Fo', 'xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if (function (OOOOQ0O, QQ0QQO0, OOOOQ0Q) {
    function O000OQQ(QOQ0000, QOQ0QQQ, OQ0QO0Q, Q00Q0Q0, OQ0QO0O, OOQQQ0Q) {
        QOQ0QQQ = (QOQ0QQQ >> 0x8), OQ0QO0O = 'po';
        var OOQQQ0O = 'shift', QQ0OQQQ = 'push', OOQQQ0Q = '‮';
        if (QOQ0QQQ < QOQ0000) {
            while (--QOQ0000) {
                Q00Q0Q0 = OOOOQ0O[OOQQQ0O]();
                if ((QOQ0QQQ === QOQ0000) && OOQQQ0Q === '‮' && (OOQQQ0Q.length === 1)) {
                    QOQ0QQQ = Q00Q0Q0, OQ0QO0Q = OOOOQ0O[OQ0QO0O + 'p']();
                } else if (QOQ0QQQ && (OQ0QO0Q.replace(/[xNUxuLOwqBleVKE=]/g, '') === QOQ0QQQ)) {
                    OOOOQ0O[QQ0OQQQ](Q00Q0Q0);
                }
            }
            OOOOQ0O[QQ0OQQQ](OOOOQ0O[OOQQQ0O]());
        }
        return 968710;
    };
    return O000OQQ(++QQ0QQO0, OOOOQ0Q) >> QQ0QQO0 ^ OOOOQ0Q;
}(_0x3c1b, 411, 105216), _0x3c1b) {
    _0xodb_ = _0x3c1b.length ^ 0x19b;
}
;

function _0x80d0(OQ000QO, QOQO00Q) {
    OQ000QO = ~~'0x'.concat(OQ000QO.slice(1));
    var QOQQ00O = _0x3c1b[OQ000QO];
    if (_0x80d0.ZHvfIH === undefined) {
        (function () {
            var O00000Q = typeof window !== 'undefined' ? window : typeof process === 'object' && (typeof require === 'function') && (typeof global === 'object') ? global : this;
            var O000000 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            O00000Q.atob || (O00000Q.atob = function (O000QQQ) {
                var QOQ000O = String(O000QQQ).replace(/=+$/, '');
                for (var OOO0Q0O = 0, OOO00Q0, QOQ0OO0, QOQ000Q = 0, OOOOO0Q = ''; QOQ0OO0 = QOQ000O.charAt(QOQ000Q++); ~QOQ0OO0 && (OOO00Q0 = OOO0Q0O % 4 ? (OOO00Q0 * 64 + QOQ0OO0) : QOQ0OO0, OOO0Q0O++ % 4) ? OOOOO0Q += String.fromCharCode(0xff & OOO00Q0 >> -2 * OOO0Q0O & 0x6) : 0) {
                    QOQ0OO0 = O000000.indexOf(QOQ0OO0);
                }
                return OOOOO0Q;
            });
        }());

        function QQ0OQQ0(QQO0OQO, QOQO00Q) {
            var QQO0OQQ = [], O00QQOO = 0, OQ000O0, QOQQOOQ = '', QOOOQO0 = '';
            QQO0OQO = atob(QQO0OQO);
            for (var O00OOQQ = 0, QOQQOOO = QQO0OQO.length; O00OOQQ < QOQQOOO; O00OOQQ++) {
                QOOOQO0 += ('%' + ('00' + QQO0OQO.charCodeAt(O00OOQQ).toString(16)).slice(-2));
            }
            QQO0OQO = decodeURIComponent(QOOOQO0);
            for (var O00OOQO = 0; O00OOQO < 256; O00OOQO++) {
                QQO0OQQ[O00OOQO] = O00OOQO;
            }
            for (O00OOQO = 0; O00OOQO < 256; O00OOQO++) {
                O00QQOO = ((O00QQOO + QQO0OQQ[O00OOQO]) + QOQO00Q.charCodeAt(O00OOQO % QOQO00Q.length)) % 256;
                OQ000O0 = QQO0OQQ[O00OOQO];
                QQO0OQQ[O00OOQO] = QQO0OQQ[O00QQOO];
                QQO0OQQ[O00QQOO] = OQ000O0;
            }
            O00OOQO = 0;
            O00QQOO = 0;
            for (var OOOQ0O0 = 0; OOOQ0O0 < QQO0OQO.length; OOOQ0O0++) {
                O00OOQO = (O00OOQO + 1 % 256);
                O00QQOO = (O00QQOO + QQO0OQQ[O00OOQO] % 256);
                OQ000O0 = QQO0OQQ[O00OOQO];
                QQO0OQQ[O00OOQO] = QQO0OQQ[O00QQOO];
                QQO0OQQ[O00QQOO] = OQ000O0;
                QOQQOOQ += String.fromCharCode(QQO0OQO.charCodeAt(OOOQ0O0) ^ QQO0OQQ[(QQO0OQQ[O00OOQO] + QQO0OQQ[O00QQOO]) % 256]);
            }
            return QOQQOOQ;
        }

        _0x80d0.uZkhLK = QQ0OQQ0;
        _0x80d0.PgBxtv = {};
        _0x80d0.ZHvfIH = true;
    }
    var OOO0Q0Q = _0x80d0.PgBxtv[OQ000QO];
    if (OOO0Q0Q === undefined) {
        if (_0x80d0.mzwOwg === undefined) {
            _0x80d0.mzwOwg = true;
        }
        QOQQ00O = _0x80d0.uZkhLK(QOQQ00O, QOQO00Q);
        _0x80d0.PgBxtv[OQ000QO] = QOQQ00O;
    } else {
        QOQQ00O = OOO0Q0Q;
    }
    return QOQQ00O;
};

function generateFp() {
    var QQOQOQ0 = {
        'ryoPy': '0123456789', 'mfvwK': function (O000OQ0, O000OOQ) {
            return O000OQ0 | O000OOQ;
        }, 'WutDU': function (QOQ0OQ0, QQ0OQO0) {
            return QOQ0OQ0 + QQ0OQO0;
        }
    };
    let Q000Q0O = QQOQOQ0[_0x80d0('‮0', 'wj)i')];
    let Q000Q0Q = 13;
    let QOQQ000 = '';
    for (; Q000Q0Q--;) QOQQ000 += Q000Q0O[QQOQOQ0[_0x80d0('‮1', 'Z*hR')](Math.random() * Q000Q0O[_0x80d0('‮2', '3@Q*')], 0)];
    return QQOQOQ0[_0x80d0('‮3', 'Z*hR')](QOQQ000, Date[_0x80d0('‮4', 'Da%Y')]())[_0x80d0('‮5', 'LwWi')](0, 16);
}

function geth5st() {
    var Q0OQQ00 = {
        'XLFYP': 'yyyyMMddhhmmssSSS',
        'ERdzy': ';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;',
        'eaFvs': _0x80d0('‮6', '@hXf'),
        'NqklQ': function (Q0OOO0O, Q0OQ0OQ) {
            return Q0OOO0O(Q0OQ0OQ);
        },
        'DqrqH': function (O00O00O, QOOOOOO) {
            return O00O00O + QOOOOOO;
        },
        'GEDpa': function (OOOQ0QO, OO0OQ00) {
            return OOOQ0QO + OO0OQ00;
        },
        'tJryJ': function (QOOOOOQ, OO0O0OQ) {
            return QOOOOOQ + OO0O0OQ;
        }
    };
    let OOOQ0QQ = Date[_0x80d0('‮7', '3B2S')]();
    let O0OQOQQ = generateFp();
    let OQO0O0Q = new Date(OOOQ0QQ).Format(Q0OQQ00[_0x80d0('‫8', 'LwWi')]);
    let Q0O00Q0 = [Q0OQQ00.ERdzy, Q0OQQ00[_0x80d0('‮9', 'SCQF')]];
    let OQO0O0O = Q0O00Q0[random(0, Q0O00Q0.length)];
    return Q0OQQ00[_0x80d0('‫a', '%HoM')](encodeURIComponent, Q0OQQ00.DqrqH(Q0OQQ00[_0x80d0('‫b', 'vWDW')](Q0OQQ00[_0x80d0('‮c', 'Da%Y')](OQO0O0Q, ';') + O0OQOQQ, OQO0O0O), Date[_0x80d0('‮d', '7]Bn')]()));
}

Date[_0x80d0('‫e', 'gM9$')][_0x80d0('‫f', 'wj)i')] = function (O0OQOQO) {
    var QOOO00O = {
        'wGAVl': function (OO0O0O0, QOOO00Q) {
            return OO0O0O0 / QOOO00Q;
        }, 'aborC': function (QOOOOO0, OQO0O00) {
            return QOOOOO0 + OQO0O00;
        }, 'khvyA': function (OQOQ0QO, QOOOOQO) {
            return OQOQ0QO === QOOOOQO;
        }, 'RkhHN': function (OO0O0QO, O0O0OQO) {
            return OO0O0QO == O0O0OQO;
        }
    };
    var QQO0OO0, O00QQO0 = this, QQO000O = O0OQOQO, OQOQ0QQ = {
        'M+': (O00QQO0[_0x80d0('‮10', 'lEbY')]() + 1),
        'd+': O00QQO0.getDate(),
        'D+': O00QQO0[_0x80d0('‮11', 'm]Ir')](),
        'h+': O00QQO0.getHours(),
        'H+': O00QQO0[_0x80d0('‫12', 'hLmb')](),
        'm+': O00QQO0[_0x80d0('‫13', 'y[mS')](),
        's+': O00QQO0[_0x80d0('‮14', '3B2S')](),
        'w+': O00QQO0[_0x80d0('‫15', '$n0%')](),
        'q+': Math[_0x80d0('‮16', 'm]Ir')](QOOO00O.wGAVl(QOOO00O[_0x80d0('‮17', '3B2S')](O00QQO0.getMonth(), 3), 3)),
        'S+': O00QQO0[_0x80d0('‫18', '3aAN')]()
    };
    /(y+)/i.test(QQO000O) && (QQO000O = QQO000O[_0x80d0('‫19', 'bosv')](RegExp.$1, ''[_0x80d0('‮1a', '3aAN')](O00QQO0[_0x80d0('‫1b', 'n1@B')]())[_0x80d0('‮1c', 'ctu&')](4 - RegExp.$1[_0x80d0('‫1d', 'T8*w')])));
    for (var O00OOQ0 in OQOQ0QQ) {
        if (new RegExp('('[_0x80d0('‮1e', 'Z*hR')](O00OOQ0, ')'))[_0x80d0('‮1f', 'Da%Y')](QQO000O)) {
            var QQO000Q, QOQQOQ0 = QOOO00O.khvyA('S+', O00OOQ0) ? _0x80d0('‫20', 'dvcH') : '00';
            QQO000O = QQO000O.replace(RegExp.$1, QOOO00O[_0x80d0('‫21', 'Jp@*')](1, RegExp.$1[_0x80d0('‫22', 'wj)i')]) ? OQOQ0QQ[O00OOQ0] : QOOO00O[_0x80d0('‫23', 'JH9X')](''.concat(QOQQOQ0), OQOQ0QQ[O00OOQ0]).substr(''[_0x80d0('‮24', 'ctu&')](OQOQ0QQ[O00OOQ0])[_0x80d0('‫25', '7]Bn')]));
        }
    }
    return QQO000O;
};

function random(OOOQQ00, QOOQQOQ) {
    var O000QOO = {
        'NzMvB': function (Q0O00QQ, O000QOQ) {
            return Q0O00QQ + O000QOQ;
        }, 'pvLRb': function (QOO0QQQ, QOO0000) {
            return QOO0QQQ * QOO0000;
        }, 'KNgAC': function (QOO0QQO, O0O0OQ0) {
            return QOO0QQO - O0O0OQ0;
        }
    };
    return O000QOO[_0x80d0('‫26', 'hLmb')](Math[_0x80d0('‫27', 'eShm')](O000QOO[_0x80d0('‮28', 'ctu&')](Math.random(), O000QOO.KNgAC(QOOQQOQ, OOOQQ00))), OOOQQ00);
};
_0xodb = 'jsjiami.com.v6';

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s, ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t}
                    : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
};
