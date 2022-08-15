/*
8.8~8.29 酒水会员盛典
新增开卡脚本，一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 8.8~8.29 酒水会员盛典]

请求太频繁会被黑ip
过10分钟再执行
  
cron:1 1 1 1 * 
============Quantumultx===============
[task_local]
#8.8~8.29 酒水会员盛典
1 1 1 1 * jd_opencardL214.js, tag=8.8~8.29 酒水会员盛典, enabled=true

*/
const $ = new Env('8.8~8.29 酒水会员盛典');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(QOQQO0Q => {
        cookiesArr.push(jdCookieNode[QOQQO0Q]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(Q0OQQOQ => Q0OQQOQ.cookie)].filter(QOQQO0O => !!QOQQO0O);
}
let opencard_draw = '0';
opencard_draw = $.isNode() ? process.env.opencard_draw ? process.env.opencard_draw : opencard_draw : $.getdata('opencard_draw') ? $.getdata('opencard_draw') : opencard_draw;
allMessage = '';
message = '';
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
let lz_jdpin_token_cookie = '';
let activityCookie = '';
let cookies = [];
let lz_cookie = {};
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {'open-url': 'https://bean.m.jd.com/'});
        return;
    }
    $.activityId = 'dz5049da83678c4aa0b2cb5ff01dc5';
    $.shareUuid = '72a5a8b6623a4b5c8bb0637fd5e1246d';
    console.log('入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/drinkcategory/piecetoge1/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid);
    let OQO0QQO = [];
    let OQO0000 = Math.floor(Math.random() * 3);
    let OQO0QQQ = 0;
    OQO0QQQ = Math.floor(Math.random() * OQO0QQO.length);
    $.shareUuid = OQO0QQO[OQO0QQQ] ? OQO0QQO[OQO0QQQ] : $.shareUuid;
    for (let Q0O0OQO = 0; Q0O0OQO < cookiesArr.length; Q0O0OQO++) {
        cookie = cookiesArr[Q0O0OQO];
        originCookie = cookiesArr[Q0O0OQO];
        if (cookie) {
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = (Q0O0OQO + 1);
            message = '';
            $.bean = 0;
            $.hotFlag = false;
            $.nickName = '';
            console.log('\n\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            await getUA();
            await run();
            await $.wait(1000);
            if ((Q0O0OQO == 0) && !$.actorUuid) break;
            if ($.outFlag || $.activityEnd) break;
        }
    }
    if ($.outFlag) {
        let QQOO0Q0 = '此ip已被限制，请过10分钟后再执行脚本';
        $.msg($.name, '', '' + QQOO0Q0);
        if ($.isNode()) await notify.sendNotify('' + $.name, '' + QQOO0Q0);
    }
    if (allMessage) {
        $.msg($.name, '', '' + allMessage);
    }
    console.log($.toStr(cookies));
})().catch(QQQQ0QO => $.logErr(QQQQ0QO)).finally(() => $.done());

async function run() {
    try {
        $.joinShopStatus = true;
        $.hasEnd = true;
        $.endTime = 0;
        lz_jdpin_token_cookie = '';
        $.Token = '';
        $.Pin = '';
        let QOOQO0O = false;
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
        await takePostRequest('drawContent');
        await $.wait(1000);
        $.openList = [];
        $.allOpenCard = false;
        await takePostRequest('checkOpenCard');
        console.log($.actorUuid);
        if ($.allOpenCard == false) {
            console.log('开卡任务');
            for (o of $.openList) {
                $.openCard = false;
                if (o.openStatus == 0) {
                    QOOQO0O = true;
                    $.joinVenderId = o.venderId;
                    $.errorJoinShop = '';
                    for (let OQQQO0O = 0; OQQQO0O < Array(7).length; OQQQO0O++) {
                        if (OQQQO0O > 0) console.log('第' + OQQQO0O + '次 重新开卡');
                        await joinShop();
                        if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') == -1) break;
                    }
                    if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') > -1) {
                        console.log('开卡失败❌ ，重新执行脚本');
                        allMessage += '【账号' + $.index + '】开卡失败❌ ，重新执行脚本\n';
                        $.joinShopStatus = false;
                    }
                    await takePostRequest('activityContent');
                    await takePostRequest('drawContent');
                    await takePostRequest('checkOpenCard');
                    await $.wait(parseInt(Math.random() * 2000 + 1000, 10));
                }
            }
        } else {
            console.log('已全部开卡');
        }
        $.log('关注: ' + $.followShop);
        if (!$.followShop && !$.outFlag) {
            QOOQO0O = true;
            await takePostRequest('followShop');
        }
        $.log('关注频道: ' + $.followPeony);
        if (!$.followPeony && !$.outFlag) {
            QOOQO0O = true;
            await takePostRequest('followPeony');
        }
        $.log('加购: ' + $.followSku);
        if (!$.followSku && !$.outFlag) {
            QOOQO0O = true;
            await takePostRequest('addSku');
            await $.wait(parseInt(Math.random() * 2000 + 1000, 10));
        }
        if (QOOQO0O) {
            await takePostRequest('activityContent');
        }
        console.log($.score + '值');
        if (opencard_draw + '' !== '0') {
            $.runFalag = true;
            let O0O0QOQ = parseInt($.score / 100);
            opencard_draw = parseInt(opencard_draw, 10);
            if (O0O0QOQ > opencard_draw) O0O0QOQ = opencard_draw;
            console.log('抽奖次数为:' + O0O0QOQ);
            for (m = 1; O0O0QOQ--; m++) {
                console.log('第' + m + '次抽奖');
                await takePostRequest('抽奖');
                if ($.runFalag == false) break;
                if (Number(O0O0QOQ) <= 0) break;
                if (m >= 10) {
                    console.log('抽奖太多次，多余的次数请再执行脚本');
                    break;
                }
                await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
            }
        } else console.log('如需抽奖请设置环境变量[opencard_draw]为"3" 3为次数');
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
        await takePostRequest('getDrawRecordHasCoupon');
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
        await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
        if ($.index % 3 == 0) await $.wait(parseInt(Math.random() * 5000 + 10000, 10));
    } catch (OO00OOO) {
        console.log(OO00OOO);
    }
}

