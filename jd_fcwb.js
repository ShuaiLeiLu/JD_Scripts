/*
发财挖宝
更新时间：2022-7-20
活动入口：极速版-发财挖宝

目前需要下一单才能通关。

脚本可能随时失效~
脚本可能随时失效~
脚本可能随时失效~
脚本可能随时失效~
脚本可能随时失效~
脚本可能随时失效~
脚本可能随时失效~

变量：
//export fcwbhelpnum="人数" //自行填写变量，需要邀请多少人停止。(不填写默认邀请111停止)

每天23点后无法运行
*/
const $ = new Env('发财挖宝助力-解密');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const JD_API_HOST = 'https://api.m.jd.com';
let cookiesArr = [], cookie = '', message;
let inviteCodes = [];
$.hasEnd = false;
let link = 'pTTvJeSTrpthgk9ASBVGsw';
var timestamp = new Date().getTime();
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(QO00OO => {
        cookiesArr.push(jdCookieNode[QO00OO]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || '[]').map(QO0QQ0 => QO0QQ0.cookie)].filter(QOOOOQ => !!QOOOOQ);
}
let fcwbhelpnum = '111';
fcwbhelpnum = $.isNode() ? process.env.fcwbhelpnum ? process.env.fcwbhelpnum : '' + fcwbhelpnum : $.getdata('fcwbhelpnum') ? $.getdata('fcwbhelpnum') : '' + fcwbhelpnum;
let NowHour = new Date().getHours();
let llhelp = true;
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
        return;
    }
    if (NowHour > 23) {
        llhelp = false;
        console.log('每天23点后无法运行本程序，结束....');
        console.log('\n脚本可能随时失效，脚本可能随时失效\n');
        return;
    }
    console.log('\n【默认全部助力账号一，邀请满' + fcwbhelpnum + '自动停止】\n【加密脚本，不放心可禁用】\n【脚本随时失效，脚本随时失效】\n');
    await $.wait(parseInt(Math.random() * 2000 + 10000, 10));
    for (let O0QOQQ = 0; O0QOQQ < cookiesArr.length; O0QOQQ++) {
        if (cookiesArr[O0QOQQ]) {
            cookie = cookiesArr[O0QOQQ];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = O0QOQQ + 1;
            $.isLogin = true;
            $.nickName = '';
            message = '';
            console.log('\n******开始【京东账号' + $.index + '】' + ($.nickName || $.UserName) + '*********\n');
            if (!$.isLogin) {
                $.msg($.name, '【提示】cookie已失效', '京东账号' + $.index + ' ' + ($.nickName || $.UserName) + '\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action', {'open-url': 'https://bean.m.jd.com/bean/signIndex.action'});
                if ($.isNode()) {
                    await notify.sendNotify($.name + 'cookie已失效 - ' + $.UserName, '京东账号' + $.index + ' ' + $.UserName + '\n请重新登录获取cookie');
                }
                continue;
            }
            if (llhelp) {
                await getUA();
                await run();
                await $.wait(2000);
                if ($.hasEnd) break;
            }
        }
    }
})().catch(QO0QO0 => {
    $.log('', '❌ ' + $.name + ', 失败! 原因: ' + QO0QO0 + '!', '');
}).finally(() => {
    $.done();
});

async function run() {
    $.personNum = 0;
    try {
        await happyDigHome();
        let QQQ000 = await help();
        await happyDigHelpList();
        if ($.index == 1) {
            $.helpCount = $.personNum;
        } else if ($.helpok == true) {
            $.helpCount++;
        }
        console.log('【账号' + $.index + '】已邀请人数：' + $.personNum + ($.index != 1 && ' 【账号1】已邀请人数：' + $.helpCount || ''));
        if ($.helpCount >= fcwbhelpnum) $.hasEnd = true;
    } catch (O00QOQ) {
        console.log(O00QOQ);
    }
}

