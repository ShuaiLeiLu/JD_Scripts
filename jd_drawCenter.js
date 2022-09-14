/*
活动名称：店铺抽奖中心 · 超级无线
活动链接：https://lzkj-isv.isvjd.com/drawCenter/activity/activity?activityId=<活动id>
环境变量：jd_drawCenter_activityId // 活动id
					jd_drawCenter_addCart // 是否做加购任务，默认不做

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#LZ刮刮乐抽奖通用活动-加密
1 1 1 1 * jd_wxShareActivity.js, tag=LZ刮刮乐抽奖通用活动-加密, enabled=true
*/
const $ = new Env('LZ刮刮乐抽奖通用活动-解密');
const jdCookieNode = $.isNode() ? require('./jdCookie') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const getToken = require('./function/krgetToken');
let cookiesArr = [], cookie = '', message = '';
let ownCode = {};
let isdoTask = true;
let isdraw = true;
let lz_cookie = {};
let drawCenterActivityId = '';
let Allmessage = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(OOQ0QO => {
        cookiesArr.push(jdCookieNode[OOQ0QO]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    let cookiesData = $.getdata('CookiesJD') || '[]';
    cookiesData = JSON.parse(cookiesData);
    cookiesArr = cookiesData.map(OOQOO0 => OOQOO0.cookie);
    cookiesArr.reverse();
    cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
    cookiesArr.reverse();
    cookiesArr = cookiesArr.filter(OOQ0QQ => !!OOQ0QQ);
}
if (process.env.jd_drawCenter_activityId && process.env.jd_drawCenter_activityId != '') {
    drawCenterActivityId = process.env.jd_drawCenter_activityId.split(',');
}
let addCart = process.env.jd_drawCenter_addCart ? process.env.jd_drawCenter_addCart : 'false';
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
        return;
    }
    console.log('活动入口：https://lzkj-isv.isvjd.com/drawCenter/activity/activity?activityId=' + drawCenterActivityId);
    for (let QO00Q0 = 0; QO00Q0 < cookiesArr.length; QO00Q0++) {
        if (cookiesArr[QO00Q0]) {
            cookie = cookiesArr[QO00Q0];
            originCookie = cookiesArr[QO00Q0];
            newCookie = '';
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1]);
            $.index = QO00Q0 + 1;
            $.isLogin = true;
            $.nickName = '';
            await checkCookie();
            console.log('\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            if (!$.isLogin) {
                $.msg($.name, '【提示】cookie已失效', '京东账号' + $.index + ' ' + ($.nickName || $.UserName) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
                if ($.isNode()) {
                    await notify.sendNotify($.name + 'cookie已失效 - ' + $.UserName, '京东账号' + $.index + ' ' + $.UserName + '\n请重新登录获取cookie');
                }
                continue;
            }
            authorCodeList = [''];
            $.bean = 0;
            $.ADID = getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 1);
            $.UUID = getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
            $.authorCode = ownCode ? ownCode : authorCodeList[random(0, authorCodeList.length)];
            $.authorNum = '' + random(1000000, 9999999);
            $.activityId = drawCenterActivityId;
            $.activityUrl = 'https://lzkj-isv.isvjcloud.com/drawCenter/activity/' + $.authorNum + '?activityId=' + $.activityId + '&shareUuid=' + encodeURIComponent($.authorCode) + '&shareuserid4minipg=null&shopid=' + $.venderId;
            message = '';
            await run();
            await $.wait(1000);
            if (Allmessage !== '') {
                if ($.isNode()) {
                    await notify.sendNotify($.name, message, '', '\n');
                }
            }
        }
    }
    if (Allmessage !== '') {
        if ($.isNode()) {
            await notify.sendNotify($.name, message, '', '\n');
        }
    }
})().catch(QOQ00Q => {
    $.log('', '❌ ' + $.name + ', 失败! 原因: ' + QOQ00Q + '!', '');
}).finally(() => {
    $.done();
});