async function takePostRequest(QQQOO0Q) {
    if ($.outFlag) return;
    let Q0OOQOQ = 'https://lzdz1-isv.isvjcloud.com';
    let OQOOQ00 = '';
    let OQOO0OO = 'POST';
    let QQQ00QQ = '';
    switch (QQQOO0Q) {
        case 'isvObfuscator':
            url = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            OQOOQ00 = 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=66e3681131700de71385967326bf41cf9fc5e163&client=apple&clientVersion=10.1.4&st=1647872191952&sv=120&sign=af51071ecb7198d560b138c8528642f1';
            break;
        case 'getSimpleActInfoVo':
            url = Q0OOQOQ + '/dz/common/getSimpleActInfoVo';
            OQOOQ00 = 'activityId=' + $.activityId;
            break;
        case 'getMyPing':
            url = Q0OOQOQ + '/customer/getMyPing';
            OQOOQ00 = 'userId=' + ($.shopId || $.venderId || '') + '&token=' + $.Token + '&fromType=APP';
            break;
        case'accessLogWithAD':
            url = Q0OOQOQ + '/common/accessLogWithAD';
            let Q0OOQOO = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
            OQOOQ00 = 'venderId=' + ($.shopId || $.venderId || '') + '&code=99&pin=' + encodeURIComponent($.Pin) + '&activityId=' + $.activityId + '&pageUrl=' + encodeURIComponent(Q0OOQOO) + '&subType=app&adSource=';
            break;
        case 'getUserInfo':
            url = Q0OOQOQ + '/wxActionCommon/getUserInfo';
            OQOOQ00 = 'pin=' + encodeURIComponent($.Pin);
            break;
        case 'activityContent':
            url = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/activityContent';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&pinImg=' + encodeURIComponent($.attrTouXiang) + '&nick=' + encodeURIComponent($.nickname) + '&cjyxPin=&cjhyPin=&shareUuid=' + $.shareUuid;
            break;
        case 'drawContent':
            url = Q0OOQOQ + '/dingzhi/taskact/common/drawContent';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            break;
        case 'checkOpenCard':
            url = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/initOpenCard';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&shareUuid=' + $.shareUuid;
            break;
        case 'info':
            url = Q0OOQOQ + '/dingzhi/linkgame/task/opencard/info';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case 'startDraw':
            url = Q0OOQOQ + '/joint/order/draw';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&drawType=1';
            break;
        case 'followShop':
            url = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/saveTask';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&shareUuid=' + $.shareUuid + '&taskType=23&taskValue=23';
            break;
        case 'sign':
        case'addCart':
        case 'browseGoods':
            url = Q0OOQOQ + '/dingzhi/opencard/' + QQQOO0Q;
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            if (QQQOO0Q == 'browseGoods') OQOOQ00 += '&value=' + $.visitSkuValue;
            break;
        case'邀请':
        case'助力':
            if (QQQOO0Q == '助力') {
                url = Q0OOQOQ + '/dingzhi/linkgame/assist';
            } else {
                url = Q0OOQOQ + '/dingzhi/linkgame/assist/status';
            }
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&shareUuid=' + $.shareUuid;
            break;
        case 'viewVideo':
        case 'visitSku':
        case 'toShop':
        case 'followPeony':
        case 'addSku':
            url = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/saveTask';
            let OQQQ0QQ = '';
            let OQOO0OQ = '';
            if (QQQOO0Q == 'viewVideo') {
                OQQQ0QQ = 31;
                OQOO0OQ = 31;
            } else if (QQQOO0Q == 'visitSku') {
                OQQQ0QQ = 5;
                OQOO0OQ = $.visitSkuValue || 5;
            } else if (QQQOO0Q == 'toShop') {
                OQQQ0QQ = 14;
                OQOO0OQ = $.toShopValue || 14;
            } else if (QQQOO0Q == 'followPeony') {
                OQQQ0QQ = 6;
                OQOO0OQ = 6;
            } else if (QQQOO0Q == 'addSku') {
                OQQQ0QQ = 21;
                OQOO0OQ = 21;
            }
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&taskType=' + OQQQ0QQ + '&taskValue=' + OQOO0OQ;
            break;
        case 'getDrawRecordHasCoupon':
            url = Q0OOQOQ + '/dingzhi/taskact/common/getDrawRecordHasCoupon';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case 'getShareRecord':
            url = Q0OOQOQ + '/dingzhi/taskact/common/getShareRecord';
            OQOOQ00 = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case'抽奖':
            url = Q0OOQOQ + '/dingzhi/drinkcategory/piecetoge1/draw';
            OQOOQ00 = 'activityId=' + $.activityId + '&actorUuid=' + $.actorUuid + '&pin=' + encodeURIComponent($.Pin);
            break;
        default:
            console.log('错误' + QQQOO0Q);
    }
    let OQQQ0QO = getPostRequest(url, OQOOQ00, OQOO0OO);
    return new Promise(async OO00OQQ => {
        $.post(OQQQ0QO, (OO0QOOO, Q0OOQO0, OQOOQ0O) => {
            try {
                setActivityCookie(Q0OOQO0);
                if (OO0QOOO) {
                    if (Q0OOQO0 && typeof Q0OOQO0.statusCode != 'undefined') {
                        if (Q0OOQO0.statusCode == 493) {
                            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
                            $.outFlag = true;
                        }
                    }
                    console.log('' + $.toStr(OO0QOOO, OO0QOOO));
                    console.log(QQQOO0Q + ' API请求失败，请检查网路重试');
                } else {
                    dealReturn(QQQOO0Q, OQOOQ0O);
                }
            } catch (OO0QOOQ) {
                console.log(OO0QOOQ, Q0OOQO0);
            } finally {
                OO00OQQ();
            }
        });
    });
}

