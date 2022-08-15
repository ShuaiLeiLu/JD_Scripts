/*
8.15-8.22 玩转818 超值购物攻略
开卡脚本,一次性脚本


第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 8.15-8.22 玩转818 超值购物攻略 ]

请求太频繁会被黑ip
过10分钟再执行

cron:29 0,18 16-22 8 *
============Quantumultx===============
[task_local]
#8.15-8.22 玩转818 超值购物攻略
29 0,18 16-22 8 * jd_opencardL216.js, tag=8.15-8.22 玩转818 超值购物攻略, enabled=true

*/

const $ = new Env('8.15-8.22 玩转818 超值购物攻略');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '';
let lz_cookie = {};
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(OOO000Q => {
        cookiesArr.push(jdCookieNode[OOO000Q]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(QQOQ0OO => QQOQ0OO.cookie)].filter(O0000OQ => !!O0000OQ);
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
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {'open-url': 'https://bean.m.jd.com/'});
        return;
    }
    $.activityId = '91eb99e21c92403c8b8b29f3604bd765';
    $.shareUuid = '61c4dfec4a5f4f068906158b3b5c2253';
    console.log('入口:\nhttps://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid);
    let QOOOO00 = [];
    let OO0O000 = Math.floor(Math.random() * 3);
    let OOOQQQQ = 0;
    OOOQQQQ = Math.floor(Math.random() * QOOOO00.length);
    $.shareUuid = QOOOO00[OOOQQQQ] ? QOOOO00[OOOQQQQ] : $.shareUuid;
    for (let OO0OQQQ = 0; OO0OQQQ < cookiesArr.length; OO0OQQQ++) {
        cookie = cookiesArr[OO0OQQQ];
        originCookie = cookiesArr[OO0OQQQ];
        if (cookie) {
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = OO0OQQQ + 1;
            message = '';
            $.bean = 0;
            $.hotFlag = false;
            $.nickName = '';
            console.log('\n\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            await getUA();
            await run();
            await $.wait(1000);
            if ((OO0OQQQ == 0) && !$.actorUuid) break;
            if ($.outFlag || $.activityEnd) break;
        }
    }
    if ($.outFlag) {
        let O0OQ0QO = '此ip已被限制，请更换IP后再执行脚本';
        $.msg($.name, '', '' + O0OQ0QO);
        if ($.isNode()) await notify.sendNotify('' + $.name, '' + O0OQ0QO);
    }
    if (allMessage) {
        $.msg($.name, '', '' + allMessage);
    }
})().catch(OOO0OOQ => $.logErr(OOO0OOQ)).finally(() => $.done());

async function run() {
    try {
        $.hasEnd = true;
        $.endTime = 0;
        lz_jdpin_token_cookie = '';
        $.Token = '';
        $.Pin = '';
        let QOOQ0QQ = false;
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
            console.log('此ip已被限制，请更换IP后再执行脚本\n');
            return;
        }
        await takePostRequest('getSimpleActInfoVo');
        await takePostRequest('getMyPing');
        if (!$.Pin) {
            console.log('获取[Pin]失败！');
            return;
        }
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
        $.openList = [];
        $.allOpenCard = false;
        await takePostRequest('checkOpenCard');
        await takePostRequest('taskRecord');
        await $.wait(1000);
        await takePostRequest('assist');
        if ($.allOpenCard == false) {
            console.log('开卡任务');
            for (o of $.openList) {
                $.openCard = false;
                if (!$.openVenderId.includes(o.value * 1)) {
                    QOOQ0QQ = true;
                    $.shopactivityId = '';
                    $.joinVenderId = o.venderId || o.value;
                    await getshopactivityId();
                    for (let OQO0OO0 = 0; OQO0OO0 < Array(5).length; OQO0OO0++) {
                        if (OQO0OO0 > 0) console.log('第' + OQO0OO0 + '次 重新开卡');
                        await joinShop();
                        await $.wait(500);
                        if (($.errorJoinShop.indexOf('活动太火爆，请稍后再试') == -1) && ($.errorJoinShop.indexOf('加入店铺会员失败') == -1)) {
                            break;
                        }
                    }
                    if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') > -1) {
                        console.log('开卡失败❌ ，重新执行脚本');
                        allMessage += '【账号' + $.index + '】开卡失败❌ ，重新执行脚本\n';
                    } else {
                        $.joinStatus = true;
                    }
                    await takePostRequest('activityContent');
                    await $.wait(800);
                }
            }
        } else {
            console.log('已全部开卡');
        }
        $.log('关注: ' + $.followShop);
        if (!$.followShop && !$.outFlag) {
            QOOQ0QQ = true;
            await takePostRequest('followShop');
            await $.wait(parseInt(Math.random() * 1000 + 700, 10));
        }
        $.log('加购: ' + $.addCart);
        if (!$.addCart && !$.outFlag) {
            QOOQ0QQ = true;
            await takePostRequest('addCart');
            await $.wait(parseInt(Math.random() * 1000 + 700, 10));
        }
        await takePostRequest('assist');
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
        console.log($.assistState === 1 ? '助力成功' : ($.assistState === 10) ? '已助力过~' : ($.assistState === 21) ? '未全部开卡或者其他原因' : ($.assistState === 11) ? '已助力其他人' : ($.assistState === 0) ? '不能助力自己' : ('未知-' + $.assistState));
        if (QOOQ0QQ) {
            await takePostRequest('activityContent');
        }
        console.log($.score + '值');
        if (opencard_draw + '' !== '0') {
            $.runFalag = true;
            let QO0O00Q = parseInt($.score / 100);
            opencard_draw = parseInt(opencard_draw, 10);
            if (QO0O00Q > opencard_draw) QO0O00Q = opencard_draw;
            console.log('抽奖次数为:' + QO0O00Q);
            for (m = 1; QO0O00Q--; m++) {
                console.log('第' + m + '次抽奖');
                await takePostRequest('抽奖');
                if ($.runFalag == false) break;
                if (Number(QO0O00Q) <= 0) break;
                if (m >= 3) {
                    console.log('抽奖太多次，多余的次数请再执行脚本');
                    break;
                }
                await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
            }
        } else console.log('如需抽奖请设置环境变量[opencard_draw]为"3" 3为次数');
        if ($.outFlag) {
            console.log('此ip已被限制，请更换IP后再执行脚本\n');
            return;
        }
        console.log('当前一共邀请:' + $.assistCount + ' 人。此数据为全部邀请人数');
        console.log($.actorUuid);
        console.log('当前助力:' + $.shareUuid);
        if ($.index == 1) {
            $.shareUuid = $.actorUuid;
            console.log('后面的号都会助力:' + $.shareUuid);
        }
        if ($.index % 3 == 0) await $.wait(parseInt((Math.random() * 5000) + 10000, 10));
    } catch (OO0QOO0) {
        console.log(OO0QOO0);
    }
}