function happyDigHome() {
    return new Promise(QQ0O00 => {
        let QQ0Q00 = {'linkId': link};
        $.get(taskurl('happyDigHome', QQ0Q00), async (QQ00OO, QQ0QQ0, QQ00OQ) => {
            try {
                if (QQ00OO) {
                    console.log('' + JSON.stringify(QQ00OO));
                    console.log($.name + ' API请求失败，请检查网路重试');
                } else {
                    if (safeGet(QQ00OQ)) {
                        QQ00OQ = JSON.parse(QQ00OQ);
                        if ($.index === 1) {
                            if (QQ00OQ.success == true) {
                                curRound = QQ00OQ.data.curRound;
                                inviteCode = QQ00OQ.data.inviteCode;
                                inviter = QQ00OQ.data.markedPin;
                                blood = QQ00OQ.data.blood;
                                console.log('【当前助力】:' + QQ00OQ.data.inviteCode);
                                if (QQ00OQ.data && QQ00OQ.data.inviteCode && inviteCodes.length === 0) {
                                    inviteCodes.push({
                                        'user': $.UserName,
                                        'fcwbinviteCode': QQ00OQ.data.inviteCode,
                                        'fcwbinviter': QQ00OQ.data.markedPin
                                    });
                                }
                            }
                        } else if (QQ00OQ.success == false) {
                            console.log('抱歉，貌似账号已黑，跳过！');
                        }
                    }
                }
            } catch (QOOQOQ) {
                $.logErr(QOOQOQ, QQ0QQ0);
            } finally {
                QQ0O00(QQ00OQ);
            }
        });
    });
}

function happyDigHelpList() {
    return new Promise(O0Q0Q0 => {
        let QQQQOQ = {'pageNum': 1, 'pageSize': 50, 'linkId': link};
        $.get(taskurl('happyDigHelpList', QQQQOQ), async (QOOQO0, O0Q0OO, O0QQ00) => {
            try {
                if (QOOQO0) {
                    console.log('' + JSON.stringify(QOOQO0));
                    console.log($.name + ' API请求失败，请检查网路重试');
                } else {
                    if (safeGet(O0QQ00)) {
                        O0QQ00 = JSON.parse(O0QQ00);
                        if (O0QQ00.success == true) {
                            $.personNum = O0QQ00.data.personNum;
                        } else if (O0QQ00.success == false) {
                            console.log('抱歉，貌似账号已黑，跳过！');
                        }
                    }
                }
            } catch (QOQO00) {
                $.logErr(QOQO00, O0Q0OO);
            } finally {
                O0Q0Q0(O0QQ00);
            }
        });
    });
}

function help() {
    return new Promise(async QO0O0O => {
        let OOQQ00 = inviteCode;
        let OOQQQO = inviter;
        let OOQQ0O = Date.now();
        let OOQ000 = '{"linkId":"pTTvJeSTrpthgk9ASBVGsw","inviter":"' + inviter + '","inviteCode":"' + inviteCode + '"}';
        if ($.name.indexOf('发财挖宝助力-加密') === -1) return;
        let OOQ0Q0 = '20220412164641157%3B197ee697d50ca316f3582488c7fa9d34%3B169f1%3Btk02wd9451deb18n1P31JunSGTfZhmebuivwsEwYWUQF1ZkpdtuSmKOES5DnIMFdyOvKikdguelIiBUnJbeCgoNlcEvv%3B6e090cbde337590b51a514718fee391d46fece6b953ed1084a052f6d76ffbd92%3B3.0%3B1649753201157';
        let O0O000 = {
            'appid': 'activities_platform',
            'functionId': 'happyDigHelp',
            'clientVersion': '1.0.0',
            'client': 'H5',
            't': OOQQ0O,
            'body': JSON.parse(OOQ000)
        };
        let O0O0Q0 = await getH5st('8dd95', O0O000);
        let O0OQQO = {
            'url': 'https://api.m.jd.com/?functionId=happyDigHelp&body=' + OOQ000 + '&t=' + OOQQ0O + '&appid=activities_platform&client=H5&clientVersion=1.0.0&h5st=' + encodeURIComponent(O0O0Q0),
            'headers': {'Cookie': cookie, 'Origin': 'https://api.m.jd.com', 'User-Agent': UA}
        };
        $.get(O0OQQO, async (O0OQ0O, O0OQQQ, O0OQ0Q) => {
            try {
                if (O0OQ0O) {
                    console.log('' + JSON.stringify(O0OQ0O));
                    console.log($.name + ' API请求失败，请检查网路重试');
                } else {
                    if (safeGet(O0OQ0Q)) {
                        O0OQ0Q = JSON.parse(O0OQ0Q);
                        $.helpok = O0OQ0Q.success;
                        if (O0OQ0Q.success == true) {
                            console.log('【助力状态】：' + O0OQ0Q.errMsg);
                        } else if (O0OQ0Q.success == false) {
                            console.log('【助力状态】：' + O0OQ0Q.errMsg);
                        }
                    }
                }
            } catch (OO0OQO) {
                $.logErr(OO0OQO, O0OQQQ);
            } finally {
                QO0O0O(O0OQ0Q);
            }
        });
    });
}