async function dealReturn(OQQ0O0O, Q0Q0QQO) {
    let OQQOO00 = '';
    try {
        if (OQQ0O0O != 'accessLogWithAD' || OQQ0O0O != 'drawContent') {
            if (Q0Q0QQO) {
                OQQOO00 = JSON.parse(Q0Q0QQO);
            }
        }
    } catch (OO00QQO) {
        console.log(OQQ0O0O + ' 执行任务异常');
        console.log(Q0Q0QQO);
        $.runFalag = false;
    }
    try {
        switch (OQQ0O0O) {
            case 'isvObfuscator':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.errcode == 0) {
                        if (typeof OQQOO00.token != 'undefined') $.Token = OQQOO00.token;
                    } else if (OQQOO00.message) {
                        console.log('isvObfuscator ' + (OQQOO00.message || ''));
                    } else {
                        console.log(Q0Q0QQO);
                    }
                } else {
                    console.log(Q0Q0QQO);
                }
                break;
            case 'getSimpleActInfoVo':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        if (typeof OQQOO00.data.shopId != 'undefined') $.shopId = OQQOO00.data.shopId;
                        if (typeof OQQOO00.data.venderId != 'undefined') $.venderId = OQQOO00.data.venderId;
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'getMyPing':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && OQQOO00.result === true) {
                        if (OQQOO00.data && (typeof OQQOO00.data.secretPin != 'undefined')) $.Pin = OQQOO00.data.secretPin;
                        if (OQQOO00.data && typeof OQQOO00.data.nickname != 'undefined') $.nickname = OQQOO00.data.nickname;
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case'getUserInfo':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        if (OQQOO00.data && typeof OQQOO00.data.yunMidImageUrl != 'undefined') $.attrTouXiang = OQQOO00.data.yunMidImageUrl || 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'activityContent':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && OQQOO00.result === true) {
                        $.endTime = OQQOO00.data.endTime || OQQOO00.data.activityVo && OQQOO00.data.activityVo.endTime || OQQOO00.data.activity.endTime || 0;
                        $.hasEnd = OQQOO00.data.hasEnd || false;
                        $.score = OQQOO00.data.score || 0;
                        $.actorUuid = OQQOO00.data.actorUuid || '';
                        $.followShop = OQQOO00.data.followShop || '';
                        $.followSku = OQQOO00.data.followSku || '';
                        $.followPeony = OQQOO00.data.followPeony || '';
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'info':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        $.addCart = OQQOO00.data.addCart || false;
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'checkOpenCard':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        let Q0QQOOQ = OQQOO00.data.cardList1 || [];
                        let OQQOO0Q = OQQOO00.data.cardList2 || [];
                        let QQQ00O0 = OQQOO00.data.cardList || [];
                        let Q0OO00O = OQQOO00.data.openCardList || [];
                        let OQQQ0O0 = OQQOO00.data.openInfo || [];
                        $.openList = [...QQQ00O0, ...Q0QQOOQ, ...OQQOO0Q, ...Q0OO00O, ...OQQQ0O0];
                        $.allOpenCard = OQQOO00.data.allOpenCard || OQQOO00.data.isOpenCardStatus || false;
                        $.openCardScore1 = OQQOO00.data.score1 || 0;
                        $.openCardScore2 = OQQOO00.data.score2 || 0;
                        $.drawScore = OQQOO00.data.score || 0;
                        if (OQQOO00.data.beans || OQQOO00.data.addBeanNum) console.log('开卡获得:' + (OQQOO00.data.beans || OQQOO00.data.addBeanNum) + '豆');
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
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
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        if (typeof OQQOO00.data == 'object') {
                            let OO0OOQQ = '';
                            let OO0QQOO = '抽奖';
                            if (OQQOO00.data.taskbeanNum) {
                                OO0OOQQ = OQQOO00.data.taskbeanNum + '京豆';
                            }
                            if (OQQOO00.data.addPoint) {
                                OO0OOQQ += ' ' + OQQOO00.data.addPoint + '游戏机会';
                            }
                            if (OQQ0O0O == 'followShop') {
                                OO0QQOO = '关注';
                                if (OQQOO00.data.beanNumMember && OQQOO00.data.assistSendStatus) {
                                    OO0OOQQ += ' 额外获得:' + OQQOO00.data.beanNumMember + '京豆';
                                }
                            } else if ((OQQ0O0O == 'addSku') || (OQQ0O0O == 'addCart')) {
                                OO0QQOO = '加购';
                            } else if (OQQ0O0O == 'viewVideo') {
                                OO0QQOO = '热门文章';
                            } else if (OQQ0O0O == 'toShop') {
                                OO0QQOO = '浏览店铺';
                            } else if (OQQ0O0O == 'followPeony') {
                                OO0QQOO = '关注频道';
                            } else if (OQQ0O0O == 'visitSku' || OQQ0O0O == 'browseGoods') {
                                OO0QQOO = '浏览商品';
                            } else if (OQQ0O0O == 'sign') {
                                OO0QQOO = '签到';
                            } else {
                                OO0OOQQ = (OQQOO00.data.wdsrvo.drawOk == true) && (OQQOO00.data.wdsrvo.name || '空气💨');
                            }
                            if (!OO0OOQQ) {
                                OO0OOQQ = '空气💨';
                            }
                            console.log(OO0QQOO + '获得:' + (OO0OOQQ || Q0Q0QQO));
                        } else {
                            console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                        }
                    } else if (OQQOO00.errorMessage) {
                        $.runFalag = false;
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'getDrawRecordHasCoupon':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true)) {
                        console.log('我的奖品：');
                        let Q0Q0OQQ = 0;
                        let O0QQOQO = 0;
                        for (let OQQ0Q0O in OQQOO00.data) {
                            let O0OOOQ0 = OQQOO00.data[OQQ0Q0O];
                            if ((O0OOOQ0.infoName == '20京豆') && O0OOOQ0.drawStatus && O0OOOQ0.value) {
                                Q0Q0OQQ++;
                                O0QQOQO = O0OOOQ0.infoName.replace('京豆', '');
                            } else {
                                console.log('' + O0OOOQ0.infoName);
                            }
                        }
                        if (Q0Q0OQQ > 0) console.log('邀请好友(' + Q0Q0OQQ + '):' + (Q0Q0OQQ * parseInt(O0QQOQO, 10) || 30) + '京豆');
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case 'getShareRecord':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.result && (OQQOO00.result === true) && OQQOO00.data) {
                        $.ShareCount = OQQOO00.data.length;
                        $.log('=========== 你邀请了:' + $.ShareCount + '个\n');
                    } else if (OQQOO00.errorMessage) {
                        console.log(OQQ0O0O + ' ' + (OQQOO00.errorMessage || ''));
                    } else {
                        console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
                break;
            case'邀请':
            case'助力':
                if (typeof OQQOO00 == 'object') {
                    if (OQQOO00.data.status == 200) {
                        if (OQQ0O0O == '助力') {
                            console.log('助力成功');
                        } else {
                            $.yaoqing = true;
                        }
                    } else if (OQQOO00.data.status == 105) {
                        console.log('已经助力过');
                    } else if (OQQOO00.data.status == 104) {
                        console.log('已经助力其他人');
                    } else if (OQQOO00.data.status == 101) {
                    } else {
                        console.log(Q0Q0QQO);
                    }
                } else {
                    console.log(OQQ0O0O + ' ' + Q0Q0QQO);
                }
            case 'accessLogWithAD':
            case 'drawContent':
                break;
            default:
                console.log(OQQ0O0O + '-> ' + Q0Q0QQO);
        }
        if (typeof OQQOO00 == 'object') {
            if (OQQOO00.errorMessage) {
                if (OQQOO00.errorMessage.indexOf('火爆') > -1) {
                    $.hotFlag = true;
                }
            }
        }
    } catch (Q0QOQO0) {
        console.log(Q0QOQO0);
    }
}

