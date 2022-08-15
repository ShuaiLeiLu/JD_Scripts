/*
更新时间：2022-8-8
皮卡车

# 变量
export PKC_TXGZYL=""

cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#PKC-特效关注有礼
1 1 1 1 * jd_txgzyl.js, tag=PKC-特效关注有礼, enabled=true


*/
const $ = new Env('PKC关注有礼-特效');
let cookiesArr = [], cookie = '', notify, allMessage = '';
const logs = 0;
$.message = '';
let Signz = '';
const timeout = 15000;
sleeptime = 1500;
$.countBean = {};
let isGetbody = typeof $request !== 'undefined';
!(async () => {
    if (isGetbody) {
        TG_BOT_TOKEN = $.getdata('TG_BOT_TOKEN') || '';
        TG_USER_ID = $.getdata('TG_USER_ID') || '';
        TG_API_HOST = $.getdata('TG_API_HOST') || 'api.telegram.org';
        TG_PROXY_HOST = $.getdata('TG_PROXY_HOST') || '';
        TG_PROXY_PORT = $.getdata('TG_PROXY_PORT') || '';
        TG_PROXY_AUTH = $.getdata('TG_PROXY_AUTH') || '';
        await GetBody();
        $.done();
    }
    await requireConfig();
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
        return;
    }
    for (let Q000Q0 = 0; Q000Q0 < $.activityIdArr.length; Q000Q0++) {
        label = 0;
        for (let OOOO0O = 0; OOOO0O < cookiesArr.length; OOOO0O++) {
            if (cookiesArr[OOOO0O]) {
                cookie = cookiesArr[OOOO0O];
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
                $.index = OOOO0O + 1;
                $.isLogin = true;
                $.nickName = '';
                nickname = '' + ($.nickName || $.UserName);
                console.log('\n开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '\n');
                if (!$.isLogin) {
                    $.msg($.name, '【提示】cookie已失效', '京东账号' + $.index + ' ' + ($.nickName || $.UserName) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
                    if ($.isNode()) {
                        await notify.sendNotify($.name + 'cookie已失效 - ' + $.UserName, '京东账号' + $.index + ' ' + $.UserName + '\n请重新登录获取cookie');
                    }
                    continue;
                }
                activityId = $.activityIdArr[Q000Q0];
                await getToken();
                await activity(sleeptime);
                await activityContent(sleeptime);
                if (label === 4) {
                    break;
                }
                await getMyPing(sleeptime);
                await draw(sleeptime);
                if ($.index != cookiesArr.length) {
                    await $.wait(parseInt(Math.random() * 5000 + 100, 10));
                }
            }
        }
    }
    if ($.countBean) {
        $.message += '\n-----------【PKC特效关注有礼】-----------\n';
        for (var OO0QOO in $.countBean) {
            $.message += '【账号】' + OO0QOO + ' ' + $.countBean[OO0QOO] + '\n';
        }
    }
    if ($.isNode()) {
        console.log($.name + '\n' + $.message);
        await notify.sendNotify($.name, $.message);
    } else {
        $.msg($.name, '', $.message);
    }
})().catch(OOOO0Q => {
    $.log('', '❌ ' + $.name + ', 失败! 原因: ' + OOOO0Q + '!', '');
}).finally(() => {
    $.done();
});

async function GetBody() {
    if ($request && ($request.url.indexOf('wxShopGift/draw') >= 0)) {
        if (typeof $request.body !== 'undefined') {
            modifiedBody = $request.body;
            const OOQ0OO = modifiedBody.match(/activityId=(.*?)&/)[1];
            ;
            if (OOQ0OO) $.setdata(OOQ0OO, 'PKC_TXGZYL');
            $.log('[' + $.name + '] PKC特效关注有礼店铺id✅: 成功, export PKC_TXGZYL=\'' + OOQ0OO + '\'');
            $.msg($.name, '获取特效关注有礼店铺id: 成功🎉', 'export PKC_TXGZYL="' + OOQ0OO + '"');
            await sendNotify('#PKC皮卡车\nexport PKC_TXGZYL="' + OOQ0OO + '" #PKC特效关注有礼店铺id', '');
        }
        ;
        $done();
    }
}

async function activity(Q00QOO = 500) {
    return new Promise(OQQOQO => {
        setTimeout(() => {
            let OQOQ0O = {
                'url': 'https://lzkj-isv.isvjcloud.com/wxShopGift/activity?activityId=' + activityId + '&sid=' + randomString(32, 'xx') + '&un_area=' + randomString(2, 'int') + '_' + randomString(4, 'int') + '_' + randomString(4, 'int') + '_' + randomString(5, 'int'),
                'headers': {
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Cookie': '',
                    'Connection': 'keep-alive',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'Host': 'lzkj-isv.isvjcloud.com',
                    'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001236) NetType/WIFI Language/zh_CN',
                    'Accept-Language': 'zh-CN,zh-Hans;q=0.9'
                },
                'body': ''
            };
            $.post(OQOQ0O, async (OQO000, OQOQQO, OQOQ0Q) => {
                try {
                    rep_cookies = OQOQQO.headers['set-cookie'];
                    r_cookie = '';
                    for (var Q0O0QQ in rep_cookies) {
                        r_cookie += rep_cookies[Q0O0QQ].split(' ')[0];
                    }
                } catch (QQ0QOO) {
                    $.logErr(QQ0QOO, OQOQQO);
                } finally {
                    OQQOQO();
                }
            });
        }, Q00QOO);
    });
}

async function getSimpleActInfoVo(QQ00O0 = 500) {
    return new Promise(QQOOOQ => {
        setTimeout(() => {
            let QQO000 = {
                'url': 'https://lzkj-isv.isvjcloud.com/customer/getSimpleActInfoVo', 'headers': {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Connection': 'keep-alive',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'https://lzkj-isv.isvjcloud.com',
                    'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001236) NetType/WIFI Language/zh_CN',
                    'Cookie': ('IsvToken=' + token + ';' + cookie + r_cookie),
                    'Host': 'lzkj-isv.isvjcloud.com',
                    'Referer': 'https://lzkj-isv.isvjcloud.com/wxShopGift/activity?activityId=' + activityId + '&sid=' + randomString(32, 'xx') + 'w&un_area=' + randomString(2, 'int') + '_' + randomString(4, 'int') + '_' + randomString(4, 'int') + '_' + randomString(5, 'int'),
                    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                    'Accept': 'application/json'
                }, 'body': 'activityId=' + activityId
            };
            $.post(QQO000, async (Q0OO0O, Q0Q0O0, Q0QQOO) => {
                try {
                    $.data = JSON.parse(Q0QQOO);
                    rep_cookies = Q0Q0O0.headers['set-cookie'];
                    r_cookie = '';
                    for (var Q0OOQQ in rep_cookies) {
                        r_cookie += rep_cookies[Q0OOQQ].split(' ')[0];
                    }
                    if ($.data.result) {
                        jdActivityId = $.data.data.jdActivityId;
                        venderId = $.data.data.venderId;
                        shopId = $.data.data.shopId;
                    }
                    console.log(r_cookie);
                    console.log(jdActivityId);
                    console.log(venderId);
                    console.log(shopId);
                } catch (Q0OO0Q) {
                    $.logErr(Q0OO0Q, Q0Q0O0);
                } finally {
                    QQOOOQ();
                }
            });
        }, QQ00O0);
    });
}

async function activityContent(OQOO0O = 500) {
    return new Promise(OQOO00 => {
        setTimeout(() => {
            let Q0QOO0 = {
                'url': 'https://lzkj-isv.isvjcloud.com/wxShopGift/activityContent', 'headers': {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Connection': 'keep-alive',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'https://lzkj-isv.isvjcloud.com',
                    'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001236) NetType/WIFI Language/zh_CN',
                    'Cookie': cookie,
                    'Host': 'lzkj-isv.isvjcloud.com',
                    'Referer': '',
                    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                    'Accept': 'application/json'
                }, 'body': 'activityId=' + activityId + '&buyerPin=' + randomString(64)
            };
            userId = '';
            $.post(Q0QOO0, async (Q0Q0QQ, Q0Q00Q, Q0Q0QO) => {
                try {
                    $.data = JSON.parse(Q0Q0QO);
                    if ($.data.result) {
                        userId = $.data.data.userId;
                        endTime = $.data.data.endTime;
                        list = $.data.data.list;
                        lp = '';
                        for (var OQO0QO in list) {
                            lp += (list[OQO0QO].takeNum + list[OQO0QO].type + ' ');
                        }
                        if (lp) {
                            lp_list = lp.replace('jd', '京豆').replace('jf', '积分').replace('dq', '东券');
                            console.log(($.nickName || $.UserName) + ' 哇！快看，特效真美美美，biubiu~');
                        }
                        if (Math.round(new Date().getTime()) > endTime) {
                            console.log('活动已结束');
                            label = 4;
                        }
                        if (list.length === 0) {
                            console.log('礼品已领完');
                            label = 4;
                        }
                    }
                } catch (OQO00Q) {
                    $.logErr(OQO00Q, Q0Q00Q);
                } finally {
                    OQOO00();
                }
            });
        }, OQOO0O);
    });
}

async function getToken() {
    let OQ00OQO = await getSign('isvObfuscator', {'id': '', 'url': 'https://lzdz1-isv.isvjcloud.com'});
    let Q000QQ0 = {
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
        'body': '' + Signz
    };
    return new Promise(OQ00OQQ => {
        $.post(Q000QQ0, (OOQQ00Q, OOOOQQQ, Q000QOQ) => {
            try {
                if (OOQQ00Q) {
                    $.log(OOQQ00Q);
                } else {
                    if (Q000QOQ) {
                        Q000QOQ = JSON.parse(Q000QOQ);
                        if (Q000QOQ.code === '0') {
                            token = Q000QOQ.token;
                        }
                    } else {
                        $.log('京东返回了空数据');
                    }
                }
            } catch (OOQQ00O) {
                $.log(OOQQ00O);
            } finally {
                OQ00OQQ();
            }
        });
    });
}

function getSign(QQ000OO, QQ00Q00) {
    let QQ000OQ = {'fn': QQ000OO, 'body': JSON.stringify(QQ00Q00)};
    let O000O0Q = {
        'url': 'https://api.nolanstore.top/sign',
        'body': JSON.stringify(QQ000OQ),
        'headers': {'Content-Type': 'application/json'},
        'timeout': 30000
    };
    return new Promise(async QOQ0Q0Q => {
        $.post(O000O0Q, (OOQQQQQ, QOQ0Q0O, QQ000OQ) => {
            try {
                if (OOQQQQQ) {
                    console.log('' + JSON.stringify(OOQQQQQ));
                    console.log($.name + ' getSign API请求失败，请检查网路重试');
                } else {
                    QQ000OQ = JSON.parse(QQ000OQ);
                    if ((typeof QQ000OQ === 'object') && QQ000OQ && QQ000OQ.body) {
                        if (QQ000OQ.body) Signz = QQ000OQ.body || '';
                    } else {
                        console.log('获取服务失败~~');
                    }
                }
            } catch (QQ0OQ0O) {
                $.logErr(QQ0OQ0O, QOQ0Q0O);
            } finally {
                QOQ0Q0Q(QQ000OQ);
            }
        });
    });
};

async function getMyPing(Q000QO0 = 500) {
    return new Promise(Q00QQQQ => {
        setTimeout(() => {
            let O0QOQOO = {
                'url': 'https://lzkj-isv.isvjcloud.com/customer/getMyPing', 'headers': {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Connection': 'keep-alive',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'https://lzkj-isv.isvjcloud.com',
                    'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001236) NetType/WIFI Language/zh_CN',
                    'Cookie': ('IsvToken=' + token + ';' + cookie) + r_cookie,
                    'Host': 'lzkj-isv.isvjcloud.com',
                    'Referer': 'https://lzkj-isv.isvjcloud.com/wxShopGift/activity?activityId=' + activityId + '&sid=' + randomString(32, 'xx') + 'w&un_area=' + randomString(2, 'int') + '_' + randomString(4, 'int') + '_' + randomString(4, 'int') + '_' + randomString(5, 'int'),
                    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                    'Accept': 'application/json'
                }, 'body': 'userId=' + userId + '&token=' + token + '&fromType=APP_shopGift'
            };
            username = nickname;
            pin = '';
            $.post(O0QOQOO, async (O0000QQ, O0000QO, OOO0QQ0) => {
                try {
                    if (O0000QQ) {
                        $.log('' + JSON.stringify(O0000QQ));
                    } else {
                        $.data = JSON.parse(OOO0QQ0);
                        rep_cookies = O0000QO.headers['set-cookie'];
                        r_cookie = '';
                        for (var O00Q0OO in rep_cookies) {
                            r_cookie += rep_cookies[O00Q0OO].split(' ')[0];
                        }
                        if ($.data.result) {
                            username = $.data.data.nickname;
                            pin = encodeURIComponent($.data.data.secretPin);
                        } else {
                            console.log('' + $.data.errorMessage);
                        }
                    }
                } catch (OOOOOQ0) {
                    $.logErr(OOOOOQ0, O0000QO);
                } finally {
                    Q00QQQQ();
                }
            });
        }, Q000QO0);
    });
}

async function draw(Q00OQQQ = 500) {
    return new Promise(O00OO0O => {
        setTimeout(() => {
            let OOO0QQQ = {
                'url': 'https://lzkj-isv.isvjcloud.com/wxShopGift/draw', 'headers': {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Connection': 'keep-alive',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'https://lzkj-isv.isvjcloud.com',
                    'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.18(0x18001236) NetType/WIFI Language/zh_CN',
                    'Cookie': ('IsvToken=' + token + ';' + cookie + r_cookie),
                    'Host': 'lzkj-isv.isvjcloud.com',
                    'Referer': 'https://lzkj-isv.isvjcloud.com/wxShopGift/activity?activityId=' + activityId + '&sid=' + randomString(32, 'xx') + 'w&un_area=' + randomString(2, 'int') + '_' + randomString(4, 'int') + '_' + randomString(4, 'int') + '_' + randomString(5, 'int'),
                    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                    'Accept': 'application/json'
                }, 'body': 'activityId=' + activityId + '&buyerPin=' + pin + '&hasFollow=false&accessType=app'
            };
            $.post(OOO0QQQ, async (Q00O00O, O000Q0O, QOQ0O0O) => {
                try {
                    if (Q00O00O) {
                        $.log('' + JSON.stringify(Q00O00O));
                    } else {
                        $.data = JSON.parse(QOQ0O0O);
                        if ($.data.result) {
                            console.log('	Yes, 关注成功领取 ' + lp_list);
                            getlp = lp_list;
                        } else {
                            console.log('	' + $.data.errorMessage);
                            getlp = $.data.errorMessage;
                        }
                        if ($.countBean[username]) {
                            $.countBean[username] += getlp;
                        } else {
                            $.countBean[username] = getlp;
                        }
                    }
                    console.log('*****************************************');
                } catch (QOQQQ00) {
                    $.logErr(QOQQQ00, O000Q0O);
                } finally {
                    O00OO0O();
                }
            });
        }, Q00OQQQ);
    });
}

function randomString(O00Q0QQ, QOQQ0OO = 'hh') {
    O00Q0QQ = (O00Q0QQ || 32);
    if (QOQQ0OO === 'hh') {
        var QQOQO00 = 'ABCDEFGHJKMNPQRSTWXYZoOLlabcde9gqfhijkmnVvprstwxyz234Uu5I1678';
    } else if (QOQQ0OO === 'xx') {
        var QQOQO00 = 'abcdefhijkmnprstwxyzolgqvu0192345678';
    } else if (QOQQ0OO === 'dx') {
        var QQOQO00 = 'ABCDEFGHJKMNPQRSTWXYZUVILO0192345678';
    } else if (QOQQ0OO === 'int') {
        var QQOQO00 = '0192345678';
    }
    var Q000QQQ = QQOQO00.length;
    var O00QQ0Q = '';
    for (i = 0; i < O00Q0QQ; i++) {
        O00QQ0Q += QQOQO00.charAt(Math.floor(Math.random() * Q000QQQ));
    }
    return O00QQ0Q;
};

function get_times(O00QQ0O = 'ms') {
    let OOO0QOQ = Math.round(new Date().getTime());
    let Q00QQO0 = Math.floor(OOO0QOQ / 1000);
    if (O00QQ0O === 'ms') {
        return OOO0QOQ;
    } else if (O00QQ0O === 'ss') {
        return Q00QQO0;
    } else {
        return '';
    }
}

function tgBotNotify(OOO0QOO, QQOQO0O) {
    return new Promise(OO0OQQ0 => {
        if (TG_BOT_TOKEN && TG_USER_ID) {
            var OQO0OQQ = {'chat_id': TG_USER_ID, 'text': (OOO0QOO + '\n') + QQOQO0O, 'disable_web_page_preview': true};
            const Q0O0QQO = {
                'url': 'https://' + TG_API_HOST + '/bot' + TG_BOT_TOKEN + '/sendMessage',
                'body': JSON.stringify(OQO0OQQ),
                'headers': {'Content-Type': 'application/json'},
                'timeout': timeout
            };
            if (TG_PROXY_HOST && TG_PROXY_PORT) {
                const OQO0OQO = require('tunnel');
                const O0OQO0O = {
                    'https': OQO0OQO.httpsOverHttp({
                        'proxy': {
                            'host': TG_PROXY_HOST,
                            'port': (TG_PROXY_PORT * 1),
                            'proxyAuth': TG_PROXY_AUTH
                        }
                    })
                };
                Object.assign(Q0O0QQO, {'agent': O0OQO0O});
            }
            $.post(Q0O0QQO, (Q0O0QQ0, QQOOO0O, OOO0OQQ) => {
                try {
                    if (Q0O0QQ0) {
                        console.log('telegram发送通知消息失败！！\n');
                        console.log(Q0O0QQ0);
                    } else {
                        OOO0OQQ = JSON.parse(OOO0OQQ);
                        if (OOO0OQQ.ok) {
                            console.log('Telegram发送通知消息成功🎉。\n');
                            $.msg('【PKC提示】', '[' + $.name + ']变量已推送到监控群组【' + OOO0OQQ.result.chat.title + '】\n');
                        } else if (OOO0OQQ.error_code === 400) {
                            console.log('请主动给bot发送一条消息并检查接收用户ID是否正确。\n');
                        } else if (OOO0OQQ.error_code === 401) {
                            console.log('Telegram bot token 填写错误。\n');
                        }
                    }
                } catch (O00OQ0Q) {
                    $.logErr(O00OQ0Q, QQOOO0O);
                } finally {
                    OO0OQQ0(OOO0OQQ);
                }
            });
        } else {
            console.log('可提供TG机器人推送变量到监控\nboxjs订阅：https://gitee.com/curtinlv/Curtin/raw/master/Boxjs/curtin.boxjs.json\n');
            $.msg('【PKC提示】', '可提供TG机器人推送变量到指定监控群组\nboxjs订阅：https://gitee.com/curtinlv/Curtin/raw/master/Boxjs/curtin.boxjs.json\n');
            OO0OQQ0();
        }
    });
}

async function sendNotify(Q0OQQQO, O00OQ0O) {
    await Promise.all([tgBotNotify(Q0OQQQO, O00OQ0O)]);
}

function requireConfig() {
    return new Promise(QQOOO0Q => {
        notify = $.isNode() ? require('./sendNotify') : '';
        const O0000OO = $.isNode() ? require('./jdCookie.js') : '';
        const Q0O0OOQ = $.isNode() ? process.env.PKC_TXGZYL.split('@') : [];
        if ($.isNode()) {
            Object.keys(O0000OO).forEach(OOO000O => {
                if (O0000OO[OOO000O]) {
                    cookiesArr.push(O0000OO[OOO000O]);
                }
            });
            if (process.env.JD_DEBUG && (process.env.JD_DEBUG === 'false')) console.log = () => {
            };
        } else {
            cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(QOO00OO => QOO00OO.cookie)].filter(OQOQ00O => !!OQOQ00O);
        }
        console.log('共' + cookiesArr.length + '个京东账号\n');
        $.activityIdArr = [];
        if ($.isNode()) {
            Object.keys(Q0O0OOQ).forEach(OQOQOO0 => {
                if (Q0O0OOQ[OQOQOO0]) {
                    $.activityIdArr.push(Q0O0OOQ[OQOQOO0]);
                }
            });
        } else {
            if ($.getdata('pkc_txgzyl')) $.activityIdArr = $.getdata('pkc_txgzyl').split('@').filter(QQO00QO => !!QQO00QO);
        }
        console.log('您提供了' + $.activityIdArr.length + '个的特效关注有礼店铺活动\n');
        QQOOO0Q();
    });
}

