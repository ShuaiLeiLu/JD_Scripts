/*
8.15-8.25 畅享一夏，消费赢壕礼
新增开卡脚本，一次性脚本

第一个账号助力作者 其他依次助力CK1
注意：第一个CK黑号会全部助力所填写的助力码

cron:29 19 15-25 8 * 
============Quantumultx===============
[task_local]
#8.15-8.25 畅享一夏，消费赢壕礼
29 19 15-25 8 * jd_opencardL217.js, tag=8.15-8.25 畅享一夏，消费赢壕礼, enabled=true
*/
let opencard_toShop = "false"
const $ = new Env("8.15-8.25 畅享一夏，消费赢壕礼");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const getToken = require('./function/getToken');
let cookiesArr = [], cookie = '';
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(OQO00Q => {
        cookiesArr.push(jdCookieNode[OQO00Q]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(OQ0QOO => OQ0QOO.cookie)].filter(OQ00O0 => !!OQ00O0);
}
opencard_toShop = $.isNode() ? process.env.opencard_toShop ? process.env.opencard_toShop : '' + opencard_toShop : $.getdata('opencard_toShop') ? $.getdata('opencard_toShop') : '' + opencard_toShop;
allMessage = '';
message = '';
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
let lz_jdpin_token_cookie = '';
let activityCookie = '';
let shareUuidArr = [];
let s = Math.floor(Math.random() * 7);
let n = 0;
n = Math.floor(Math.random() * shareUuidArr.length);
let helpnum = shareUuidArr[n] ? shareUuidArr[n] : $.shareUuid;
!(async () => {
    console.log('\n请自行确认账号一是否黑号，黑号会全部助力当前助力');
    console.log('\n当前助力：' + helpnum);
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {'open-url': 'https://bean.m.jd.com/'});
        return;
    }
    $.appkey = '21699045';
    $.userId = '10299171';
    $.actId = '47a0586b4d3941faaa7b7abdc59a0d1d';
    $.MixNicks = '';
    $.inviteNick = helpnum;
    for (let Q000QQ0 = 0; Q000QQ0 < cookiesArr.length; Q000QQ0++) {
        cookie = cookiesArr[Q000QQ0];
        if (cookie) {
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = (Q000QQ0 + 1);
            message = '';
            $.bean = 0;
            $.hotFlag = false;
            $.nickName = '';
            console.log('\n\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            await getUA();
            await run();
            if ($.outFlag || $.activityEnd) break;
        }
    }
    if ($.outFlag) {
        let OQ00OQQ = '此ip已被限制，请过10分钟后再执行脚本';
        $.msg($.name, '', '' + OQ00OQQ);
        if ($.isNode()) await notify.sendNotify('' + $.name, '' + OQ00OQQ);
    }
})().catch(QOQOO00 => $.logErr(QOQOO00)).finally(() => $.done());

async function run() {
    try {
        $.hasEnd = true;
        $.endTime = 0;
        lz_jdpin_token_cookie = '';
        $.token = '';
        $.Pin = '';
        $.MixNick = '';
        let OOQQQQO = false;
        if ($.activityEnd) return;
        if ($.outFlag) {
            console.log('此ip已被限制，请过10分钟后再执行脚本\n');
            return;
        }
        $.token = await getToken(cookie, 'https://mpdz8-dz.isvjcloud.com');
        if ($.token == '') {
            console.log('获取[token]失败！');
            return;
        }
        await takePostRequest('activity_load');
        if ($.hotFlag) return;
        if ($.MixNick == '') {
            console.log('获取cookie失败');
            return;
        }
        $.toBind = 0;
        $.openList = [];
        await $.wait(1000);
        await takePostRequest('activity_load');
        await takePostRequest('shopList');
        for (o of $.openList) {
            $.missionType = 'openCard';
            if ((o.open != true) && o.openCardUrl) {
                if ($.activityEnd) return;
                $.open = false;
                $.joinVenderId = o.userId;
                await takePostRequest('kaika');
                await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
                if ($.open == false) {
                    await getshopactivityId();
                    for (let QOQ00OO = 0; QOQ00OO < Array(5).length; QOQ00OO++) {
                        if (QOQ00OO > 0) console.log('第' + QOQ00OO + '次 重新开卡');
                        await joinShop();
                        await $.wait(500);
                        if (($.errorJoinShop.indexOf('活动太火爆，请稍后再试') == -1) && $.errorJoinShop.indexOf('加入店铺会员失败') == -1) {
                            break;
                        }
                    }
                    if ($.errorJoinShop.indexOf('活动太火爆，请稍后再试') > -1) {
                        console.log('开卡失败❌ ，重新执行脚本');
                    } else {
                        $.joinStatus = true;
                    }
                    await takePostRequest('kaika');
                    await takePostRequest('shopList');
                    await takePostRequest('activity_load');
                    await $.wait(parseInt(Math.random() * 2000 + 1000, 10));
                }
            }
        }
        if ($.hasCollectShop === 0) {
            $.missionType = 'uniteCollectShop';
            await takePostRequest('mission');
            await $.wait(parseInt(Math.random() * 2000 + 1000, 10));
        } else {
            console.log('已经关注');
        }
        await takePostRequest('助力');
        await takePostRequest('myAward');
        await takePostRequest('missionInviteList');
        console.log($.MixNick);
        console.log('当前助力:' + $.inviteNick);
        if ($.index == 1) {
            $.inviteNick = $.MixNick;
            console.log('后面的号都会助力:' + $.inviteNick);
        }
        await $.wait(parseInt((Math.random() * 1000) + 2000, 10));
    } catch (OQ00000) {
        console.log(OQ00000);
    }
}