function getPostRequest(OQQO0QQ, OQQO0QO, O0Q0QQ0 = 'POST') {
    let QO0QOOQ = {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookie,
        'User-Agent': $.UA,
        'X-Requested-With': 'XMLHttpRequest'
    };
    if (OQQO0QQ.indexOf('https://lzdz1-isv.isvjcloud.com') > -1) {
        QO0QOOQ.Referer = 'https://lzdz1-isv.isvjcloud.com/dingzhi/drinkcategory/piecetoge1/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
        QO0QOOQ.Cookie = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($.Pin && ('AUTH_C_USER=' + $.Pin + ';') || '') + activityCookie;
    }
    return {'url': OQQO0QQ, 'method': O0Q0QQ0, 'headers': QO0QOOQ, 'body': OQQO0QO, 'timeout': 30000};
}

function getCk() {
    return new Promise(QO0QOOO => {
        let O0Q0000 = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/drinkcategory/piecetoge1/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid,
            'followRedirect': false,
            'headers': {'User-Agent': $.UA},
            'timeout': 30000
        };
        $.get(O0Q0000, async (QO00OQQ, O0QOOQQ, OOQOQOQ) => {
            try {
                if (QO00OQQ) {
                    if (O0QOOQQ && typeof O0QOOQQ.statusCode != 'undefined') {
                        if (O0QOOQQ.statusCode == 493) {
                            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
                            $.outFlag = true;
                        }
                    }
                    console.log('' + $.toStr(QO00OQQ));
                    console.log($.name + ' cookie API请求失败，请检查网路重试');
                } else {
                    let OOQOQOO = OOQOQOQ.match(/(活动已经结束)/) && OOQOQOQ.match(/(活动已经结束)/)[1] || '';
                    if (OOQOQOO) {
                        $.activityEnd = true;
                        console.log('活动已结束');
                    }
                    setActivityCookie(O0QOOQQ);
                }
            } catch (OQQOQ00) {
                $.logErr(OQQOQ00, O0QOOQQ);
            } finally {
                QO0QOOO();
            }
        });
    });
}

function setActivityCookie(O0Q000O) {
    if (O0Q000O.headers['set-cookie']) {
        cookie = originCookie + ';';
        for (let QO0QQQQ of O0Q000O.headers['set-cookie']) {
            lz_cookie[QO0QQQQ.split(';')[0].substr(0, QO0QQQQ.split(';')[0].indexOf('='))] = QO0QQQQ.split(';')[0].substr(QO0QQQQ.split(';')[0].indexOf('=') + 1);
        }
        for (const Q000OQQ of Object.keys(lz_cookie)) {
            cookie += (Q000OQQ + '=' + lz_cookie[Q000OQQ] + ';');
        }
        activityCookie = cookie;
    }
}