async function takePostRequest(OO0Q00O) {
    if ($.outFlag) return;
    let Q0QQ000 = 'https://lzdz1-isv.isvjcloud.com';
    let Q0QQQQQ = '';
    let QQQ0Q0Q = 'POST';
    let OO0QQQQ = '';
    switch (OO0Q00O) {
        case 'isvObfuscator':
            url = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            Q0QQQQQ = 'body=%7B%22url%22%3A%22https%3A//lzdz1-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&uuid=ab640b5dc76b89426f72115f5b2e06e934a5fbe9&client=apple&clientVersion=10.1.4&st=1650250640876&sv=102&sign=7ea66dcb2969eff53c43b5b8a4937dbe';
            break;
        case 'getSimpleActInfoVo':
            url = Q0QQ000 + '/dz/common/getSimpleActInfoVo';
            Q0QQQQQ = 'activityId=' + $.activityId;
            break;
        case 'getMyPing':
            url = Q0QQ000 + '/customer/getMyPing';
            Q0QQQQQ = 'userId=1000000904&token=' + $.Token + '&fromType=APP';
            break;
        case'accessLogWithAD':
            url = Q0QQ000 + '/common/accessLogWithAD';
            let O0O0QO0 = Q0QQ000 + '/dingzhi/joinCommon/activity/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
            Q0QQQQQ = 'venderId=1000000904&code=99&pin=' + encodeURIComponent($.Pin) + '&activityId=' + $.activityId + '&pageUrl=' + encodeURIComponent(O0O0QO0) + '&subType=app&adSource=';
            break;
        case 'getUserInfo':
            url = Q0QQ000 + '/wxActionCommon/getUserInfo';
            Q0QQQQQ = 'pin=' + encodeURIComponent($.Pin);
            break;
        case 'activityContent':
            url = Q0QQ000 + '/dingzhi/joinCommon/activityContent';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&pinImg=' + encodeURIComponent($.attrTouXiang) + '&nick=' + encodeURIComponent($.nickname) + '&cjyxPin=&cjhyPin=&shareUuid=' + $.shareUuid;
            break;
        case 'drawContent':
            url = Q0QQ000 + '/dingzhi/joinCommon/drawContent';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            break;
        case 'checkOpenCard':
            url = Q0QQ000 + '/dingzhi/joinCommon/taskInfo';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            break;
        case 'assist':
            url = Q0QQ000 + '/dingzhi/joinCommon/assist';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&uuid=' + $.actorUuid + '&shareUuid=' + $.shareUuid;
            break;
        case 'taskRecord':
            url = Q0QQ000 + '/dingzhi/joinCommon/taskRecord';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&uuid=' + $.actorUuid + '&taskType=';
            break;
        case 'startDraw':
            url = Q0QQ000 + '/joint/order/draw';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&drawType=1';
            break;
        case 'followShop':
            url = Q0QQ000 + '/dingzhi/joinCommon/doTask';
            Q0QQQQQ = 'activityId=' + $.activityId + '&uuid=' + $.actorUuid + '&pin=' + encodeURIComponent($.Pin) + '&taskType=20&taskValue=';
            break;
        case 'addCart':
            url = Q0QQ000 + '/dingzhi/joinCommon/doTask';
            Q0QQQQQ = 'activityId=' + $.activityId + '&uuid=' + $.actorUuid + '&pin=' + encodeURIComponent($.Pin) + '&taskType=23&taskValue=';
            break;
        case 'sign':
        case 'browseGoods':
            url = Q0QQ000 + '/dingzhi/opencard/' + OO0Q00O;
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            if (OO0Q00O == 'browseGoods') Q0QQQQQ += '&value=' + $.visitSkuValue;
            break;
        case'邀请':
        case'助力':
            if (OO0Q00O == '助力') {
                url = Q0QQ000 + '/dingzhi/linkgame/assist';
            } else {
                url = Q0QQ000 + '/dingzhi/linkgame/assist/status';
            }
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&shareUuid=' + $.shareUuid;
            break;
        case 'viewVideo':
        case 'visitSku':
        case 'toShop':
        case 'addSku':
            url = Q0QQ000 + '/dingzhi/opencard/' + OO0Q00O;
            let QQQOO00 = '';
            let O0OOOO0 = '';
            if (OO0Q00O == 'viewVideo') {
                QQQOO00 = 31;
                O0OOOO0 = 31;
            } else if (OO0Q00O == 'visitSku') {
                QQQOO00 = 5;
                O0OOOO0 = $.visitSkuValue || 5;
            } else if (OO0Q00O == 'toShop') {
                QQQOO00 = 14;
                O0OOOO0 = $.toShopValue || 14;
            } else if (OO0Q00O == 'addSku') {
                QQQOO00 = 2;
                O0OOOO0 = $.addSkuValue || 2;
            }
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid + '&taskType=' + QQQOO00 + '&taskValue=' + O0OOOO0;
            break;
        case 'getDrawRecordHasCoupon':
            url = Q0QQ000 + '/dingzhi/linkgame/draw/record';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin) + '&actorUuid=' + $.actorUuid;
            break;
        case 'getShareRecord':
            url = Q0QQ000 + '/dingzhi/linkgame/help/list';
            Q0QQQQQ = 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.Pin);
            break;
        case'抽奖':
            url = Q0QQ000 + '/dingzhi/joinCommon/startDraw';
            Q0QQQQQ = 'activityId=' + $.activityId + '&uuid=' + $.actorUuid + '&pin=' + encodeURIComponent($.Pin);
            break;
        default:
            console.log('错误' + OO0Q00O);
    }
    let Q0Q0OOQ = getPostRequest(url, Q0QQQQQ, QQQ0Q0Q);
    return new Promise(async QO0OQQ0 => {
        $.post(Q0Q0OOQ, (O0OOQQO, QQQQQ0Q, OQQ0O00) => {
            try {
                setActivityCookie(QQQQQ0Q);
                if (O0OOQQO) {
                    if (QQQQQ0Q && (typeof QQQQQ0Q.statusCode != 'undefined')) {
                        if (QQQQQ0Q.statusCode == 493) {
                            console.log('此ip已被限制，请更换IP后再执行脚本\n');
                        }
                    }
                    console.log('' + $.toStr(O0OOQQO, O0OOQQO));
                    console.log(OO0Q00O + ' API请求失败，请检查网路重试');
                } else {
                    dealReturn(OO0Q00O, OQQ0O00);
                }
            } catch (Q0OOQO0) {
                console.log(Q0OOQO0, QQQQQ0Q);
            } finally {
                QO0OQQ0();
            }
        });
    });
}