async function takePostRequest(OOQ000Q) {
    if ($.outFlag) return;
    let O000Q0Q = 'https://mpdz6-dz.isvjcloud.com';
    let O0000Q0 = '';
    let QOQ00QO = 'POST';
    let OOO0QQO = '';
    switch (OOQ000Q) {
        case 'isvObfuscator':
            url = 'https://api.m.jd.com/client.action?functionId=isvObfuscator';
            O0000Q0 = 'body=%7B%22url%22%3A%22https%3A%5C/%5C/mpdz-dz.isvjcloud.com%5C/jdbeverage%5C/pages%5C/sign51%5C/sign51?bizExtString%3Dc2hhcmVOaWNrOjh0WFJQTEFobk8yaEU4V1VPUHByY2M3VHdKQ21OZThORnZocEkwWG1KRFVMVlUxMDglMkJVeGxIdzdxb1V1SEE0RiZoZWFkUGljVXJsOmh0dHAlM0ElMkYlMkZzdG9yYWdlLjM2MGJ1eWltZy5jb20lMkZpLmltYWdlVXBsb2FkJTJGNzc3NTY4NjU2ZTczNzQ2MTcyMzEzNjMwMzQzOTM4MzczODMxMzMzMTMxMzNfbWlkLmpwZyZuaWNrTmFtZTolRTYlOEMlOUElRTclODglQjElRTclOEYlOEElRTUlQUUlOUQlRTUlQUUlOUQ%3D%26sid%3D8476480e8271ba209c055afca63a924w%26un_area%3D4_50950_50957_0%22%2C%22id%22%3A%22%22%7D&build=167963&client=apple&clientVersion=10.3.6&d_brand=apple&d_model=iPhone8%2C2&ef=1&eid=eidI994b812123s1PRhmb/36RNW2uQJarJ271z0YZ%2Bv4APcrj75ymDe%2B0Z6%2BnTWSLykYTnpR8p/NwxporPY8JdbEwVIoH6%2BtJTHm/uL08tuO6g10hmNP&ep=%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22screen%22%3A%22CJS0CseyCtK4%22%2C%22osVersion%22%3A%22CJGkEK%3D%3D%22%2C%22openudid%22%3A%22ZWY5YtTvYwVsCzY4DWYnY2VtDNU0ZtVwCNU2EQTtZtY1DtTuDtu4Dm%3D%3D%22%2C%22area%22%3A%22DP81CNu1CP81CNu1D18m%22%2C%22uuid%22%3A%22aQf1ZRdxb2r4ovZ1EJZhcxYlVNZSZz09%22%7D%2C%22ts%22%3A1651115073%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D&ext=%7B%22prstate%22%3A%220%22%2C%22pvcStu%22%3A%221%22%7D&isBackground=N&joycious=116&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&partner=apple&rfs=0000&scope=01&sign=a872218a0b5b8bbf20718217f084b1ed&st=1651205710814&sv=120&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJGDvIUMS36N/l7mJ1NVzSiKCsJDs6WgecFid6ckXh2O65h6Up5mRVfM9FxyqSf7AnAUkkxZuCEelMJweKE0qmxKo6RbZPmvFcsO%2BBSivc5EiXDNGR2/Plyt5HCOw4YhV3l8R5RbDUOvqt4fdTRkK6bkQ28k%2B8Lf73/CiUHR%2ByZjLjlf/p50Zq9A%3D%3D';
            break;
        case 'activity_load':
            url = O000Q0Q + '/dm/front/jdUnionOrder/activity/load?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'jdtoken': $.token, 'source': '01', 'inviteNick': $.inviteNick || ''};
            if ($.joinVenderId) OOO0QQO = {
                ...OOO0QQO, 'shopId': '' + $.joinVenderId
            };
            O0000Q0 = taskPostUrl('/jdUnionOrder/activity/load', OOO0QQO);
            break;
        case 'shopList':
            url = O000Q0Q + '/dm/front/jdUnionOrder/shop/shopList?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {};
            O0000Q0 = taskPostUrl('/jdUnionOrder/shop/shopList', OOO0QQO);
            break;
        case'绑定':
            url = O000Q0Q + '/dm/front/jdUnionOrder/mission/invite?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'missionType': 'shareAct', 'inviterNick': $.inviteNick || ''};
            O0000Q0 = taskPostUrl('/jdUnionOrder/mission/invite', OOO0QQO);
            break;
        case'助力':
            url = O000Q0Q + '/dm/front/jdUnionOrder/mission/completeMission?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'missionType': 'shareAct', 'inviterNick': $.inviteNick || '', 'userId': 10299171};
            O0000Q0 = taskPostUrl('/jdUnionOrder/mission/invite', OOO0QQO);
            break;
        case 'mission':
            url = O000Q0Q + '/dm/front/jdUnionOrder/mission/completeMission?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'missionType': $.missionType, 'userId': 10299171};
            if ($.joinVenderId) OOO0QQO = {
                ...OOO0QQO, 'shopId': $.joinVenderId, 'buyerNick': $.inviteNick || ''
            };
            O0000Q0 = taskPostUrl('/jdUnionOrder/mission/completeMission', OOO0QQO);
            break;
        case 'kaika':
            url = O000Q0Q + '/dm/front/jdUnionOrder/mission/completeMission?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '') + '&bizExtString=&user_id=10299171';
            OOO0QQO = {'missionType': $.missionType, 'shopId': $.joinVenderId, 'inviterNick': $.inviteNick || ''};
            O0000Q0 = taskPostUrl('/jdUnionOrde/mission/completeMission', OOO0QQO);
            break;
        case'抽奖':
            url = O000Q0Q + '/dm/front/jdUnionOrder/scenicSpot/clockIn?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {};
            O0000Q0 = taskPostUrl('/jdUnionOrder/scenicSpot/clockIn', OOO0QQO);
            break;
        case 'followShop':
            url = O000Q0Q + '/dm/front/jdUnionOrder/mission/completeMission?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'actId': $.actId, 'missionType': 'uniteCollectShop'};
            O0000Q0 = taskPostUrl('/jdUnionOrder/mission/completeMission', OOO0QQO);
            break;
        case 'addCart':
            url = O000Q0Q + '/dm/front/jdUnionOrder/addCart?mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'actId': $.actId, 'missionType': 'addCart'};
            O0000Q0 = taskPostUrl('/openCardNew/addCart', OOO0QQO);
            break;
        case 'myAward':
            url = O000Q0Q + '/dm/front/jdUnionOrder/awards/list?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {'pageNo': 1, 'pageSize': 9999};
            O0000Q0 = taskPostUrl('/jdUnionOrder/awards/list', OOO0QQO);
            break;
        case 'missionInviteList':
            url = O000Q0Q + '/dm/front/jdUnionOrder/customer/inviteList?open_id=&mix_nick=' + ($.MixNick || $.MixNicks || '');
            OOO0QQO = {
                'actId': $.actId,
                'userId': 10299171,
                'missionType': 'shareAct',
                'inviteNum': 1,
                'buyerNick': $.MixNick || ''
            };
            O0000Q0 = taskPostUrl('/jdUnionOrder/customer/inviteList', OOO0QQO);
            break;
        default:
            console.log('错误' + OOQ000Q);
    }
    let OOO0000 = getPostRequest(url, O0000Q0, QOQ00QO);
    return new Promise(async QQ0OQ00 => {
        $.post(OOO0000, (OOOQQOQ, QQ0O0OO, Q000OOO) => {
            try {
                if (OOOQQOQ) {
                    if (QQ0O0OO && QQ0O0OO.statusCode && QQ0O0OO.statusCode == 493) {
                        console.log('此ip已被限制，请过10分钟后再执行脚本\n');
                        $.outFlag = true;
                    }
                    console.log('' + $.toStr(OOOQQOQ, OOOQQOQ));
                    console.log(OOQ000Q + ' API请求失败，请检查网路重试');
                } else {
                    dealReturn(OOQ000Q, Q000OOO);
                }
            } catch (O00OO0Q) {
                console.log(O00OO0Q, QQ0O0OO);
            } finally {
                QQ0OQ00();
            }
        });
    });
}