async function getUA() {
    $.UA = 'jdapp;iPhone;10.1.4;13.1.2;' + randomString(40) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(QO00OOQ) {
    QO00OOQ = (QO00OOQ || 32);
    let O0OOQOQ = 'abcdef0123456789', OQ0OO0Q = O0OOQOQ.length, OQ0OO0O = '';
    for (i = 0; i < QO00OOQ; i++) OQ0OO0O += O0OOQOQ.charAt(Math.floor(Math.random() * OQ0OO0Q));
    return OQ0OO0O;
}

async function getToken() {
    let OOQ0000 = await getSign('isvObfuscator', {'id': '', 'url': 'https://lzdz1-isv.isvjcloud.com'});
    let OOQ0QQO = {
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
    return new Promise(Q0Q0QO0 => {
        $.post(OOQ0QQO, (OQ0Q0OQ, OQ0QQ00, O0OOQO0) => {
            try {
                if (OQ0Q0OQ) {
                    $.log(OQ0Q0OQ);
                } else {
                    if (O0OOQO0) {
                        O0OOQO0 = JSON.parse(O0OOQO0);
                        if (O0OOQO0.code === '0') {
                            $.Token = O0OOQO0.token;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (Q0QOOOO) {
                $.log(Q0QOOOO);
            } finally {
                Q0Q0QO0();
            }
        });
    });
}

function getSign(OQQO0O0, QOQOQQO) {
    let O0QOQQO = {'fn': OQQO0O0, 'body': JSON.stringify(QOQOQQO)};
    let OQ0QQ0Q = {
        'url': 'https://api.nolanstore.top/sign',
        'body': JSON.stringify(O0QOQQO),
        'headers': {'Content-Type': 'application/json'},
        'timeout': 30000
    };
    return new Promise(async OQ0Q0Q0 => {
        $.post(OQ0QQ0Q, (QOQOQO0, OOQ0QOO, O0QOQQO) => {
            try {
                if (QOQOQO0) {
                    console.log('' + JSON.stringify(QOQOQO0));
                    console.log($.name + ' getSign API请求失败，请检查网路重试');
                } else {
                    O0QOQQO = JSON.parse(O0QOQQO);
                    if ((typeof O0QOQQO === 'object') && O0QOQQO && O0QOQQO.body) {
                        $.Signz = O0QOQQO.body || '';
                    } else {
                        console.log('获取服务失败~~');
                    }
                }
            } catch (O0QOOO0) {
                $.logErr(O0QOOO0, OOQ0QOO);
            } finally {
                OQ0Q0Q0(O0QOQQO);
            }
        });
    });
};

function getCk() {
    return new Promise(O0Q0QOQ => {
        let Q00OO0Q = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/drinkcategory/piecetoge1/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid,
            'followRedirect': false,
            'headers': {'User-Agent': $.UA},
            'timeout': 30000
        };
        $.get(Q00OO0Q, async (Q00OO0O, Q00Q0O0, QQ00QOO) => {
            try {
                if (Q00OO0O) {
                    if (Q00Q0O0 && (typeof Q00Q0O0.statusCode != 'undefined')) {
                        if (Q00Q0O0.statusCode == 493) {
                            console.log('此ip已被限制，请更换IP后再执行脚本\n');
                        }
                    }
                    console.log('' + $.toStr(Q00OO0O));
                    console.log($.name + ' cookie API请求失败，请检查网路重试');
                } else {
                    let OOQQQ0Q = QQ00QOO.match(/(活动已经结束)/) && QQ00QOO.match(/(活动已经结束)/)[1] || '';
                    if (OOQQQ0Q) {
                        $.activityEnd = true;
                        console.log('活动已结束');
                    }
                    setActivityCookie(Q00Q0O0);
                }
            } catch (QOQ0QQO) {
                $.logErr(QOQ0QQO, Q00Q0O0);
            } finally {
                O0Q0QOQ();
            }
        });
    });
}

function joinShop() {
    if (!$.joinVenderId) return;
    return new Promise(async QOOOQOQ => {
        $.shopactivityId = '';
        $.errorJoinShop = '';
        await getshopactivityId();
        let QQO0OQO = '';
        if ($.shopactivityId) QQO0OQO = ',"activityId":' + $.shopactivityId;
        let O00QQOQ = '{"venderId":"' + $.joinVenderId + '","shopId":"' + $.joinVenderId + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + QQO0OQO + ',"channel":401}';
        let QQO0OQQ = await geth5st();
        const O00QQOO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + O00QQOQ + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + QQO0OQQ,
            'headers': {
                'Content-Type': 'text/plain; Charset=UTF-8',
                'Origin': 'https://api.m.jd.com',
                'Host': 'api.m.jd.com',
                'accept': '*/*',
                'User-Agent': $.UA,
                'content-type': 'application/x-www-form-urlencoded',
                'Cookie': cookie
            }
        };
        $.get(O00QQOO, async (OQ000O0, QOQQOOQ, QOOOQO0) => {
            try {
                let O00OOQQ = $.toObj(QOOOQO0, QOOOQO0);
                if (typeof O00OOQQ == 'object') {
                    if (O00OOQQ.success === true) {
                        console.log(O00OOQQ.message);
                        $.errorJoinShop = O00OOQQ.message;
                        if (O00OOQQ.result && O00OOQQ.result.giftInfo) {
                            for (let QOQQOOO of O00OOQQ.result.giftInfo.giftList) {
                                console.log('入会获得:' + QOQQOOO.discountString + QOQQOOO.prizeName + QOQQOOO.secondLineDesc);
                            }
                        }
                    } else if ((typeof O00OOQQ == 'object') && O00OOQQ.message) {
                        $.errorJoinShop = O00OOQQ.message;
                        console.log('' + (O00OOQQ.message || ''));
                    } else {
                        console.log(QOOOQO0);
                    }
                } else {
                    console.log(QOOOQO0);
                }
            } catch (QOQ0OQO) {
                $.logErr(QOQ0OQO, QOQQOOQ);
            } finally {
                QOOOQOQ();
            }
        });
    });
}

function getshopactivityId() {
    return new Promise(QOOOQQQ => {
        const OOOO0QO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=%7B%22venderId%22%3A%22' + $.joinVenderId + '%22%2C%22channel%22%3A401%7D&client=H5&clientVersion=9.2.0&uuid=88888',
            'headers': {
                'Content-Type': 'text/plain; Charset=UTF-8',
                'Origin': 'https://api.m.jd.com',
                'Host': 'api.m.jd.com',
                'accept': '*/*',
                'User-Agent': $.UA,
                'content-type': 'application/x-www-form-urlencoded',
                'Cookie': cookie
            }
        };
        $.get(OOOO0QO, async (QOOO000, OOQQO0O, QQOQOQ0) => {
            try {
                let O000OQ0 = $.toObj(QQOQOQ0, QQOQOQ0);
                if (typeof O000OQ0 == 'object') {
                    if (O000OQ0.success == true) {
                        console.log('入会:' + (O000OQ0.result.shopMemberCardInfo.venderCardName || ''));
                        $.shopactivityId = O000OQ0.result.interestsRuleList && O000OQ0.result.interestsRuleList[0] && O000OQ0.result.interestsRuleList[0].interestsInfo && O000OQ0.result.interestsRuleList[0].interestsInfo.activityId || '';
                    }
                } else {
                    console.log(QQOQOQ0);
                }
            } catch (O000OOQ) {
                $.logErr(O000OOQ, OOQQO0O);
            } finally {
                QOOOQQQ();
            }
        });
    });
}

function jsonParse(QQ0OQO0) {
    if (typeof QQ0OQO0 == 'string') {
        try {
            return JSON.parse(QQ0OQO0);
        } catch (Q000Q0O) {
            console.log(Q000Q0O);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
}

var _0xodb = 'jsjiami.com.v6', _0xodb_ = ['‮_0xodb'],
    _0x3c1b = [_0xodb, 'wqkgAcKeOQ==', 'NBDCnDEf', 'wqhhw7HDi8Ka', 'wrzCuHM/w6Qj', 'wpJyw7PDuMKE', 'E0bCnA==', 'BxbCg8KoSA==', 'QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==', 'N8KtRw==', 'LDbCrMKSfQ==', 'w6LDpG1qNA==', 'wpEXUcOjCA==', 'FV7Ch8KGZQ==', 'CWPCmXPCnA==', 'wrg0w4g=', 'YsOYw4oQw7oKAMOowok=', 'AAbCgQwHw6g=', 'w5bDjClaCcO8YcK7', 'JMKpOsO2ayRI', 'WsO5CMKfwq7DnMOJwqE=', 'w40KQnnCnMOYf8OJw4Na', 'PsKnRGvCtjUTZEhE', 'w7QjwrVeScOw', 'JcKgIcOdeA==', 'OMKgX0rCkA==', 'VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==', 'w5bCmMOtwrAXw4Je', 'UHLCjsOsw4wt', 'F8O3VsOmKXXDjDsLJCQ=', 'wqojL8K/L8Ke', 'PlfDgMKmScOr', 'wqZow6nDn8Kwwog=', 'CUzCmH4=', 'wrHDkTw=', 'TMONdMOcwq0=', 'KgzCnQYSw7Q=', 'OcK7N8K8w7w=', 'wro5I8KvOsKY', 'wro+w5FlHFg=', 'c8OmMcKhwoM=', 'WQQTw6Fo', 'xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if (function (Q000Q0Q, QOQQ000, O00QQQQ) {
    function O00O00Q(O00OOO0, QQO0QQ0, Q0OOO0Q, Q0OQ0OO, OQOQO00, Q0OQQ00) {
        QQO0QQ0 = (QQO0QQ0 >> 0x8), OQOQO00 = 'po';
        var Q0OQ0OQ = 'shift', O00O00O = 'push', Q0OQQ00 = '‮';
        if (QQO0QQ0 < O00OOO0) {
            while (--O00OOO0) {
                Q0OQ0OO = Q000Q0Q[Q0OQ0OQ]();
                if ((QQO0QQ0 === O00OOO0) && (Q0OQQ00 === '‮') && Q0OQQ00.length === 1) {
                    QQO0QQ0 = Q0OQ0OO, Q0OOO0Q = Q000Q0Q[OQOQO00 + 'p']();
                } else if (QQO0QQ0 && (Q0OOO0Q.replace(/[xNUxuLOwqBleVKE=]/g, '') === QQO0QQ0)) {
                    Q000Q0Q[O00O00O](Q0OQ0OO);
                }
            }
            Q000Q0Q[O00O00O](Q000Q0Q[Q0OQ0OQ]());
        }
        return 968710;
    };
    return O00O00Q(++QOQQ000, O00QQQQ) >> QOQQ000 ^ O00QQQQ;
}(_0x3c1b, 411, 105216), _0x3c1b) {
    _0xodb_ = _0x3c1b.length ^ 0x19b;
}
;

function _0x80d0(OOOQ0QO, OO0OQ00) {
    OOOQ0QO = ~~'0x'.concat(OOOQ0QO.slice(1));
    var OOOQ0OQ = _0x3c1b[OOOQ0QO];
    if (_0x80d0.ZHvfIH === undefined) {
        (function () {
            var OQOQ0QO = (typeof window !== 'undefined') ? window : typeof process === 'object' && typeof require === 'function' && (typeof global === 'object') ? global : this;
            var QOOOOQO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            OQOQ0QO.atob || (OQOQ0QO.atob = function (OO0O0QO) {
                var O0O0OQO = String(OO0O0QO).replace(/=+$/, '');
                for (var QQO0OO0 = 0, O00QQO0, QQO000O, OQOQ0QQ = 0, O00OOQ0 = ''; QQO000O = O0O0OQO.charAt(OQOQ0QQ++); ~QQO000O && (O00QQO0 = QQO0OO0 % 4 ? (O00QQO0 * 64 + QQO000O) : QQO000O, QQO0OO0++ % 4) ? O00OOQ0 += String.fromCharCode(0xff & (O00QQO0 >> (-2 * QQO0OO0) & 0x6)) : 0) {
                    QQO000O = QOOOOQO.indexOf(QQO000O);
                }
                return O00OOQ0;
            });
        }());

        function QQO000Q(QOQQOQ0, OO0OQ00) {
            var OOOQQ00 = [], QOOQQOQ = 0, OO0O0QQ, QOOQQOO = '', OOOQ0OO = '';
            QOQQOQ0 = atob(QOQQOQ0);
            for (var O0OQOOO = 0, Q00O0O0 = QOQQOQ0.length; O0OQOOO < Q00O0O0; O0OQOOO++) {
                OOOQ0OO += ('%' + ('00' + QOQQOQ0.charCodeAt(O0OQOOO).toString(16)).slice(-2));
            }
            QOQQOQ0 = decodeURIComponent(OOOQ0OO);
            for (var QQOQQQ0 = 0; QQOQQQ0 < 256; QQOQQQ0++) {
                OOOQQ00[QQOQQQ0] = QQOQQQ0;
            }
            for (QQOQQQ0 = 0; QQOQQQ0 < 256; QQOQQQ0++) {
                QOOQQOQ = (QOOQQOQ + OOOQQ00[QQOQQQ0] + OO0OQ00.charCodeAt(QQOQQQ0 % OO0OQ00.length) % 256);
                OO0O0QQ = OOOQQ00[QQOQQQ0];
                OOOQQ00[QQOQQQ0] = OOOQQ00[QOOQQOQ];
                OOOQQ00[QOOQQOQ] = OO0O0QQ;
            }
            QQOQQQ0 = 0;
            QOOQQOQ = 0;
            for (var Q0O00QQ = 0; Q0O00QQ < QOQQOQ0.length; Q0O00QQ++) {
                QQOQQQ0 = (QQOQQQ0 + 1 % 256);
                QOOQQOQ = (QOOQQOQ + OOOQQ00[QQOQQQ0] % 256);
                OO0O0QQ = OOOQQ00[QQOQQQ0];
                OOOQQ00[QQOQQQ0] = OOOQQ00[QOOQQOQ];
                OOOQQ00[QOOQQOQ] = OO0O0QQ;
                QOOQQOO += String.fromCharCode(QOQQOQ0.charCodeAt(Q0O00QQ) ^ OOOQQ00[OOOQQ00[QQOQQQ0] + OOOQQ00[QOOQQOQ] % 256]);
            }
            return QOOQQOO;
        }

        _0x80d0.uZkhLK = QQO000Q;
        _0x80d0.PgBxtv = {};
        _0x80d0.ZHvfIH = true;
    }
    var QOO0QQO = _0x80d0.PgBxtv[OOOQ0QO];
    if (QOO0QQO === undefined) {
        if (_0x80d0.mzwOwg === undefined) {
            _0x80d0.mzwOwg = true;
        }
        OOOQ0OQ = _0x80d0.uZkhLK(OOOQ0OQ, OO0OQ00);
        _0x80d0.PgBxtv[OOOQ0QO] = OOOQ0OQ;
    } else {
        OOOQ0OQ = QOO0QQO;
    }
    return OOOQ0OQ;
};

function generateFp() {
    var QOOOOQ0 = {
        'ryoPy': '0123456789', 'mfvwK': function (OO0OQ0O, OO0OQ0Q) {
            return OO0OQ0O | OO0OQ0Q;
        }, 'WutDU': function (Q00O0OO, O0OQOO0) {
            return Q00O0OO + O0OQOO0;
        }
    };
    let Q00OQ00 = QOOOOQ0[_0x80d0('‮0', 'wj)i')];
    let QQOQQQO = 13;
    let O0OQ00Q = '';
    for (; QQOQQQO--;) O0OQ00Q += Q00OQ00[QOOOOQ0[_0x80d0('‮1', 'Z*hR')](Math.random() * Q00OQ00[_0x80d0('‮2', '3@Q*')], 0)];
    return QOOOOQ0[_0x80d0('‮3', 'Z*hR')](O0OQ00Q, Date[_0x80d0('‮4', 'Da%Y')]())[_0x80d0('‮5', 'LwWi')](0, 16);
}

function geth5st() {
    var QQOOQQO = {
        'XLFYP': 'yyyyMMddhhmmssSSS',
        'ERdzy': ';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;',
        'eaFvs': _0x80d0('‮6', '@hXf'),
        'NqklQ': function (QQQQ00O, QOO0OOQ) {
            return QQQQ00O(QOO0OOQ);
        },
        'DqrqH': function (OQOQQ0O, OQOQ0Q0) {
            return OQOQQ0O + OQOQ0Q0;
        },
        'GEDpa': function (OQOQQ0Q, Q0OQO0O) {
            return OQOQQ0Q + Q0OQO0O;
        },
        'tJryJ': function (QQQ0OQQ, Q0OQO0Q) {
            return QQQ0OQQ + Q0OQO0Q;
        }
    };
    let QQQ0OQO = Date[_0x80d0('‮7', '3B2S')]();
    let QOOQQQ0 = generateFp();
    let OQO00OO = new Date(QQQ0OQO).Format(QQOOQQO[_0x80d0('‫8', 'LwWi')]);
    let OQO0Q00 = [QQOOQQO.ERdzy, QQOOQQO[_0x80d0('‮9', 'SCQF')]];
    let OQO00OQ = OQO0Q00[random(0, OQO0Q00.length)];
    return QQOOQQO[_0x80d0('‫a', '%HoM')](encodeURIComponent, QQOOQQO.DqrqH(QQOOQQO[_0x80d0('‫b', 'vWDW')](QQOOQQO[_0x80d0('‮c', 'Da%Y')](OQO00OO, ';') + QOOQQQ0, OQO00OQ), Date[_0x80d0('‮d', '7]Bn')]()));
}

Date[_0x80d0('‫e', 'gM9$')][_0x80d0('‫f', 'wj)i')] = function (QQQQOO0) {
    var OQQQOQO = {
        'wGAVl': function (QOOQOQO, O0O00O0) {
            return QOOQOQO / O0O00O0;
        }, 'aborC': function (Q0QQ0OO, OQQQOQQ) {
            return Q0QQ0OO + OQQQOQQ;
        }, 'khvyA': function (OQOO00Q, Q0QQQ00) {
            return OQOO00Q === Q0QQQ00;
        }, 'RkhHN': function (OQOO00O, Q0QQ0OQ) {
            return OQOO00O == Q0QQ0OQ;
        }
    };
    var QQQOOQQ, QQQQQOO = this, Q0Q00QO = QQQQOO0, QQQQQOQ = {
        'M+': (QQQQQOO[_0x80d0('‮10', 'lEbY')]() + 1),
        'd+': QQQQQOO.getDate(),
        'D+': QQQQQOO[_0x80d0('‮11', 'm]Ir')](),
        'h+': QQQQQOO.getHours(),
        'H+': QQQQQOO[_0x80d0('‫12', 'hLmb')](),
        'm+': QQQQQOO[_0x80d0('‫13', 'y[mS')](),
        's+': QQQQQOO[_0x80d0('‮14', '3B2S')](),
        'w+': QQQQQOO[_0x80d0('‫15', '$n0%')](),
        'q+': Math[_0x80d0('‮16', 'm]Ir')](OQQQOQO.wGAVl(OQQQOQO[_0x80d0('‮17', '3B2S')](QQQQQOO.getMonth(), 3), 3)),
        'S+': QQQQQOO[_0x80d0('‫18', '3aAN')]()
    };
    /(y+)/i.test(Q0Q00QO) && (Q0Q00QO = Q0Q00QO[_0x80d0('‫19', 'bosv')](RegExp.$1, ''[_0x80d0('‮1a', '3aAN')](QQQQQOO[_0x80d0('‫1b', 'n1@B')]())[_0x80d0('‮1c', 'ctu&')](4 - RegExp.$1[_0x80d0('‫1d', 'T8*w')])));
    for (var Q0Q00QQ in QQQQQOQ) {
        if (new RegExp('('[_0x80d0('‮1e', 'Z*hR')](Q0Q00QQ, ')'))[_0x80d0('‮1f', 'Da%Y')](Q0Q00QO)) {
            var QO0OQ0O, QO0O0Q0 = OQQQOQO.khvyA('S+', Q0Q00QQ) ? _0x80d0('‫20', 'dvcH') : '00';
            Q0Q00QO = Q0Q00QO.replace(RegExp.$1, OQQQOQO[_0x80d0('‫21', 'Jp@*')](1, RegExp.$1[_0x80d0('‫22', 'wj)i')]) ? QQQQQOQ[Q0Q00QQ] : OQQQOQO[_0x80d0('‫23', 'JH9X')](''.concat(QO0O0Q0), QQQQQOQ[Q0Q00QQ]).substr(''[_0x80d0('‮24', 'ctu&')](QQQQQOQ[Q0Q00QQ])[_0x80d0('‫25', '7]Bn')]));
        }
    }
    return Q0Q00QO;
};

function random(QO0OQ0Q, QOOQOQ0) {
    var QQQOOQ0 = {
        'NzMvB': function (O0OO0QQ, QQQQQO0) {
            return O0OO0QQ + QQQQQO0;
        }, 'pvLRb': function (OQO0QOQ, QO0OQ00) {
            return OQO0QOQ * QO0OQ00;
        }, 'KNgAC': function (QO0O0OQ, OO00O0Q) {
            return QO0O0OQ - OO00O0Q;
        }
    };
    return QQQOOQ0[_0x80d0('‫26', 'hLmb')](Math[_0x80d0('‫27', 'eShm')](QQQOOQ0[_0x80d0('‮28', 'ctu&')](Math.random(), QQQOOQ0.KNgAC(QOOQOQ0, QO0OQ0Q))), QO0OQ0Q);
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