async function dealReturn(OQOOQ0O, Q0QQQOO) {
    let OQ0OQ0O = '';
    try {
        if ((OQOOQ0O != 'accessLogWithAD') || OQOOQ0O != 'drawContent') {
            if (Q0QQQOO) {
                OQ0OQ0O = JSON.parse(Q0QQQOO);
            }
        }
    } catch (QO0QOQ0) {
        console.log(OQOOQ0O + ' 执行任务异常');
        console.log(Q0QQQOO);
        $.runFalag = false;
    }
    try {
        switch (OQOOQ0O) {
            case 'isvObfuscator':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.errcode == 0) {
                        if (typeof OQ0OQ0O.token != 'undefined') $.Token = OQ0OQ0O.token;
                    } else if (OQ0OQ0O.message) {
                        console.log('isvObfuscator ' + (OQ0OQ0O.message || ''));
                    } else {
                        console.log(Q0QQQOO);
                    }
                } else {
                    console.log(Q0QQQOO);
                }
                break;
            case 'getSimpleActInfoVo':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        if (typeof OQ0OQ0O.data.shopId != 'undefined') $.shopId = OQ0OQ0O.data.shopId;
                        if (typeof OQ0OQ0O.data.venderId != 'undefined') $.venderId = OQ0OQ0O.data.venderId;
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case'getMyPing':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        if (OQ0OQ0O.data && typeof OQ0OQ0O.data.secretPin != 'undefined') $.Pin = OQ0OQ0O.data.secretPin;
                        if (OQ0OQ0O.data && (typeof OQ0OQ0O.data.nickname != 'undefined')) $.nickname = OQ0OQ0O.data.nickname;
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'getUserInfo':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && OQ0OQ0O.result === true) {
                        if (OQ0OQ0O.data && (typeof OQ0OQ0O.data.yunMidImageUrl != 'undefined')) $.attrTouXiang = OQ0OQ0O.data.yunMidImageUrl || 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'activityContent':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && OQ0OQ0O.result === true) {
                        $.endTime = OQ0OQ0O.data.endTime || OQ0OQ0O.data.activityVo && OQ0OQ0O.data.activityVo.endTime || OQ0OQ0O.data.activity.endTime || 0;
                        $.hasEnd = OQ0OQ0O.data.isEnd || false;
                        $.score = OQ0OQ0O.data.actorInfo.score || 0;
                        $.actorUuid = OQ0OQ0O.data.actorInfo.uuid || '';
                        $.assistCount = OQ0OQ0O.data.actorInfo.assistCount || 0;
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'assist':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        $.assistState = OQ0OQ0O.data.assistState || 0;
                        $.allOpenCard = OQ0OQ0O.data.openCardInfo.openAll || false;
                        $.openVenderId = OQ0OQ0O.data.openCardInfo.openVenderId || [];
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'taskRecord':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && OQ0OQ0O.result === true) {
                        $.followShop = OQ0OQ0O.data['20'].recordCount || 0;
                        $.addCart = OQ0OQ0O.data['23'].recordCount || 0;
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'checkOpenCard':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        let O0Q0OO0 = OQ0OQ0O.data['10'].settingInfo || [];
                        let QO00OQ0 = OQ0OQ0O.data.cardList || [];
                        let QQQO0O0 = OQ0OQ0O.data.openCardList || [];
                        $.openList = [...QO00OQ0, ...O0Q0OO0, ...QQQO0O0];
                        $.openCardScore1 = OQ0OQ0O.data.score1 || 0;
                        $.openCardScore2 = OQ0OQ0O.data.score2 || 0;
                        $.drawScore = OQ0OQ0O.data.drawScore || 0;
                        if (OQ0OQ0O.data.beans || OQ0OQ0O.data.addBeanNum) console.log('开卡获得:' + (OQ0OQ0O.data.beans || OQ0OQ0O.data.addBeanNum) + '豆');
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'startDraw':
            case 'followShop':
            case 'viewVideo':
            case 'visitSku':
            case 'toShop':
            case 'addSku':
            case 'sign':
            case 'addCart':
            case 'browseGoods':
            case'抽奖':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        if (typeof OQ0OQ0O.data == 'object') {
                            let OQ0OO00 = '';
                            let O0QQ000 = '抽奖';
                            if (OQ0OQ0O.data.addBeanNum) {
                                OQ0OO00 = OQ0OQ0O.data.addBeanNum + '京豆';
                            }
                            if (OQ0OQ0O.data.addPoint) {
                                OQ0OO00 += ' ' + OQ0OQ0O.data.addPoint + '游戏机会';
                            }
                            if (OQOOQ0O == 'followShop') {
                                O0QQ000 = '关注';
                                if (OQ0OQ0O.data.beanNumMember && OQ0OQ0O.data.assistSendStatus) {
                                    OQ0OO00 += ' 额外获得:' + OQ0OQ0O.data.beanNumMember + '京豆';
                                }
                            } else if ((OQOOQ0O == 'addSku') || (OQOOQ0O == 'addCart')) {
                                O0QQ000 = '加购';
                            } else if (OQOOQ0O == 'viewVideo') {
                                O0QQ000 = '热门文章';
                            } else if (OQOOQ0O == 'toShop') {
                                O0QQ000 = '浏览店铺';
                            } else if ((OQOOQ0O == 'visitSku') || (OQOOQ0O == 'browseGoods')) {
                                O0QQ000 = '浏览商品';
                            } else if (OQOOQ0O == 'sign') {
                                O0QQ000 = '签到';
                            } else {
                                let QO0QQQO = (typeof OQ0OQ0O.data.drawOk === 'object') && OQ0OQ0O.data.drawOk || OQ0OQ0O.data;
                                OQ0OO00 = QO0QQQO.drawOk == true && QO0QQQO.name || '';
                            }
                            if ((O0QQ000 == '抽奖') && OQ0OO00 && (OQ0OO00.indexOf('京豆') == -1)) {
                                if ($.isNode()) await notify.sendNotify('' + $.name, '【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '\n' + O0QQ000 + '成功,获得 ' + OQ0OO00 + '\n活动地址: https://3.cn/-106MEjSh');
                            }
                            if (!OQ0OO00) {
                                OQ0OO00 = '空气💨';
                            }
                            console.log(O0QQ000 + '获得:' + (OQ0OO00 || Q0QQQOO));
                        } else {
                            console.log('' + Q0QQQOO);
                        }
                    } else if (OQ0OQ0O.errorMessage) {
                        $.runFalag = false;
                        console.log('' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log('' + Q0QQQOO);
                    }
                } else {
                    console.log('' + Q0QQQOO);
                }
                break;
            case 'getDrawRecordHasCoupon':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && (OQ0OQ0O.result === true)) {
                        console.log('我的奖品：');
                        let Q000OQQ = 0;
                        let OQQOQ0Q = 0;
                        let O0Q0OOO = 0;
                        for (let OQQOQ0O in OQ0OQ0O.data.recordList) {
                            let QO00OOQ = OQ0OQ0O.data.recordList[OQQOQ0O];
                            if (QO00OOQ.infoName == '20京豆' && (QO00OOQ.drawStatus == 0)) {
                                Q000OQQ++;
                                OQQOQ0Q = QO00OOQ.infoName.replace('京豆', '');
                                O0Q0OOO = (O0Q0OOO < QO00OOQ.createTime) ? QO00OOQ.createTime : O0Q0OOO;
                            } else {
                                console.log('' + ((QO00OOQ.infoType != 10) && QO00OOQ.value && (QO00OOQ.value + ':') || '') + QO00OOQ.infoName);
                            }
                        }
                        if (O0Q0OOO > 0) console.log('最新邀请奖励时间:' + $.time('yyyy-MM-dd HH:mm:ss', O0Q0OOO));
                        if (Q000OQQ > 0) console.log('邀请好友(' + Q000OQQ + '):' + ((Q000OQQ * parseInt(OQQOQ0Q, 10)) || 30) + '京豆');
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case 'getShareRecord':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.result && OQ0OQ0O.result === true && OQ0OQ0O.data) {
                        $.ShareCount = OQ0OQ0O.data.shareList.length;
                        $.log('=========== 你邀请了:' + $.ShareCount + '个\n由于接口数据只有30个 故邀请大于30个的需要自行判断\n');
                    } else if (OQ0OQ0O.errorMessage) {
                        console.log(OQOOQ0O + ' ' + (OQ0OQ0O.errorMessage || ''));
                    } else {
                        console.log(OQOOQ0O + ' ' + Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
                break;
            case'邀请':
            case'助力':
                if (typeof OQ0OQ0O == 'object') {
                    if (OQ0OQ0O.data.status == 200) {
                        if (OQOOQ0O == '助力') {
                            console.log('助力成功');
                        } else {
                            $.yaoqing = true;
                        }
                    } else if (OQ0OQ0O.data.status == 105) {
                        console.log('已经助力过');
                    } else if (OQ0OQ0O.data.status == 104) {
                        console.log('已经助力其他人');
                    } else if (OQ0OQ0O.data.status == 101) {
                    } else {
                        console.log(Q0QQQOO);
                    }
                } else {
                    console.log(OQOOQ0O + ' ' + Q0QQQOO);
                }
            case 'accessLogWithAD':
            case 'drawContent':
                break;
            default:
                console.log(OQOOQ0O + '-> ' + Q0QQQOO);
        }
        if (typeof OQ0OQ0O == 'object') {
            if (OQ0OQ0O.errorMessage) {
                if (OQ0OQ0O.errorMessage.indexOf('火爆') > -1) {
                    $.hotFlag = true;
                }
            }
        }
    } catch (OQ00Q0O) {
        console.log(OQ00Q0O);
    }
}