async function dealReturn(O00OO0O, O00Q0O0) {
    let Q0OOOQO = '';
    try {
        if ((O00OO0O != 'accessLogWithAD') || (O00OO0O != 'drawContent')) {
            if (O00Q0O0) {
                Q0OOOQO = JSON.parse(O00Q0O0);
            }
        }
    } catch (O00O0QO) {
        console.log(O00OO0O + ' 执行任务异常');
        console.log(O00Q0O0);
        $.runFalag = false;
    }
    try {
        let OO0OQQ0 = '';
        switch (O00OO0O) {
            case 'isvObfuscator':
                if (typeof Q0OOOQO == 'object') {
                    if (Q0OOOQO.errcode == 0) {
                        if (typeof Q0OOOQO.token != 'undefined') $.token = Q0OOOQO.token;
                    } else if (Q0OOOQO.message) {
                        console.log(O00OO0O + ' ' + (Q0OOOQO.message || ''));
                    } else {
                        console.log(O00Q0O0);
                    }
                } else {
                    console.log(O00Q0O0);
                }
                break;
            case 'shopList':
                if (typeof Q0OOOQO == 'object') {
                    if (Q0OOOQO.success && Q0OOOQO.success === true && Q0OOOQO.data) {
                        if (Q0OOOQO.data.status && (Q0OOOQO.data.status == 200)) {
                            $.openList = Q0OOOQO.data.data || [];
                        }
                    } else if (Q0OOOQO.message) {
                        console.log('' + (Q0OOOQO.message || ''));
                    } else {
                        console.log(O00Q0O0);
                    }
                } else {
                    console.log(O00Q0O0);
                }
                break;
            case 'accessLogWithAD':
            case'drawContent':
                break;
            case 'activity_load':
            case 'kaika':
            case 'mission':
            case 'loadUniteOpenCard':
            case 'setMixNick':
            case 'uniteOpenCardOne':
            case 'checkOpenCard':
            case 'followShop':
            case 'addCart':
            case 'myAward':
            case 'missionInviteList':
            case'抽奖':
            case'绑定':
            case'助力':
            case'specialSign':
                OO0OQQ0 = '';
                if (O00OO0O == 'followShop') OO0OQQ0 = '关注';
                if (O00OO0O == 'addCart') OO0OQQ0 = '加购';
                if (typeof Q0OOOQO == 'object') {
                    if (Q0OOOQO.success && (Q0OOOQO.success === true) && Q0OOOQO.data) {
                        if (Q0OOOQO.data.status && (Q0OOOQO.data.status == 200)) {
                            Q0OOOQO = Q0OOOQO.data;
                            if ((O00OO0O != 'setMixNick') && (Q0OOOQO.msg || Q0OOOQO.data.isOpenCard || Q0OOOQO.data.remark)) console.log('' + (OO0OQQ0 && (OO0OQQ0 + ':') || '') + (Q0OOOQO.msg || Q0OOOQO.data.isOpenCard || Q0OOOQO.data.remark || ''));
                            if (O00OO0O == 'activity_load') {
                                if (Q0OOOQO.data) {
                                    $.endTime = Q0OOOQO.data.cusActivity.endTime || 0;
                                    $.MixNick = Q0OOOQO.data.missionCustomer.buyerNick || '';
                                    $.usedChance = Q0OOOQO.data.missionCustomer.remainChance || 0;
                                    $.hasCollectShop = Q0OOOQO.data.missionCustomer.hasCollectShop || 0;
                                }
                            } else if (O00OO0O == 'mission') {
                                if (Q0OOOQO.data.remark.indexOf('赶紧去开卡吧') > -1) {
                                    $.open = true;
                                } else {
                                    $.open = false;
                                }
                            } else if (O00OO0O == 'uniteOpenCardOne') {
                                $.uniteOpenCar = Q0OOOQO.msg || Q0OOOQO.data.msg || '';
                            } else if (O00OO0O == 'myAward') {
                                console.log('我的奖品：');
                                let OOO0OQQ = 0;
                                let QOO00O0 = 0;
                                for (let OOO0OQO in Q0OOOQO.data.list || []) {
                                    let O00OQ0Q = Q0OOOQO.data.list[OOO0OQO];
                                    QOO00O0 += Number(O00OQ0Q.awardDes);
                                }
                                if (QOO00O0 > 0) console.log('共获得' + QOO00O0 + '京豆\n无法判断奖励是否为邀请奖励，所以直接显示获得多少豆\n');
                            } else if (O00OO0O == 'missionInviteList') {
                                console.log('邀请人数(' + Q0OOOQO.data.inviteNum + ')');
                            }
                        } else if (Q0OOOQO.data.msg) {
                            if (Q0OOOQO.errorMessage.indexOf('活动未开始') > -1) {
                                $.activityEnd = true;
                            }
                            console.log((OO0OQQ0 || O00OO0O) + ' ' + (Q0OOOQO.data.msg || ''));
                        } else if (Q0OOOQO.errorMessage) {
                            if (Q0OOOQO.errorMessage.indexOf('火爆') > -1) {
                            }
                            console.log((OO0OQQ0 || O00OO0O) + ' ' + (Q0OOOQO.errorMessage || ''));
                        } else {
                            console.log((OO0OQQ0 || O00OO0O) + ' ' + O00Q0O0);
                        }
                    } else if (Q0OOOQO.errorMessage) {
                        console.log((OO0OQQ0 || O00OO0O) + ' ' + (Q0OOOQO.errorMessage || ''));
                    } else {
                        console.log((OO0OQQ0 || O00OO0O) + ' ' + O00Q0O0);
                    }
                } else {
                    console.log((OO0OQQ0 || O00OO0O) + ' ' + O00Q0O0);
                }
                break;
            default:
                console.log((OO0OQQ0 || O00OO0O) + '-> ' + O00Q0O0);
        }
        if (typeof Q0OOOQO == 'object') {
            if (Q0OOOQO.errorMessage) {
                if (Q0OOOQO.errorMessage.indexOf('火爆') > -1) {
                }
            }
        }
    } catch (OO0OQOQ) {
        console.log(OO0OQOQ);
    }
}