function TotalBean() {
    return new Promise(async QOOOO0O => {
        const QOO0Q0Q = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2', 'headers': {
                'Accept': 'application/json,text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-cn',
                'Connection': 'keep-alive',
                'Cookie': cookie,
                'Referer': 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
                'User-Agent': $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require('./USER_AGENTS').USER_AGENT : $.getdata('JDUA') ? $.getdata('JDUA') : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
            }
        };
        $.post(QOO0Q0Q, (OO00QO0, OOO0OOO, QOO0Q0O) => {
            try {
                if (OO00QO0) {
                    console.log('' + JSON.stringify(OO00QO0));
                    console.log($.name + ' API请求失败，请检查网路重试');
                } else {
                    if (QOO0Q0O) {
                        QOO0Q0O = JSON.parse(QOO0Q0O);
                        if (QOO0Q0O.retcode === 13) {
                            $.isLogin = false;
                            return;
                        }
                        if ((QOO0Q0O.retcode === 0) && QOO0Q0O.base && QOO0Q0O.base.nickname) {
                            $.nickName = QOO0Q0O.base.nickname;
                        }
                    } else {
                        console.log('京东服务器返回空数据');
                    }
                }
            } catch (OO0OQQO) {
                $.logErr(OO0OQQO);
            } finally {
                QOOOO0O();
            }
        });
    });
}

function jsonParse(OOOQQQO) {
    if (typeof OOOQQQO == 'string') {
        try {
            return JSON.parse(OOOQQQO);
        } catch (Q0O000O) {
            console.log(Q0O000O);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
};

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
            this.got = this.got ? this.got : require("got/dist/source/index"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
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