function TotalBean() {
    return new Promise(async O0O0QQ => {
        const QOQQOQ = {
            'url': 'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2',
            'headers': {
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
        $.post(QOQQOQ, (QO000Q, QOOOQQ, QO00OQ) => {
            try {
                if (QO000Q) {
                    console.log('' + JSON.stringify(QO000Q));
                    console.log($.name + ' API请求失败，请检查网路重试');
                } else {
                    if (QO00OQ) {
                        QO00OQ = JSON.parse(QO00OQ);
                        if (QO00OQ.retcode === 13) {
                            $.isLogin = false;
                            return;
                        }
                        if (QO00OQ.retcode === 0) {
                            $.nickName = QO00OQ.base && QO00OQ.base.nickname || $.UserName;
                        } else {
                            $.nickName = $.UserName;
                        }
                    } else {
                        console.log('京东服务器返回空数据');
                    }
                }
            } catch (QO0000) {
                $.logErr(QO0000, QOOOQQ);
            } finally {
                O0O0QQ();
            }
        });
    });
}

function getUA() {
    UA = 'jdpingou;iPhone;5.29.0;appBuild/100974;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/8;pap/JA2019_3111789;supportJDSHWK/1;ef/1;ep/%7B%22ciphertype%22:5,%22cipher%22:%7B%22ud%22:%22D2OmZJOnZtunYWS1ZJq5ZtLsCtC0YtqnCwVsDWG1CtK2EJdwZQC5Ym==%22,%22bd%22:%22YXLmbQU=%22,%22iad%22:%22%22,%22sv%22:%22CJUkDG==%22%7D,%22ts%22:1657359314,%22hdid%22:%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=%22,%22version%22:%221.0.3%22,%22appname%22:%22com.360buy.jdpingou%22,%22ridx%22:-1%7D;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;';
}

function randomString(QOQ00Q) {
    QOQ00Q = QOQ00Q || 32;
    let OOQO0Q = 'abcdef0123456789', OOQOQO = OOQO0Q.length, OOQO0O = '';
    for (i = 0; i < QOQ00Q; i++) OOQO0O += OOQO0Q.charAt(Math.floor(Math.random() * OOQOQO));
    return OOQO0O;
}

function safeGet(QO0OQ0) {
    try {
        if (typeof JSON.parse(QO0OQ0) == 'object') {
            return true;
        }
    } catch (QOQQ0Q) {
        console.log(QOQQ0Q);
        console.log('京东服务器访问数据为空，请检查自身设备网络情况');
        return false;
    }
}

function jsonParse(QOQQQQ) {
    if (typeof QOQQQQ == 'string') {
        try {
            return JSON.parse(QOQQQQ);
        } catch (QO0OOQ) {
            console.log(QO0OOQ);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie');
            return [];
        }
    }
}

function taskurl(OQQOOO, Q00O0Q) {
    return {
        'url': JD_API_HOST + '/?functionId=' + OQQOOO + '&body=' + escape(JSON.stringify(Q00O0Q)) + '&t=1635561607124&appid=activities_platform&client=H5&clientVersion=1.2.0',
        'headers': {'Cookie': cookie, 'Origin': 'https://bnzf.jd.com', 'User-Agent': ' jdltapp;iPhone;3.7.6;'}
    };
}

function getH5st(OOO0OO, Q00OQQ) {
    return new Promise(async Q00OQO => {
        let OQQ00O = {
            'url': 'http://api.kingran.cf/h5st',
            'body': 'businessId=' + OOO0OO + '&req=' + encodeURIComponent(JSON.stringify(Q00OQQ)),
            'headers': {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'},
            'timeout': 30 * 1000
        };
        $.post(OQQ00O, (OQQOO0, OQQ00Q, OOO0Q0) => {
            try {
                if (OQQOO0) {
                } else {
                }
            } catch (OOOQ0Q) {
                $.logErr(OOOQ0Q, OQQ00Q);
            } finally {
                Q00OQO(OOO0Q0);
            }
        });
    });
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