function getPostRequest(Q0OOOQ0, Q0OQQQQ, QQO0Q0Q = 'POST') {
    let QOOO0QQ = {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': cookie,
        'User-Agent': $.UA,
        'X-Requested-With': 'XMLHttpRequest'
    };
    if (Q0OOOQ0.indexOf('https://mpdz6-dz.isvjcloud.com') > -1) {
        QOOO0QQ.Origin = 'https://mpdz6-dz.isvjcloud.com';
        QOOO0QQ['Content-Type'] = 'application/json; charset=utf-8';
        delete QOOO0QQ.Cookie;
    }
    return {'url': Q0OOOQ0, 'method': QQO0Q0Q, 'headers': QOOO0QQ, 'body': Q0OQQQQ, 'timeout': 60000};
}

function taskPostUrl(Q00OQO0, OQO0OQ0) {
    const O000Q00 = {
        'jsonRpc': '2.0', 'params': {
            'commonParameter': {'m': 'POST', 'timestamp': Date.now(), 'userId': $.userId}, 'admJson': {
                'actId': $.actId, 'userId': $.userId, ...OQO0OQ0, 'method': Q00OQO0, 'buyerNick': $.MixNick || ''
            }
        }
    };
    if (Q00OQO0.indexOf('missionInviteList') > -1) {
        delete O000Q00.params.admJson.actId;
    }
    return $.toStr(O000Q00, O000Q00);
}