async function run() {
    await $.wait(500);
    $.token = null;
    $.secretPin = null;
    await getFirstLZCK();
    $.token = await getToken(originCookie, 'https://lzkj-isv.isvjcloud.com');
    if ($.index == 1) await task('customer/getSimpleActInfoVo', 'activityId=' + $.activityId, 1);
    if ($.token) {
        await getMyPing();
        if ($.secretPin) {
            await task('common/accessLogWithAD', 'venderId=' + $.venderId + '&code=99&pin=' + encodeURIComponent($.secretPin) + '&activityId=' + $.activityId + '&pageUrl=' + $.activityUrl + '&subType=app&adSource=null', 1);
            await task('wxActionCommon/getUserInfo', 'pin=' + encodeURIComponent($.secretPin), 1);
            await $.wait(500);
            await task('activityContent', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&pinImg=' + encodeURIComponent($.pinImg) + '&nick=' + encodeURIComponent($.pin) + '&cjyxPin=&cjhyPin=&shareUuid=' + encodeURIComponent($.authorCode));
            if ($.index === 1) {
                console.log('助力码：' + ownCode);
                console.log('当前活动：' + $.activityName);
            }
            if ($.activityContent) {
                if (isdoTask) {
                    await $.wait(500);
                    await task('myInfo', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                    for (var Q00QQ0 = 0; Q00QQ0 < $.taskList.length; Q00QQ0++) {
                        $.taskType = $.taskList[Q00QQ0].taskType;
                        $.maxNeed = $.taskList[Q00QQ0].maxNeed;
                        $.curNum = $.taskList[Q00QQ0].curNum;
                        $.remaining = $.maxNeed - $.curNum;
                        if ($.curNum == $.maxNeed) continue;
                        await $.wait(500);
                        switch ($.taskType) {
                            case 'share2help':
                                if ($.index === 1) break;
                                $.log('\n去助力 -> ' + ownCode);
                                await task('helpFriend', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&shareUuid=' + encodeURIComponent($.authorCode));
                                break;
                            case 'dailysign':
                                $.log('\n进行每日签到');
                                await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=dailysign&param=');
                                break;
                            case 'followshop':
                                $.log('\n去关注店铺');
                                await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=followshop&param=');
                                break;
                            case 'scanshop':
                                $.log('\n去浏览店铺');
                                await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=scanshop&param=');
                                break;
                            case 'add2cart':
                                if (addCart == 'true') {
                                    console.log('');
                                    await task('getProduct', 'type=1&activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                                    for (let Q000OO = 0; Q000OO < $.getProduct.length; Q000OO++) {
                                        await $.wait(500);
                                        $.log('去加购商品：' + $.getProduct[Q000OO].name);
                                        await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=add2cart&param=' + $.getProduct[Q000OO].skuId);
                                        if (Q000OO == $.remaining - 1) break;
                                    }
                                }
                                break;
                            case 'ordersku':
                                console.log('');
                                await task('getProduct', 'type=2&activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                                for (let OOQ0O0 = 0; OOQ0O0 < $.getProduct.length; OOQ0O0++) {
                                    await $.wait(500);
                                    $.log('去预约商品：' + $.getProduct[OOQ0O0].name);
                                    await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=ordersku&param=' + $.getProduct[OOQ0O0].skuId);
                                    if (OOQ0O0 == $.remaining - 1) break;
                                }
                                break;
                            case'followsku':
                                console.log('');
                                await task('getProduct', 'type=3&activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                                for (let OOOOQQ = 0; OOOOQQ < $.getProduct.length; OOOOQQ++) {
                                    await $.wait(500);
                                    $.log('去关注商品：' + $.getProduct[OOOOQQ].name);
                                    await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=followsku&param=' + $.getProduct[OOOOQQ].skuId);
                                    if (OOOOQQ == $.remaining - 1) break;
                                }
                                break;
                            case 'scansku':
                                console.log('');
                                await task('getProduct', 'type=4&activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                                for (let OOQQQ0 = 0; OOQQQ0 < $.getProduct.length; OOQQQ0++) {
                                    await $.wait(500);
                                    $.log('去浏览商品：' + $.getProduct[OOQQQ0].name);
                                    await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=scansku&param=' + $.getProduct[OOQQQ0].skuId);
                                    if (OOQQQ0 == $.remaining - 1) break;
                                }
                                break;
                            case 'scanurl':
                                $.venue_name = JSON.parse($.taskList[Q00QQ0].params).name;
                                $.log('\n去浏览会场：' + $.venue_name);
                                await task('doTask', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&taskId=' + $.taskList[Q00QQ0].taskId + '&param=');
                                break;
                            default:
                                break;
                        }
                    }
                }
                if (isdraw) {
                    await task('activityContent', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin) + '&pinImg=' + encodeURIComponent($.pinImg) + '&nick=' + encodeURIComponent($.pin) + '&cjyxPin=&cjhyPin=&shareUuid=' + encodeURIComponent($.authorCode));
                    if ($.chance >= 1) {
                        $.log('\n任务已全部完成，当前共有 ' + $.chance + ' 次抽奖机会，开始抽奖吧～\n');
                    } else {
                        $.log('\n没有抽奖机会了～');
                    }
                    await $.wait(500);
                    for (let OO0QO0 = 0; OO0QO0 < $.chance; OO0QO0++) {
                        await task('draw/luckyDraw', 'activityId=' + $.activityId + '&pin=' + encodeURIComponent($.secretPin));
                        await $.wait(1000);
                        if (OO0QO0 == 9) {
                            $.log('\n抽奖太多次了，下次再抽吧~');
                            break;
                        }
                    }
                }
            } else {
                $.log('未能成功获取到活动信息');
            }
        } else {
            $.log('没有成功获取到用户信息');
        }
    } else {
        $.log('没有成功获取到用户鉴权信息');
    }
}

function task(OQQO0Q, OOO00O, OOOOO0 = 0) {
    return new Promise(QQ00O0 => {
        $.post(taskUrl(OQQO0Q, OOO00O, OOOOO0), async (OQO0OQ, OQOQ00, QQOOOQ) => {
            try {
                if (OQO0OQ) {
                    $.log(OQO0OQ);
                } else {
                    if (QQOOOQ) {
                        QQOOOQ = JSON.parse(QQOOOQ);
                        if (OQOQ00.headers['set-cookie']) {
                            cookie = '' + originCookie;
                            for (let QQOQQQ of OQOQ00.headers['set-cookie']) {
                                lz_cookie[QQOQQQ.split(';')[0].substr(0, QQOQQQ.split(';')[0].indexOf('='))] = QQOQQQ.split(';')[0].substr(QQOQQQ.split(';')[0].indexOf('=') + 1);
                            }
                            for (const QQOQ0O of Object.keys(lz_cookie)) {
                                cookie += QQOQ0O + '=' + lz_cookie[QQOQ0O] + ';';
                            }
                        }
                        if (QQOOOQ.result) {
                            switch (OQQO0Q) {
                                case 'customer/getSimpleActInfoVo':
                                    $.jdActivityId = QQOOOQ.data.jdActivityId;
                                    $.venderId = QQOOOQ.data.venderId;
                                    break;
                                case 'activityContent':
                                    $.activityContent = QQOOOQ.data.activityId;
                                    $.chance = QQOOOQ.data.chance || 0;
                                    $.activityName = QQOOOQ.data.activityName || '';
                                    if ($.index === 1) {
                                        ownCode = QQOOOQ.data.uid;
                                    }
                                    break;
                                case 'myInfo':
                                    $.taskList = QQOOOQ.data.taskList;
                                    break;
                                case 'wxActionCommon/getUserInfo':
                                    if (QQOOOQ.data.yunMidImageUrl) {
                                        if ($.index === 1) {
                                            ownCode.pinImg = QQOOOQ.data.yunMidImageUrl;
                                            ownCode.nickname = QQOOOQ.data.nickname;
                                        }
                                        $.pinImg = QQOOOQ.data.yunMidImageUrl;
                                    } else {
                                        if ($.index === 1) {
                                            ownCode.pinImg = 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                                            ownCode.nickname = QQOOOQ.data.nickname;
                                        }
                                        $.pinImg = 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
                                    }
                                    break;
                                case 'helpFriend':
                                    $.helpFriend = QQOOOQ.data.helpFriendMsg;
                                    console.log('  >> ' + $.helpFriend);
                                    break;
                                case 'wxAssemblePage/shopinfo':
                                    break;
                                case 'doTask':
                                    if (QQOOOQ.result) {
                                        console.log('  >> 任务完成');
                                    } else {
                                        $.log(QQOOOQ.result);
                                    }
                                    break;
                                case 'getProduct':
                                    $.getProduct = QQOOOQ.data;
                                    break;
                                case 'draw/luckyDraw':
                                    if (QQOOOQ.data) {
                                        if (QQOOOQ.data.drawInfo) {
                                            switch (QQOOOQ.data.drawInfo.type) {
                                                case 6:
                                                    console.log('🎉 ' + QQOOOQ.data.drawInfo.name + ' 🐶');
                                                    break;
                                                case 7:
                                                    console.log(QQOOOQ.data.drawInfo);
                                                    console.log('🎉 恭喜获得实物，去看看活动规则吧～');
                                                    break;
                                                case 8:
                                                    console.log('🗑️ 专享价');
                                                    break;
                                                case 9:
                                                    console.log('🗑️ ' + QQOOOQ.data.drawInfo.name + ' 🎟️');
                                                    break;
                                                case 13:
                                                    console.log('🎉 恭喜获得' + QQOOOQ.data.drawInfo.name + ' 🎁');
                                                    break;
                                                case 16:
                                                    console.log('🎉 ' + QQOOOQ.data.drawInfo.priceInfo + ' 🧧');
                                                    break;
                                                default:
                                                    if (QQOOOQ.data.drawInfo.name.includes('券')) {
                                                        console.log('🗑️ 优惠券');
                                                    } else {
                                                        console.log('获得：' + QQOOOQ.data.drawInfo.name);
                                                    }
                                                    break;
                                            }
                                        } else {
                                            console.log('💨  空气');
                                        }
                                        message += QQOOOQ.data.name;
                                    }
                                    break;
                                default:
                                    $.log(JSON.stringify(QQOOOQ));
                                    break;
                            }
                            await $.wait(2000);
                        }
                    } else {
                    }
                }
            } catch (OQOOQO) {
                $.log(OQOOQO);
            } finally {
                QQ00O0();
            }
        });
    });
}

function taskUrl(OQ0Q00, OQ00OO, OQ0QQ0) {
    return {
        'url': OQ0QQ0 ? 'https://lzkj-isv.isvjcloud.com/' + OQ0Q00 : 'https://lzkj-isv.isvjcloud.com/drawCenter/' + OQ0Q00,
        'headers': {
            'Host': 'lzkj-isv.isvjcloud.com',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://lzkj-isv.isvjcloud.comm',
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $.UUID + ';network/wifi;ADID/' + $.ADID + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': 'keep-alive',
            'Referer': $.activityUrl,
            'Cookie': cookie
        },
        'body': OQ00OO
    };
}

function getMyPing() {
    let Q0QQQQ = {
        'url': 'https://lzkj-isv.isvjcloud.com/customer/getMyPing',
        'headers': {
            'Host': 'lzkj-isv.isvjcloud.com',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Accept-Language': 'zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://lzkj-isv.isvjcloud.com',
            'User-Agent': 'jdapp;iPhone;9.5.4;13.6;' + $.UUID + ';network/wifi;ADID/' + $.ADID + ';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
            'Connection': 'keep-alive',
            'Referer': $.activityUrl,
            'Cookie': cookie
        },
        'body': 'userId=' + $.venderId + '&token=' + $.token + '&fromType=APP&riskType=1'
    };
    return new Promise(Q0Q0Q0 => {
        $.post(Q0QQQQ, (Q0QQ0Q, OQOOOO, OQOOOQ) => {
            try {
                if (Q0QQ0Q) {
                    $.log(Q0QQ0Q);
                } else {
                    if (OQOOOO.headers['set-cookie']) {
                        cookie = '' + originCookie;
                        for (let OQOOO0 of OQOOOO.headers['set-cookie']) {
                            lz_cookie[OQOOO0.split(';')[0].substr(0, OQOOO0.split(';')[0].indexOf('='))] = OQOOO0.split(';')[0].substr(OQOOO0.split(';')[0].indexOf('=') + 1);
                        }
                        for (const OQO00O of Object.keys(lz_cookie)) {
                            cookie += OQO00O + '=' + lz_cookie[OQO00O] + ';';
                        }
                    }
                    if (OQOOOQ) {
                        OQOOOQ = JSON.parse(OQOOOQ);
                        if (OQOOOQ.result) {
                            $.pin = OQOOOQ.data.nickname;
                            $.secretPin = OQOOOQ.data.secretPin;
                        } else {
                            $.log(OQOOOQ.errorMessage);
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (Q0QOOQ) {
                $.log(Q0QOOQ);
            } finally {
                Q0Q0Q0();
            }
        });
    });
}

function getFirstLZCK() {
    return new Promise(OOOOQQ0 => {
        $.get({
            'url': $.activityUrl,
            'headers': {'user-agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'}
        }, (Q00QQOQ, OOQQOOO, Q00QQOO) => {
            try {
                if (Q00QQOQ) {
                    console.log(Q00QQOQ);
                } else {
                    if (OOQQOOO.headers['set-cookie']) {
                        cookie = '' + originCookie;
                        for (let OOOO000 of OOQQOOO.headers['set-cookie']) {
                            lz_cookie[OOOO000.split(';')[0].substr(0, OOOO000.split(';')[0].indexOf('='))] = OOOO000.split(';')[0].substr(OOOO000.split(';')[0].indexOf('=') + 1);
                        }
                        for (const QQ0OO00 of Object.keys(lz_cookie)) {
                            cookie += QQ0OO00 + '=' + lz_cookie[QQ0OO00] + ';';
                        }
                    }
                }
            } catch (Q000QOO) {
                console.log(Q000QOO);
            } finally {
                OOOOQQ0();
            }
        });
    });
}

function random(QOQQ0O0, QOQOO0Q) {
    return Math.floor(Math.random() * (QOQOO0Q - QOQQ0O0)) + QOQQ0O0;
}

function getUUID(O000O0O = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', QQ000OQ = 0) {
    return O000O0O.replace(/[xy]/g, function (OOQQQQQ) {
        var QOQ0Q0O = Math.random() * 0x10 | 0x0, QQ0OQ0Q = OOQQQQQ == 'x' ? QOQ0Q0O : QOQ0Q0O & 0x3 | 0x8;
        if (QQ000OQ) {
            uuid = QQ0OQ0Q.toString(36).toUpperCase();
        } else {
            uuid = QQ0OQ0Q.toString(36);
        }
        return uuid;
    });
}

function checkCookie() {
    const Q00Q000 = {
        'url': 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
        'headers': {
            'Host': 'me-api.jd.com',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1',
            'Accept-Language': 'zh-cn',
            'Referer': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
            'Accept-Encoding': 'gzip, deflate, br'
        }
    };
    return new Promise(O0QOQO0 => {
        $.get(Q00Q000, (O00QO0O, OOQ000Q, QQ0O0QO) => {
            try {
                if (O00QO0O) {
                    $.logErr(O00QO0O);
                } else {
                    if (QQ0O0QO) {
                        QQ0O0QO = JSON.parse(QQ0O0QO);
                        if (QQ0O0QO.retcode === '1001') {
                            $.isLogin = false;
                            return;
                        }
                        if (QQ0O0QO.retcode === '0' && QQ0O0QO.data.hasOwnProperty('userInfo')) {
                            $.nickName = QQ0O0QO.data.userInfo.baseInfo.nickname;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (Q00QOO0) {
                $.logErr(Q00QOO0);
            } finally {
                O0QOQO0();
            }
        });
    });
};
!function (n) {
    "use strict";

    function t(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function r(n, t) {
        return n << t | n >>> 32 - t
    }

    function e(n, e, o, u, c, f) {
        return t(r(t(t(e, n), t(u, f)), c), o)
    }

    function o(n, t, r, o, u, c, f) {
        return e(t & r | ~t & o, n, t, u, c, f)
    }

    function u(n, t, r, o, u, c, f) {
        return e(t & o | r & ~o, n, t, u, c, f)
    }

    function c(n, t, r, o, u, c, f) {
        return e(t ^ r ^ o, n, t, u, c, f)
    }

    function f(n, t, r, o, u, c, f) {
        return e(r ^ (t | ~o), n, t, u, c, f)
    }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878;
        for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
        return [l, g, v, m]
    }

    function a(n) {
        var t, r = "", e = 32 * n.length;
        for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function d(n) {
        var t, r = [];
        for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
        var e = 8 * n.length;
        for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r
    }

    function h(n) {
        return a(i(d(n), 8 * n.length))
    }

    function l(n, t) {
        var r, e, o = d(n), u = [], c = [];
        for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
        return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }

    function g(n) {
        var t, r, e = "";
        for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return e
    }

    function v(n) {
        return unescape(encodeURIComponent(n))
    }

    function m(n) {
        return h(v(n))
    }

    function p(n) {
        return g(m(n))
    }

    function s(n, t) {
        return l(v(n), v(t))
    }

    function C(n, t) {
        return g(s(n, t))
    }

    function A(n, t, r) {
        return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
    }

    $.md5 = A
}(this);

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
                    e = t ? this.lodash_get(t, i, "") : e
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
                const {url: s, ...i} = t;
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
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
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