function getPostRequest(OQ00Q0Q, QQ0QQ0O, OOQ0QQQ = 'POST') {
    let O0QOQQ0 = {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookie,
        'User-Agent': $.UA,
        'X-Requested-With': 'XMLHttpRequest'
    };
    if (OQ00Q0Q.indexOf('https://lzdz1-isv.isvjcloud.com') > -1) {
        O0QOQQ0.Referer = 'https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid;
        O0QOQQ0.Cookie = '' + ((lz_jdpin_token_cookie && lz_jdpin_token_cookie) || '') + ($.Pin && ('AUTH_C_USER=' + $.Pin) + ';' || '') + activityCookie;
    }
    return {'url': OQ00Q0Q, 'method': OOQ0QQQ, 'headers': O0QOQQ0, 'body': QQ0QQ0O, 'timeout': 30000};
}

async function getToken() {
    let QQ0Q0QQ = await getSign('isvObfuscator', {'id': '', 'url': 'https://lzdz1-isv.isvjcloud.com'});
    let QOQO000 = {
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
    return new Promise(QQ0Q0QO => {
        $.post(QOQO000, (OOQOOOO, Q00QOQQ, OOQOOOQ) => {
            try {
                if (OOQOOOO) {
                    $.log(OOQOOOO);
                } else {
                    if (OOQOOOQ) {
                        OOQOOOQ = JSON.parse(OOQOOOQ);
                        if (OOQOOOQ.code === '0') {
                            $.Token = OOQOOOQ.token;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (QOQOQO0) {
                $.log(QOQOQO0);
            } finally {
                QQ0Q0QO();
            }
        });
    });
}

function getSign(OOQ0QOO, QQ0OO0O) {
    let OQ0Q0QQ = {'fn': OOQ0QOO, 'body': JSON.stringify(QQ0OO0O)};
    let OOQO00O = {
        'url': 'https://api.nolanstore.top/sign',
        'body': JSON.stringify(OQ0Q0QQ),
        'headers': {'Content-Type': 'application/json'},
        'timeout': 30000
    };
    return new Promise(async OQ0Q0QO => {
        $.post(OOQO00O, (Q0QOQQO, QQ0Q0OQ, OQ0Q0QQ) => {
            try {
                if (Q0QOQQO) {
                    console.log('' + JSON.stringify(Q0QOQQO));
                    console.log($.name + ' getSign API请求失败，请检查网路重试');
                } else {
                    OQ0Q0QQ = JSON.parse(OQ0Q0QQ);
                    if (typeof OQ0Q0QQ === 'object' && OQ0Q0QQ && OQ0Q0QQ.body) {
                        $.Signz = OQ0Q0QQ.body || '';
                    } else {
                        console.log('获取服务失败~~');
                    }
                }
            } catch (Q0QOQQQ) {
                $.logErr(Q0QOQQQ, QQ0Q0OQ);
            } finally {
                OQ0Q0QO(OQ0Q0QQ);
            }
        });
    });
};

function getCk() {
    return new Promise(OOOO0OO => {
        let Q0000OO = {
            'url': 'https://lzdz1-isv.isvjcloud.com/dingzhi/joinCommon/activity/activity?activityId=' + $.activityId + '&shareUuid=' + $.shareUuid,
            'followRedirect': false,
            'headers': {'User-Agent': $.UA},
            'timeout': 30000
        };
        $.get(Q0000OO, async (OQ00O0Q, Q000Q00, Q0000OQ) => {
            try {
                if (OQ00O0Q) {
                    if (Q000Q00 && (typeof Q000Q00.statusCode != 'undefined')) {
                        if (Q000Q00.statusCode == 493) {
                            console.log('此ip已被限制，请更换IP后再执行脚本\n');
                        }
                    }
                    console.log('' + $.toStr(OQ00O0Q));
                    console.log($.name + ' cookie API请求失败，请检查网路重试');
                } else {
                    let Q00OO0Q = Q0000OQ.match(/(活动已经结束)/) && Q0000OQ.match(/(活动已经结束)/)[1] || '';
                    if (Q00OO0Q) {
                        $.activityEnd = true;
                        console.log('活动已结束');
                    }
                    setActivityCookie(Q000Q00);
                }
            } catch (Q00OO0O) {
                $.logErr(Q00OO0O, Q000Q00);
            } finally {
                OOOO0OO();
            }
        });
    });
}

function setActivityCookie(QQ00QOO) {
    if (QQ00QOO.headers['set-cookie']) {
        cookie = originCookie + ';';
        for (let QQ0QQO0 of QQ00QOO.headers['set-cookie']) {
            lz_cookie[QQ0QQO0.split(';')[0].substr(0, QQ0QQO0.split(';')[0].indexOf('='))] = QQ0QQO0.split(';')[0].substr(QQ0QQO0.split(';')[0].indexOf('=') + 1);
        }
        for (const OOOOQ0Q of Object.keys(lz_cookie)) {
            cookie += (OOOOQ0Q + '=' + lz_cookie[OOOOQ0Q]) + ';';
        }
        activityCookie = cookie;
    }
}

async function getUA() {
    $.UA = 'jdapp;iPhone;10.1.4;13.1.2;' + randomString(40) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(Q0000O0) {
    Q0000O0 = (Q0000O0 || 32);
    let QOQQQOQ = 'abcdef0123456789', OOQ0O00 = QOQQQOQ.length, OOQQ0QO = '';
    for (i = 0; i < Q0000O0; i++) OOQQ0QO += QOQQQOQ.charAt(Math.floor(Math.random() * OOQ0O00));
    return OOQQ0QO;
}

function jsonParse(Q00Q0OQ) {
    if (typeof Q00Q0OQ == 'string') {
        try {
            return JSON.parse(Q00Q0OQ);
        } catch (QQ00QQ0) {
            console.log(QQ00QQ0);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
}

async function joinShop() {
    if (!$.joinVenderId) return;
    return new Promise(async OQ000QQ => {
        $.errorJoinShop = '活动太火爆，请稍后再试';
        let QOQ0QQ0 = '';
        if ($.shopactivityId) QOQ0QQ0 = ',"activityId":' + $.shopactivityId;
        let OOQQQ00 = '{"venderId":"' + $.joinVenderId + '","shopId":"' + $.joinVenderId + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + QOQ0QQ0 + ',"channel":406}';
        let QQ0O00Q = await geth5st();
        const OOQ00QO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + OOQQQ00 + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + QQ0O00Q,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(OOQ00QO, async (OOOO0O0, QQ0O00O, QQ0OOO0) => {
            try {
                QQ0OOO0 = QQ0OOO0 && QQ0OOO0.match(/jsonp_.*?\((.*?)\);/) && QQ0OOO0.match(/jsonp_.*?\((.*?)\);/)[1] || QQ0OOO0;
                let Q00Q0QQ = $.toObj(QQ0OOO0, QQ0OOO0);
                if (Q00Q0QQ && (typeof Q00Q0QQ == 'object')) {
                    if (Q00Q0QQ && Q00Q0QQ.success === true) {
                        console.log(Q00Q0QQ.message);
                        $.errorJoinShop = Q00Q0QQ.message;
                        if (Q00Q0QQ.result && Q00Q0QQ.result.giftInfo) {
                            for (let O0QO0O0 of Q00Q0QQ.result.giftInfo.giftList) {
                                console.log('入会获得:' + O0QO0O0.discountString + O0QO0O0.prizeName + O0QO0O0.secondLineDesc);
                            }
                        }
                    } else if (Q00Q0QQ && typeof Q00Q0QQ == 'object' && Q00Q0QQ.message) {
                        $.errorJoinShop = Q00Q0QQ.message;
                        console.log('' + (Q00Q0QQ.message || ''));
                    } else {
                        console.log(QQ0OOO0);
                    }
                } else {
                    console.log(QQ0OOO0);
                }
            } catch (QQ00QO0) {
                $.logErr(QQ00QO0, QQ0O00O);
            } finally {
                OQ000QQ();
            }
        });
    });
}

async function getshopactivityId() {
    return new Promise(async QQ0OQOQ => {
        let OQ000OQ = '{"venderId":"' + $.joinVenderId + '","channel":406,"payUpShop":true}';
        let QOOOQOQ = await geth5st();
        const OQ000OO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + OQ000OQ + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + QOOOQOQ,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(OQ000OO, async (QOQQOO0, QOQQ00Q, O00QQQ0) => {
            try {
                O00QQQ0 = O00QQQ0 && O00QQQ0.match(/jsonp_.*?\((.*?)\);/) && O00QQQ0.match(/jsonp_.*?\((.*?)\);/)[1] || O00QQQ0;
                let OOOOO00 = $.toObj(O00QQQ0, O00QQQ0);
                if (OOOOO00 && (typeof OOOOO00 == 'object')) {
                    if (OOOOO00 && OOOOO00.success == true) {
                        console.log('入会:' + (OOOOO00.result.shopMemberCardInfo.venderCardName || ''));
                        $.shopactivityId = OOOOO00.result.interestsRuleList && OOOOO00.result.interestsRuleList[0] && OOOOO00.result.interestsRuleList[0].interestsInfo && OOOOO00.result.interestsRuleList[0].interestsInfo.activityId || '';
                    }
                } else {
                    console.log(O00QQQ0);
                }
            } catch (Q00OQ0O) {
                $.logErr(Q00OQ0O, QOQQ00Q);
            } finally {
                QQ0OQOQ();
            }
        });
    });
}

var _0xodb = 'jsjiami.com.v6', _0xodb_ = ['‮_0xodb'],
    _0x3c1b = [_0xodb, 'wqkgAcKeOQ==', 'NBDCnDEf', 'wqhhw7HDi8Ka', 'wrzCuHM/w6Qj', 'wpJyw7PDuMKE', 'E0bCnA==', 'BxbCg8KoSA==', 'QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==', 'N8KtRw==', 'LDbCrMKSfQ==', 'w6LDpG1qNA==', 'wpEXUcOjCA==', 'FV7Ch8KGZQ==', 'CWPCmXPCnA==', 'wrg0w4g=', 'YsOYw4oQw7oKAMOowok=', 'AAbCgQwHw6g=', 'w5bDjClaCcO8YcK7', 'JMKpOsO2ayRI', 'WsO5CMKfwq7DnMOJwqE=', 'w40KQnnCnMOYf8OJw4Na', 'PsKnRGvCtjUTZEhE', 'w7QjwrVeScOw', 'JcKgIcOdeA==', 'OMKgX0rCkA==', 'VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==', 'w5bCmMOtwrAXw4Je', 'UHLCjsOsw4wt', 'F8O3VsOmKXXDjDsLJCQ=', 'wqojL8K/L8Ke', 'PlfDgMKmScOr', 'wqZow6nDn8Kwwog=', 'CUzCmH4=', 'wrHDkTw=', 'TMONdMOcwq0=', 'KgzCnQYSw7Q=', 'OcK7N8K8w7w=', 'wro5I8KvOsKY', 'wro+w5FlHFg=', 'c8OmMcKhwoM=', 'WQQTw6Fo', 'xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if (function (QQOQ00O, Q00OQ0Q, QQOQOO0) {
    function QOQ000Q(OOOOO0Q, QQ0OQQ0, QQO0OQO, O00QQOQ, QQO0OQQ, O00QQOO) {
        QQ0OQQ0 = QQ0OQQ0 >> 0x8, QQO0OQQ = 'po';
        var OQ000O0 = 'shift', QOQQOOQ = 'push', O00QQOO = '‮';
        if (QQ0OQQ0 < OOOOO0Q) {
            while (--OOOOO0Q) {
                O00QQOQ = QQOQ00O[OQ000O0]();
                if (QQ0OQQ0 === OOOOO0Q && (O00QQOO === '‮') && O00QQOO.length === 1) {
                    QQ0OQQ0 = O00QQOQ, QQO0OQO = QQOQ00O[QQO0OQQ + 'p']();
                } else if (QQ0OQQ0 && QQO0OQO.replace(/[xNUxuLOwqBleVKE=]/g, '') === QQ0OQQ0) {
                    QQOQ00O[QOQQOOQ](O00QQOQ);
                }
            }
            QQOQ00O[QOQQOOQ](QQOQ00O[OQ000O0]());
        }
        return 968710;
    };
    return QOQ000Q(++Q00OQ0Q, QQOQOO0) >> Q00OQ0Q ^ QQOQOO0;
}(_0x3c1b, 411, 105216), _0x3c1b) {
    _0xodb_ = _0x3c1b.length ^ 0x19b;
}
;

function _0x80d0(QOQQOOO, O00OOQO) {
    QOQQOOO = ~~'0x'.concat(QOQQOOO.slice(1));
    var QOQQ000 = _0x3c1b[QOQQOOO];
    if (_0x80d0.ZHvfIH === undefined) {
        (function () {
            var Q00OO00 = typeof window !== 'undefined' ? window : (typeof process === 'object') && (typeof require === 'function') && (typeof global === 'object') ? global : this;
            var QQOQOQQ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            Q00OO00.atob || (Q00OO00.atob = function (O000OOO) {
                var QQOQQO0 = String(O000OOO).replace(/=+$/, '');
                for (var Q0O0Q0O = 0, O000QO0, QQOOOQ0, Q0O0Q0Q = 0, QOO0QO0 = ''; QQOOOQ0 = QQOQQO0.charAt(Q0O0Q0Q++); ~QQOOOQ0 && (O000QO0 = Q0O0Q0O % 4 ? (O000QO0 * 64 + QQOOOQ0) : QQOOOQ0, Q0O0Q0O++ % 4) ? QOO0QO0 += String.fromCharCode(0xff & O000QO0 >> (-2 * Q0O0Q0O & 0x6)) : 0) {
                    QQOOOQ0 = QQOQOQQ.indexOf(QQOOOQ0);
                }
                return QOO0QO0;
            });
        }());

        function OOO0O00(O00O00Q, O00OOQO) {
            var Q0OOO0Q = [], Q0OQ0OO = 0, OQOQO00, Q0OQQ00 = '', Q0OOO0O = '';
            O00O00Q = atob(O00O00Q);
            for (var Q0OQ0OQ = 0, O00O00O = O00O00Q.length; Q0OQ0OQ < O00O00O; Q0OQ0OQ++) {
                Q0OOO0O += '%' + ('00' + O00O00Q.charCodeAt(Q0OQ0OQ).toString(16)).slice(-2);
            }
            O00O00Q = decodeURIComponent(Q0OOO0O);
            for (var OO0O0OO = 0; OO0O0OO < 256; OO0O0OO++) {
                Q0OOO0Q[OO0O0OO] = OO0O0OO;
            }
            for (OO0O0OO = 0; OO0O0OO < 256; OO0O0OO++) {
                Q0OQ0OO = (Q0OQ0OO + Q0OOO0Q[OO0O0OO] + O00OOQO.charCodeAt(OO0O0OO % O00OOQO.length) % 256);
                OQOQO00 = Q0OOO0Q[OO0O0OO];
                Q0OOO0Q[OO0O0OO] = Q0OOO0Q[Q0OQ0OO];
                Q0OOO0Q[Q0OQ0OO] = OQOQO00;
            }
            OO0O0OO = 0;
            Q0OQ0OO = 0;
            for (var OOOQ0QO = 0; OOOQ0QO < O00O00Q.length; OOOQ0QO++) {
                OO0O0OO = (OO0O0OO + 1 % 256);
                Q0OQ0OO = (Q0OQ0OO + Q0OOO0Q[OO0O0OO] % 256);
                OQOQO00 = Q0OOO0Q[OO0O0OO];
                Q0OOO0Q[OO0O0OO] = Q0OOO0Q[Q0OQ0OO];
                Q0OOO0Q[Q0OQ0OO] = OQOQO00;
                Q0OQQ00 += String.fromCharCode(O00O00Q.charCodeAt(OOOQ0QO) ^ Q0OOO0Q[Q0OOO0Q[OO0O0OO] + Q0OOO0Q[Q0OQ0OO] % 256]);
            }
            return Q0OQQ00;
        }

        _0x80d0.uZkhLK = OOO0O00;
        _0x80d0.PgBxtv = {};
        _0x80d0.ZHvfIH = true;
    }
    var Q0O00Q0 = _0x80d0.PgBxtv[QOQQOOO];
    if (Q0O00Q0 === undefined) {
        if (_0x80d0.mzwOwg === undefined) {
            _0x80d0.mzwOwg = true;
        }
        QOQQ000 = _0x80d0.uZkhLK(QOQQ000, O00OOQO);
        _0x80d0.PgBxtv[QOQQOOO] = QOQQ000;
    } else {
        QOQQ000 = Q0O00Q0;
    }
    return QOQQ000;
};

function generateFp() {
    var QQO0000 = {
        'ryoPy': '0123456789', 'mfvwK': function (QQO0QQO, O00OQQQ) {
            return QQO0QQO | O00OQQQ;
        }, 'WutDU': function (O00OQQO, Q0OQQ0Q) {
            return O00OQQO + Q0OQQ0Q;
        }
    };
    let QOOO00Q = QQO0000[_0x80d0('‮0', 'wj)i')];
    let QOOOOO0 = 13;
    let OQO0O00 = '';
    for (; QOOOOO0--;) OQO0O00 += QOOO00Q[QQO0000[_0x80d0('‮1', 'Z*hR')](Math.random() * QOOO00Q[_0x80d0('‮2', '3@Q*')], 0)];
    return QQO0000[_0x80d0('‮3', 'Z*hR')](OQO0O00, Date[_0x80d0('‮4', 'Da%Y')]())[_0x80d0('‮5', 'LwWi')](0, 16);
}

function geth5st() {
    var QQO000O = {
        'XLFYP': 'yyyyMMddhhmmssSSS',
        'ERdzy': ';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;',
        'eaFvs': _0x80d0('‮6', '@hXf'),
        'NqklQ': function (OQOQ0QQ, O00OOQ0) {
            return OQOQ0QQ(O00OOQ0);
        },
        'DqrqH': function (QOQQOQ0, QOOOOQQ) {
            return QOQQOQ0 + QOOOOQQ;
        },
        'GEDpa': function (OOOQQ00, QOOQQOQ) {
            return OOOQQ00 + QOOQQOQ;
        },
        'tJryJ': function (OO0O0QQ, QOOQQOO) {
            return OO0O0QQ + QOOQQOO;
        }
    };
    let OOOQ0OO = Date[_0x80d0('‮7', '3B2S')]();
    let O0OQOOO = generateFp();
    let Q00O0O0 = new Date(OOOQ0OO).Format(QQO000O[_0x80d0('‫8', 'LwWi')]);
    let O0OQOOQ = [QQO000O.ERdzy, QQO000O[_0x80d0('‮9', 'SCQF')]];
    let QQOQQQ0 = O0OQOOQ[random(0, O0OQOOQ.length)];
    return QQO000O[_0x80d0('‫a', '%HoM')](encodeURIComponent, QQO000O.DqrqH(QQO000O[_0x80d0('‫b', 'vWDW')](QQO000O[_0x80d0('‮c', 'Da%Y')](Q00O0O0, ';') + O0OQOOO, QQOQQQ0), Date[_0x80d0('‮d', '7]Bn')]()));
}

Date[_0x80d0('‫e', 'gM9$')][_0x80d0('‫f', 'wj)i')] = function (O000QQ0) {
    var O00OQO0 = {
        'wGAVl': function (OQOQ0OQ, Q0OQO00) {
            return OQOQ0OQ / Q0OQO00;
        }, 'aborC': function (QQQ0OQ0, QOOQ000) {
            return QQQ0OQ0 + QOOQ000;
        }, 'khvyA': function (QOOQQQQ, OQO0Q0O) {
            return QOOQQQQ === OQO0Q0O;
        }, 'RkhHN': function (OQO00Q0, OQO0Q0Q) {
            return OQO00Q0 == OQO0Q0Q;
        }
    };
    var Q0O0O0O, QQOOQQ0 = this, QQOOQQO = O000QQ0, QQQQ00O = {
        'M+': (QQOOQQ0[_0x80d0('‮10', 'lEbY')]() + 1),
        'd+': QQOOQQ0.getDate(),
        'D+': QQOOQQ0[_0x80d0('‮11', 'm]Ir')](),
        'h+': QQOOQQ0.getHours(),
        'H+': QQOOQQ0[_0x80d0('‫12', 'hLmb')](),
        'm+': QQOOQQ0[_0x80d0('‫13', 'y[mS')](),
        's+': QQOOQQ0[_0x80d0('‮14', '3B2S')](),
        'w+': QQOOQQ0[_0x80d0('‫15', '$n0%')](),
        'q+': Math[_0x80d0('‮16', 'm]Ir')](O00OQO0.wGAVl(O00OQO0[_0x80d0('‮17', '3B2S')](QQOOQQ0.getMonth(), 3), 3)),
        'S+': QQOOQQ0[_0x80d0('‫18', '3aAN')]()
    };
    /(y+)/i.test(QQOOQQO) && (QQOOQQO = QQOOQQO[_0x80d0('‫19', 'bosv')](RegExp.$1, ''[_0x80d0('‮1a', '3aAN')](QQOOQQ0[_0x80d0('‫1b', 'n1@B')]())[_0x80d0('‮1c', 'ctu&')](4 - RegExp.$1[_0x80d0('‫1d', 'T8*w')])));
    for (var QOO0OOQ in QQQQ00O) {
        if (new RegExp('('[_0x80d0('‮1e', 'Z*hR')](QOO0OOQ, ')'))[_0x80d0('‮1f', 'Da%Y')](QQOOQQO)) {
            var QOO0OOO, OQOQQ0O = O00OQO0.khvyA('S+', QOO0OOQ) ? _0x80d0('‫20', 'dvcH') : '00';
            QQOOQQO = QQOOQQO.replace(RegExp.$1, O00OQO0[_0x80d0('‫21', 'Jp@*')](1, RegExp.$1[_0x80d0('‫22', 'wj)i')]) ? QQQQ00O[QOO0OOQ] : O00OQO0[_0x80d0('‫23', 'JH9X')](''.concat(OQOQQ0O), QQQQ00O[QOO0OOQ]).substr(''[_0x80d0('‮24', 'ctu&')](QQQQ00O[QOO0OOQ])[_0x80d0('‫25', '7]Bn')]));
        }
    }
    return QQOOQQO;
};

function random(OQOQQ0Q, Q0OQO0O) {
    var QQO0QO0 = {
        'NzMvB': function (OOOQO00, QOOQOOQ) {
            return OOOQO00 + QOOQOOQ;
        }, 'pvLRb': function (QQOO00Q, QQOOOO0) {
            return QQOO00Q * QQOOOO0;
        }, 'KNgAC': function (QQQQOQ0, QOO0OQQ) {
            return QQQQOQ0 - QOO0OQQ;
        }
    };
    return QQO0QO0[_0x80d0('‫26', 'hLmb')](Math[_0x80d0('‫27', 'eShm')](QQO0QO0[_0x80d0('‮28', 'ctu&')](Math.random(), QQO0QO0.KNgAC(Q0OQO0O, OQOQQ0Q))), OQOQQ0Q);
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