async function getUA() {
    $.UA = 'jdapp;iPhone;10.1.4;13.1.2;' + randomString(40) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(O0000OO) {
    O0000OO = O0000OO || 32;
    let QOO00OQ = 'abcdef0123456789', QOO0Q00 = QOO00OQ.length, QOO00OO = '';
    for (i = 0; i < O0000OO; i++) QOO00OO += QOO00OQ.charAt(Math.floor(Math.random() * QOO0Q00));
    return QOO00OO;
}

function jsonParse(OQOQ00O) {
    if (typeof OQOQ00O == 'string') {
        try {
            return JSON.parse(OQOQ00O);
        } catch (OO0O00O) {
            console.log(OO0O00O);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
}

async function joinShop() {
    if (!$.joinVenderId) return;
    return new Promise(async OO0OQQO => {
        $.errorJoinShop = '活动太火爆，请稍后再试';
        let QQOO0Q0 = '';
        if ($.shopactivityId) QQOO0Q0 = ',"activityId":' + $.shopactivityId;
        let QQQQ0QO = '{"venderId":"' + $.joinVenderId + '","shopId":"' + $.joinVenderId + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + QQOO0Q0 + ',"channel":406}';
        let OQOQQQQ = await geth5st();
        const Q0OQOQO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + QQQQ0QO + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + OQOQQQQ,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(Q0OQOQO, async (QQQ0O0Q, Q0OQOQQ, OQOQ000) => {
            try {
                OQOQ000 = OQOQ000 && OQOQ000.match(/jsonp_.*?\((.*?)\);/) && OQOQ000.match(/jsonp_.*?\((.*?)\);/)[1] || OQOQ000;
                let OO0OQO0 = $.toObj(OQOQ000, OQOQ000);
                if (OO0OQO0 && typeof OO0OQO0 == 'object') {
                    if (OO0OQO0 && (OO0OQO0.success === true)) {
                        console.log(OO0OQO0.message);
                        $.errorJoinShop = OO0OQO0.message;
                        if (OO0OQO0.result && OO0OQO0.result.giftInfo) {
                            for (let OQO0OOO of OO0OQO0.result.giftInfo.giftList) {
                                console.log('入会获得:' + OQO0OOO.discountString + OQO0OOO.prizeName + OQO0OOO.secondLineDesc);
                            }
                        }
                    } else if (OO0OQO0 && (typeof OO0OQO0 == 'object') && OO0OQO0.message) {
                        $.errorJoinShop = OO0OQO0.message;
                        console.log('' + (OO0OQO0.message || ''));
                    } else {
                        console.log(OQOQ000);
                    }
                } else {
                    console.log(OQOQ000);
                }
            } catch (O00O0O0) {
                $.logErr(O00O0O0, Q0OQOQQ);
            } finally {
                OO0OQQO();
            }
        });
    });
}

async function getshopactivityId() {
    return new Promise(async O0OOOOQ => {
        let OO00OOQ = '{"venderId":"' + $.joinVenderId + '","channel":406,"payUpShop":true}';
        let QOOQO0O = await geth5st();
        const O0O0QOO = {
            'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + OO00OOQ + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + QOOQO0O,
            'headers': {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
            }
        };
        $.get(O0O0QOO, async (OO0QOO0, OO0Q00O, OQOO0QQ) => {
            try {
                OQOO0QQ = OQOO0QQ && OQOO0QQ.match(/jsonp_.*?\((.*?)\);/) && OQOO0QQ.match(/jsonp_.*?\((.*?)\);/)[1] || OQOO0QQ;
                let OQQQO0O = $.toObj(OQOO0QQ, OQOO0QQ);
                if (OQQQO0O && (typeof OQQQO0O == 'object')) {
                    if (OQQQO0O && OQQQO0O.success == true) {
                        console.log('入会:' + (OQQQO0O.result.shopMemberCardInfo.venderCardName || ''));
                        $.shopactivityId = OQQQO0O.result.interestsRuleList && OQQQO0O.result.interestsRuleList[0] && OQQQO0O.result.interestsRuleList[0].interestsInfo && OQQQO0O.result.interestsRuleList[0].interestsInfo.activityId || '';
                    }
                } else {
                    console.log(OQOO0QQ);
                }
            } catch (Q0QQQQ0) {
                $.logErr(Q0QQQQ0, OO0Q00O);
            } finally {
                O0OOOOQ();
            }
        });
    });
}

var _0xodb = 'jsjiami.com.v6', _0xodb_ = ['‮_0xodb'],
    _0x3c1b = [_0xodb, 'wqkgAcKeOQ==', 'NBDCnDEf', 'wqhhw7HDi8Ka', 'wrzCuHM/w6Qj', 'wpJyw7PDuMKE', 'E0bCnA==', 'BxbCg8KoSA==', 'QnjDk0Ycw6d1ZsK8w6RawpTDhMK2DMOyZcKvBTpYw4pvP8OyNFnCssO/w5DDjVvDhH3DocKWwpMGUMKVVsK/JDXCvcK9QMOIwqHDpMOXGk/DlAnDkxrDnMO/w5vDn2zCq8O9UsKBw7h3H1JFwp7CgzTCo8KTacOab2DCqcOSw7UZBVLCgWPDo8KoJGbDsMKDBA/Cl8KTwoBsF8OYPcOVwpUSWcOaaGlkwq0AF2tnPcK6w4tme8OcTMKZwrwND8OMLDNCw5TCq8OHw4BZJkzDlBoOwoHCi8KswofCu8KeX8OEwq7DrHsYw7bDn8KnGCECakwjKiTCr8ODRh/CgQ==', 'N8KtRw==', 'LDbCrMKSfQ==', 'w6LDpG1qNA==', 'wpEXUcOjCA==', 'FV7Ch8KGZQ==', 'CWPCmXPCnA==', 'wrg0w4g=', 'YsOYw4oQw7oKAMOowok=', 'AAbCgQwHw6g=', 'w5bDjClaCcO8YcK7', 'JMKpOsO2ayRI', 'WsO5CMKfwq7DnMOJwqE=', 'w40KQnnCnMOYf8OJw4Na', 'PsKnRGvCtjUTZEhE', 'w7QjwrVeScOw', 'JcKgIcOdeA==', 'OMKgX0rCkA==', 'VHjClMOCw4Q1wr7CjQjChHfDrMOKwozDsA==', 'w5bCmMOtwrAXw4Je', 'UHLCjsOsw4wt', 'F8O3VsOmKXXDjDsLJCQ=', 'wqojL8K/L8Ke', 'PlfDgMKmScOr', 'wqZow6nDn8Kwwog=', 'CUzCmH4=', 'wrHDkTw=', 'TMONdMOcwq0=', 'KgzCnQYSw7Q=', 'OcK7N8K8w7w=', 'wro5I8KvOsKY', 'wro+w5FlHFg=', 'c8OmMcKhwoM=', 'WQQTw6Fo', 'xjsjiaNUmi.xucoLOwqm.vBle6VKE=='];
if (function (OQOO0QO, QQQ00OQ, QQQ0Q00) {
    function OO0QQQO(QQQ0Q0O, Q0QQQQO, OQQQO00, QQQ00Q0, Q0QQ000, Q0QQQQQ) {
        Q0QQQQO = (Q0QQQQO >> 0x8), Q0QQ000 = 'po';
        var OO00OQ0 = 'shift', QQQOO00 = 'push', Q0QQQQQ = '‮';
        if (Q0QQQQO < QQQ0Q0O) {
            while (--QQQ0Q0O) {
                QQQ00Q0 = OQOO0QO[OO00OQ0]();
                if ((Q0QQQQO === QQQ0Q0O) && (Q0QQQQQ === '‮') && (Q0QQQQQ.length === 1)) {
                    Q0QQQQO = QQQ00Q0, OQQQO00 = OQOO0QO[Q0QQ000 + 'p']();
                } else if (Q0QQQQO && OQQQO00.replace(/[xNUxuLOwqBleVKE=]/g, '') === Q0QQQQO) {
                    OQOO0QO[QQQOO00](QQQ00Q0);
                }
            }
            OQOO0QO[QQQOO00](OQOO0QO[OO00OQ0]());
        }
        return 968710;
    };
    return OO0QQQO(++QQQ00OQ, QQQ0Q00) >> QQQ00OQ ^ QQQ0Q00;
}(_0x3c1b, 411, 105216), _0x3c1b) {
    _0xodb_ = _0x3c1b.length ^ 0x19b;
}
;

function _0x80d0(Q0Q0OOQ, QO0OQQ0) {
    Q0Q0OOQ = ~~'0x'.concat(Q0Q0OOQ.slice(1));
    var O0O0OOO = _0x3c1b[Q0Q0OOQ];
    if (_0x80d0.ZHvfIH === undefined) {
        (function () {
            var QO0000O = (typeof window !== 'undefined') ? window : (typeof process === 'object') && (typeof require === 'function') && (typeof global === 'object') ? global : this;
            var OO0QQO0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            QO0000O.atob || (QO0000O.atob = function (O0OQQQO) {
                var QQQOQ0O = String(O0OQQQO).replace(/=+$/, '');
                for (var QQQO0Q0 = 0, O0OQQQQ, OQQ00QO, O0OQ000 = 0, OQQ00QQ = ''; OQQ00QO = QQQOQ0O.charAt(O0OQ000++); ~OQQ00QO && (O0OQQQQ = (QQQO0Q0 % 4) ? (O0OQQQQ * 64 + OQQ00QO) : OQQ00QO, QQQO0Q0++ % 4) ? OQQ00QQ += String.fromCharCode(0xff & O0OQQQQ >> (-2 * QQQO0Q0 & 0x6)) : 0) {
                    OQQ00QO = OO0QQO0.indexOf(OQQ00QO);
                }
                return OQQ00QQ;
            });
        }());

        function QQQOQ0Q(O0QQOO0, QO0OQQ0) {
            var QO0QQOO = [], O0QQOOQ = 0, QO0OOQO, QO0OOQQ = '', OO00QQ0 = '';
            O0QQOO0 = atob(O0QQOO0);
            for (var QO0QQOQ = 0, O0O000O = O0QQOO0.length; QO0QQOQ < O0O000O; QO0QQOQ++) {
                OO00QQ0 += ('%' + ('00' + O0QQOO0.charCodeAt(QO0QQOQ).toString(16)).slice(-2));
            }
            O0QQOO0 = decodeURIComponent(OO00QQ0);
            for (var O0O0OO0 = 0; O0O0OO0 < 256; O0O0OO0++) {
                QO0QQOO[O0O0OO0] = O0O0OO0;
            }
            for (O0O0OO0 = 0; O0O0OO0 < 256; O0O0OO0++) {
                O0QQOOQ = (O0QQOOQ + QO0QQOO[O0O0OO0] + QO0OQQ0.charCodeAt(O0O0OO0 % QO0OQQ0.length) % 256);
                QO0OOQO = QO0QQOO[O0O0OO0];
                QO0QQOO[O0O0OO0] = QO0QQOO[O0QQOOQ];
                QO0QQOO[O0QQOOQ] = QO0OOQO;
            }
            O0O0OO0 = 0;
            O0QQOOQ = 0;
            for (var Q0QQOQQ = 0; Q0QQOQQ < O0QQOO0.length; Q0QQOQQ++) {
                O0O0OO0 = (O0O0OO0 + 1 % 256);
                O0QQOOQ = (O0QQOOQ + QO0QQOO[O0O0OO0] % 256);
                QO0OOQO = QO0QQOO[O0O0OO0];
                QO0QQOO[O0O0OO0] = QO0QQOO[O0QQOOQ];
                QO0QQOO[O0QQOOQ] = QO0OOQO;
                QO0OOQQ += String.fromCharCode(O0QQOO0.charCodeAt(Q0QQOQQ) ^ QO0QQOO[QO0QQOO[O0O0OO0] + QO0QQOO[O0QQOOQ] % 256]);
            }
            return QO0OOQQ;
        }

        _0x80d0.uZkhLK = QQQOQ0Q;
        _0x80d0.PgBxtv = {};
        _0x80d0.ZHvfIH = true;
    }
    var O0Q0OQQ = _0x80d0.PgBxtv[Q0Q0OOQ];
    if (O0Q0OQQ === undefined) {
        if (_0x80d0.mzwOwg === undefined) {
            _0x80d0.mzwOwg = true;
        }
        O0O0OOO = _0x80d0.uZkhLK(O0O0OOO, QO0OQQ0);
        _0x80d0.PgBxtv[Q0Q0OOQ] = O0O0OOO;
    } else {
        O0O0OOO = O0Q0OQQ;
    }
    return O0O0OOO;
};

function generateFp() {
    var O0O0QQQ = {
        'ryoPy': '0123456789', 'mfvwK': function (OO0QQQ0, O0O0000) {
            return OO0QQQ0 | O0O0000;
        }, 'WutDU': function (Q0QQ00O, Q0OOOOQ) {
            return Q0QQ00O + Q0OOOOQ;
        }
    };
    let Q0QQOO0 = O0O0QQQ[_0x80d0('‮0', 'wj)i')];
    let Q0QQ00Q = 13;
    let Q0OOOOO = '';
    for (; Q0QQ00Q--;) Q0OOOOO += Q0QQOO0[O0O0QQQ[_0x80d0('‮1', 'Z*hR')](Math.random() * Q0QQOO0[_0x80d0('‮2', '3@Q*')], 0)];
    return O0O0QQQ[_0x80d0('‮3', 'Z*hR')](Q0OOOOO, Date[_0x80d0('‮4', 'Da%Y')]())[_0x80d0('‮5', 'LwWi')](0, 16);
}

function geth5st() {
    var QO0OOOQ = {
        'XLFYP': 'yyyyMMddhhmmssSSS',
        'ERdzy': ';ef79a;tk02w92631bfa18nhD4ubf3QfNiU8ED2PI270ygsn+vamuBQh0lVE6v7UAwckz3s2OtlFEfth5LbQdWOPNvPEYHuU2Tw;b01c7c4f99a8ffb2b5e69282f45a14e1b87c90a96217006311ae4cfdcbd1a932;3.0;',
        'eaFvs': _0x80d0('‮6', '@hXf'),
        'NqklQ': function (OO00OO0, OO0000Q) {
            return OO00OO0(OO0000Q);
        },
        'DqrqH': function (O0O0QQ0, Q0QQOOO) {
            return O0O0QQ0 + Q0QQOOO;
        },
        'GEDpa': function (Q0OOOO0, Q0QQOOQ) {
            return Q0OOOO0 + Q0QQOOQ;
        },
        'tJryJ': function (OQQOO0Q, QQQ00O0) {
            return OQQOO0Q + QQQ00O0;
        }
    };
    let Q0OO00O = Date[_0x80d0('‮7', '3B2S')]();
    let OQQQ0O0 = generateFp();
    let QO00QOO = new Date(Q0OO00O).Format(QO0OOOQ[_0x80d0('‫8', 'LwWi')]);
    let OQQOO0O = [QO0OOOQ.ERdzy, QO0OOOQ[_0x80d0('‮9', 'SCQF')]];
    let OO0OOQQ = OQQOO0O[random(0, OQQOO0O.length)];
    return QO0OOOQ[_0x80d0('‫a', '%HoM')](encodeURIComponent, QO0OOOQ.DqrqH(QO0OOOQ[_0x80d0('‫b', 'vWDW')](QO0OOOQ[_0x80d0('‮c', 'Da%Y')](QO00QOO, ';') + OQQQ0O0, OO0OOQQ), Date[_0x80d0('‮d', '7]Bn')]()));
}

Date[_0x80d0('‫e', 'gM9$')][_0x80d0('‫f', 'wj)i')] = function (OO0QQOO) {
    var QO0QOOO = {
        'wGAVl': function (OQ0O0QQ, O0QQQOQ) {
            return OQ0O0QQ / O0QQQOQ;
        }, 'aborC': function (OOQOQQ0, QO00OQO) {
            return OOQOQQ0 + QO00OQO;
        }, 'khvyA': function (Q0QOQOQ, O0Q0QQO) {
            return Q0QOQOQ === O0Q0QQO;
        }, 'RkhHN': function (Q0QOQOO, O0Q0QQQ) {
            return Q0QOQOO == O0Q0QQQ;
        }
    };
    var QO00OQQ, O0QOOQQ = this, OOQOQOQ = OO0QQOO, QO0Q00O = {
        'M+': (O0QOOQQ[_0x80d0('‮10', 'lEbY')]() + 1),
        'd+': O0QOOQQ.getDate(),
        'D+': O0QOOQQ[_0x80d0('‮11', 'm]Ir')](),
        'h+': O0QOOQQ.getHours(),
        'H+': O0QOOQQ[_0x80d0('‫12', 'hLmb')](),
        'm+': O0QOOQQ[_0x80d0('‫13', 'y[mS')](),
        's+': O0QOOQQ[_0x80d0('‮14', '3B2S')](),
        'w+': O0QOOQQ[_0x80d0('‫15', '$n0%')](),
        'q+': Math[_0x80d0('‮16', 'm]Ir')](QO0QOOO.wGAVl(QO0QOOO[_0x80d0('‮17', '3B2S')](O0QOOQQ.getMonth(), 3), 3)),
        'S+': O0QOOQQ[_0x80d0('‫18', '3aAN')]()
    };
    /(y+)/i.test(OOQOQOQ) && (OOQOQOQ = OOQOQOQ[_0x80d0('‫19', 'bosv')](RegExp.$1, ''[_0x80d0('‮1a', '3aAN')](O0QOOQQ[_0x80d0('‫1b', 'n1@B')]())[_0x80d0('‮1c', 'ctu&')](4 - RegExp.$1[_0x80d0('‫1d', 'T8*w')])));
    for (var QQ00O0O in QO0Q00O) {
        if (new RegExp('('[_0x80d0('‮1e', 'Z*hR')](QQ00O0O, ')'))[_0x80d0('‮1f', 'Da%Y')](OOQOQOQ)) {
            var QO0Q00Q, QO0QOO0 = QO0QOOO.khvyA('S+', QQ00O0O) ? _0x80d0('‫20', 'dvcH') : '00';
            OOQOQOQ = OOQOQOQ.replace(RegExp.$1, QO0QOOO[_0x80d0('‫21', 'Jp@*')](1, RegExp.$1[_0x80d0('‫22', 'wj)i')]) ? QO0Q00O[QQ00O0O] : QO0QOOO[_0x80d0('‫23', 'JH9X')](''.concat(QO0QOO0), QO0Q00O[QQ00O0O]).substr(''[_0x80d0('‮24', 'ctu&')](QO0Q00O[QQ00O0O])[_0x80d0('‫25', '7]Bn')]));
        }
    }
    return OOQOQOQ;
};

function random(OQQO0OQ, OQQO0OO) {
    var QO0QQQQ = {
        'NzMvB': function (QO0Q000, OOQOQO0) {
            return QO0Q000 + OOQOQO0;
        }, 'pvLRb': function (QQ0QQ0O, OOQ0QQQ) {
            return QQ0QQ0O * OOQ0QQQ;
        }, 'KNgAC': function (QQ0Q0Q0, QOQOQQ0) {
            return QQ0Q0Q0 - QOQOQQ0;
        }
    };
    return QO0QQQQ[_0x80d0('‫26', 'hLmb')](Math[_0x80d0('‫27', 'eShm')](QO0QQQQ[_0x80d0('‮28', 'ctu&')](Math.random(), QO0QQQQ.KNgAC(OQQO0OO, OQQO0OQ))), OQQO0OQ);
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