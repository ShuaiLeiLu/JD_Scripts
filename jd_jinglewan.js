/*
京乐玩
@Leaf

cron: 1 1 1 1 1

禁用脚本手动开启任务，自动监控
没有写并发控制，全部CK梭哈并发。CK多了会炸机，自己看着办

有需要的自己改掉脚本里参数
let scriptName = "jd_jinglewan" //需要跟你实际的脚本名一致
let MAIN_USER = 1; //要邀请的车头编号，默认用第一个
*/
const $ = new Env("京乐玩");

let MAIN_USER = 1; //要邀请的车头编号

let qlHost = "127.0.0.1:5700"
let scriptName = "jd_jinglewan"

var fs = require("fs")
let authFile = JSON.parse(fs.readFileSync("/ql/config/auth.json"))
let qlToken = authFile.token

let envSplitor = ['&','\n']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.JD_COOKIE : $.getdata('JD_COOKIE')) || '';

let SLEEP_TIME = 300
let HELP_WAIT_TIME = 25000
let RANDOM_WAIT_TIME = 10

let userList = []
let userIdx = 0
let userCount = 0

let nowhour = (new Date()).getHours()

let defaultUA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001628) NetType/WIFI Language/zh_CN'
let iosVerList = ["15.1.1", "14.5.1", "14.4", "14.3", "14.2", "14.1", "14.0.1"]
let clientVerList = ["10.3.0", "10.2.7", "10.2.4"]
let iphoneVerList = ["8","9","10","11","12","13"]
let salt = "cXRofWK6"
///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        this.name = this.index
        this.isJdCK = false
        this.valid = false

        try {
            this.pt_key = str.match(/pt_key=([\w\-]+)/)[1]
            this.pt_pin = decodeURIComponent(str.match(/pt_pin=([\w\-\%]+)/)[1])
            this.cookie = `pt_key=${this.pt_key};wxclient=gxhwx;ie_ai=1;`
            //this.cookie = str
            this.isJdCK = true
            this.iosVer = $.randomList(iosVerList)
            this.iosVer_ = this.iosVer.replace('.', '_')
            this.getUA()
        } catch (e) {
            console.log(`账号[${this.index}]CK无效，可能不是京东CK`)
        }
    }

    getUA() {
        this.UA = `Mozilla/5.0 (iPhone; CPU iPhone OS ${this.iosVer_} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.22(0x18001628) NetType/WIFI Language/zh_CN`
    }

    async searchChannel() {
        try {
            let url = `https://jnk.m.jd.com/mission/user/index`
            let body = `{}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            //console.log(result)
            if(result?.code == 1) {
                let nowtime = $.time('hh:mm:ss');
                console.log(`[${nowtime}] 账号[${this.index}]开始搜索直播频道`)
                for(let item of result.data) {
                    if(item.live) {
                        let taskall = []
                        for(let live of item.live) {
                            taskall.push(this.tryInvite(live.liveId))
                        }
                        await Promise.all(taskall)
                    }
                }
            } else {
                console.log(`获取直播信息失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async promotionCreate() {
        try {
            let url = `https://jnk.m.jd.com/mission/user/promotion/create`
            let body = `{"nickName":"微信用户","avatarUrl":"https://static-alias-1.360buyimg.com/jzt/mp/images/default_user_img.png","openId":"","cellphone":"15214${$.randomString(6,'0123456789')}"}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            //console.log(result)
            if(result?.code == 1) {
                let nowtime = $.time('hh:mm:ss');
                console.log(`[${nowtime}] 账号[${this.index}]注册推广员成功`)
            } else {
                console.log(`账号[${this.index}]注册推广员失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async tryInvite(liveId) {
        try {
            let url = `https://jnk.m.jd.com/mission/user/promotion/invite`
            let body = `{"nickName":"微信用户","avatarUrl":"https://static-alias-1.360buyimg.com/jzt/mp/images/default_user_img.png","openId":"","liveId":${liveId}}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            //console.log(result)
            if(result?.code == 1) {
                if(result?.msg) {
                    console.log(`[${liveId}]${result.msg}`)
                } else {
                    let nowtime = $.time('hh:mm:ss');
                    console.log(`[${nowtime}] 账号[${this.index}]检测到[${liveId}]有豆`)
                    await userList[MAIN_USER].invite(liveId)
                }
            } else {
                console.log(`账号[${this.index}]获取邀请参数失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async invite(liveId) {
        try {
            let url = `https://jnk.m.jd.com/mission/user/promotion/invite`
            let body = `{"nickName":"微信用户","avatarUrl":"https://static-alias-1.360buyimg.com/jzt/mp/images/default_user_img.png","openId":"","liveId":${liveId}}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            await httpRequest('post',urlObject)
            let result = httpResult;
            //console.log(result)
            if(result?.code == 1) {
                if(!result.msg) {
                    let promotionId = result.data.promotionId
                    let nowtime = $.time('hh:mm:ss');
                    console.log(`[${nowtime}] 账号[${this.name}]开始邀请，promotionId=${promotionId}`)
                    let taskall = []
                    for(let toolman of userList.filter(x => x.index!= this.index)) {
                        taskall.push(toolman.promotionStatus(promotionId,liveId))
                    }
                    await Promise.all(taskall)
                } else {
                    console.log(`账号[${this.name}][${liveId}]${result.msg}`)
                }
            } else {
                console.log(`账号[${this.name}]获取邀请参数失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async promotionStatus(promotionId,liveId) {
        try {
            let url = `https://jnk.m.jd.com/mission/user/promotion/status`
            let body = `{"promotionId":${promotionId}}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            await httpRequest('post',urlObject)
            //console.log(urlObject)
            let result = httpResult;
            //console.log(result)
            if(result?.code == 1) {
                if(result?.data?.viewStatus != 0) {
                    console.log(`账号[${this.index}]跳过[${liveId}]`)
                } else {
                    let tt = Date.now().toString()
                    let viewId = this.getViewId(promotionId,tt)
                    await this.recordLog(promotionId,viewId,tt)
                    await $.wait(HELP_WAIT_TIME)
                    tt = Date.now().toString()
                    await this.recordLog(promotionId,viewId,tt)
                    await this.promotionJoin(promotionId)
                }
            } else {
                console.log(`账号[${this.index}] [${liveId}]postStatus失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async recordLog(promotionId,viewId,tt) {
        try {
            let actId = promotionId.toString()
            //let tt = Date.now().toString()
            let bePromotion = "1"
            //let viewId = MD5Encrypt(encodeURIComponent(this.pt_pin) + actId + tt + salt + bePromotion)
            let token = MD5Encrypt(viewId + actId + tt + salt)
            let url = `https://jnk.m.jd.com/viewlog/user/recordLog`
            let body = `{"viewId":"${viewId}","tt":${tt},"tokenVersion":2,"token":"${token}","actId":${actId},"bePromotion":${bePromotion}}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            //console.log(urlObject)
            await httpRequest('post',urlObject)
            let nowtime = $.time('hh:mm:ss');
            console.log(`[${nowtime}] 账号[${this.index}] recordLog`)
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    async promotionJoin(promotionId) {
        try {
            let url = `https://jnk.m.jd.com/mission/user/promotion/join`
            let openid = $.randomString(28,'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-_')
            let body = `{"promotionId":${promotionId},"nickName":"微信用户","avatarUrl":"https://static-alias-1.360buyimg.com/jzt/mp/images/default_user_img.png","openId":"${openid}"}`
            let urlObject = populateUrlObject(url,this.cookie,this.UA,body)
            //console.log(urlObject)
            await httpRequest('post',urlObject)
            let result = httpResult;
            //console.log(result)
            let nowtime = $.time('hh:mm:ss');
            if(result?.code == 1) {
                if(result?.data?.msg) {
                    console.log(`[${nowtime}] 账号[${this.index}]助力[${promotionId}]失败：${result.data.msg}`)
                } else {
                    console.log(`[${nowtime}] 账号[${this.index}]助力[${promotionId}]成功`)
                }
            } else {
                console.log(`[${nowtime}] 账号[${this.index}]助力[${promotionId}]失败: ${result?.msg}`)
            }
        } catch(e) {
            console.log(e)
        } finally {
            return new Promise((resolve) => {resolve(1)});
        }
    }

    getViewId(promotionId,tt) {
        let viewId = $.randomString(32)
        try {
            let actId = promotionId.toString()
            let bePromotion = "1"
            let viewId = MD5Encrypt(encodeURIComponent(this.pt_pin) + actId + tt + salt + bePromotion)
        } catch(e) {
            console.log(e)
        } finally {
            return viewId;
        }
    }
}

!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite()
    }else {

        if(await checkEnv()) {
            let ranIdx = Math.floor(Math.random()*userCount)
            let searcher = userList[ranIdx]
            await searcher.promotionCreate()
            await searcher.searchChannel()
        }
        await $.wait(SLEEP_TIME)

        for(let files of fs.readdirSync(`/ql/log/${scriptName}`)) {
            let fileName = `/ql/log/${scriptName}/${files}`
            let logFile = fs.statSync(fileName)
            let mtime = logFile.mtime.getTime()
            let nowtime = Date.now()
            if(logFile.size < 2000 || mtime < (nowtime - 24*60*60*1000)) {
                fs.unlinkSync(fileName);
            }
        }

        await qlApiCrons()
    }
})()
.catch((e) => console.log(e))
.finally(() => $.done())

///////////////////////////////////////////////////////////////////
async function checkEnv() {
    if(userCookie) {
        let splitor = envSplitor[0];
        for(let sp of envSplitor) {
            if(userCookie.indexOf(sp) > -1) {
                splitor = sp;
                break;
            }
        }
        for(let userCookies of userCookie.split(splitor)) {
            if(userCookies) userList.push(new UserInfo(userCookies))
        }
        userCount = userList.length
    } else {
        console.log('未找到CK')
        return;
    }

    console.log(`共找到${userCount}个账号`)
    return true
}
////////////////////////////////////////////////////////////////////
async function qlApiCrons(){
    try {
        let urlObject = {
            url: `http://${qlHost}/api/crons?searchValue=${scriptName}&t=${Date.now()}`,
            headers : {
                'Host': qlHost,
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + qlToken,
            }
        }
        await httpRequest('get',urlObject)
        let result = httpResult;
        //console.log(result)
        if(result.code == 200) {
            for(let task of result.data) {
                if(task.command.indexOf(scriptName) > -1) {
                    await qlApiRun(task)
                }
            }
        } else {
            console.log(`青龙API失败：qlApiCrons`)
        }
    } catch (e) {
        console.log(e)
    }
}

async function qlApiRun(task){
    try {
        let body = `["${task._id}"]`
        let urlObject = {
            url: `http://${qlHost}/api/crons/run?t=${Date.now()}`,
            headers : {
                'Host': qlHost,
                'Connection': 'keep-alive',
                'Authorization': 'Bearer ' + qlToken,
                'Content-Type': 'application/json;charset=UTF-8',
                'Content-Length': body.length
            },
            body: body
        }
        await httpRequest('put',urlObject)
        let result = httpResult;
        //console.log(result)
        if(result.code == 200) {
            console.log(`启动任务成功`)
        } else {
            console.log(`青龙API失败：qlApiRun`)
        }
    } catch (e) {
        console.log(e)
    }
}
////////////////////////////////////////////////////////////////////
function populateUrlObject(url,cookie,UA,body=''){
    let host = url.replace('//','/').split('/')[1]
    let urlObject = {
        url: url,
        headers: {
            'Host': host,
            'Connection': 'keep-alive',
            'Cookie': cookie,
            'User-Agent': UA,
            'Referer': 'https://servicewechat.com/wx5afd69b196301a2f/135/page-frame.html',
        },
        timeout: 5000,
    }
    if(body) {
        urlObject.body = body
        urlObject.headers['Content-Type'] =  'application/json'
    }
    return urlObject;
}

async function httpRequest(method,url) {
    httpResult = null, httpReq = null, httpResp = null;
    return new Promise((resolve) => {
        $.send(method, url, async (err, req, resp) => {
            try {
                httpReq = req;
                httpResp = resp;
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(err)
                    //console.log(req)
                    //console.log(resp)
                } else {
                    if(resp.body) {
                        if(typeof resp.body == "object") {
                            httpResult = resp.body;
                        } else {
                            try {
                                httpResult = JSON.parse(resp.body);
                            } catch (e) {
                                httpResult = resp.body;
                            }
                        }
                    }
                }
            } catch (e) {
                //console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

////////////////////////////////////////////////////////////////////
//AES/DES加解密，CryptoJS
function EncryptCrypto(method,mode,padding,message,key,iv) {
    return CryptoJS[method].encrypt(
        CryptoJS.enc.Utf8.parse(message),
        CryptoJS.enc.Utf8.parse(key),
        {mode:CryptoJS.mode[mode], padding:CryptoJS.pad[padding], iv:CryptoJS.enc.Utf8.parse(iv)}
    ).ciphertext.toString(CryptoJS.enc.Base64);
}
function DecryptCrypto(method,mode,padding,message,key,iv) {
    return CryptoJS[method].decrypt(
        {ciphertext: CryptoJS.enc.Base64.parse(message)},
        CryptoJS.enc.Utf8.parse(key),
        {mode:CryptoJS.mode[mode], padding:CryptoJS.pad[padding], iv:CryptoJS.enc.Utf8.parse(iv)}
    ).toString(CryptoJS.enc.Utf8);
}
//Base64加解密
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
//MD5
function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}
//SHA1
function SHA1Encrypt(msg){function add(x,y){return((x&0x7FFFFFFF)+(y&0x7FFFFFFF))^(x&0x80000000)^(y&0x80000000);}function SHA1hex(num){var sHEXChars="0123456789abcdef";var str="";for(var j=7;j>=0;j--)str+=sHEXChars.charAt((num>>(j*4))&0x0F);return str;}function AlignSHA1(sIn){var nblk=((sIn.length+8)>>6)+1,blks=new Array(nblk*16);for(var i=0;i<nblk*16;i++)blks[i]=0;for(i=0;i<sIn.length;i++)blks[i>>2]|=sIn.charCodeAt(i)<<(24-(i&3)*8);blks[i>>2]|=0x80<<(24-(i&3)*8);blks[nblk*16-1]=sIn.length*8;return blks;}function rol(num,cnt){return(num<<cnt)|(num>>>(32-cnt));}function ft(t,b,c,d){if(t<20)return(b&c)|((~b)&d);if(t<40)return b^c^d;if(t<60)return(b&c)|(b&d)|(c&d);return b^c^d;}function kt(t){return(t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514;}var x=AlignSHA1(msg);var w=new Array(80);var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;var e=-1009589776;for(var i=0;i<x.length;i+=16){var olda=a;var oldb=b;var oldc=c;var oldd=d;var olde=e;for(var j=0;j<80;j++){if(j<16)w[j]=x[i+j];else w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);t=add(add(rol(a,5),ft(j,b,c,d)),add(add(e,w[j]),kt(j)));e=d;d=c;c=rol(b,30);b=a;a=t;}a=add(a,olda);b=add(b,oldb);c=add(c,oldc);d=add(d,oldd);e=add(e,olde);}SHA1Value=SHA1hex(a)+SHA1hex(b)+SHA1hex(c)+SHA1hex(d)+SHA1hex(e);return SHA1Value;}
////////////////////////////////////////////////////////////////////
function Env(name,env) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    return new class {
        constructor(name,env) {
            this.name = name
            this.notifyStr = ''
            this.startTime = (new Date).getTime()
            Object.assign(this,env)
            console.log(`${this.name} 开始运行：\n`)
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
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
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
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            }
            else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        send(m, t, e = (() => {})) {
            if(m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
                console.log(`无效的http方法：${m}`);
                return;
            }
            if(m == 'get' && t.headers) {
                delete t.headers["Content-Type"];
                delete t.headers["Content-Length"];
            } else if(t.body && t.headers) {
                if(!t.headers["Content-Type"]) t.headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if(this.isSurge() || this.isLoon()) {
                if(this.isSurge() && this.isNeedRewrite) {
                    t.headers = t.headers || {};
                    Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1});
                }
                let conf = {
                    method: m,
                    url: t.url,
                    headers: t.headers,
                    timeout: t.timeout,
                    data: t.body
                };
                if(m == 'get') delete conf.data
                $axios(conf).then(t => {
                    const {
                        status: i,
                        request: q,
                        headers: r,
                        data: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    });
                }).catch(err => console.log(err))
            } else if (this.isQuanX()) {
                t.method = m.toUpperCase(), this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })),
                $task.fetch(t).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => e(t))
            } else if (this.isNode()) {
                this.got = this.got ? this.got : require("got");
                const {
                    url: s,
                    ...i
                } = t;
                this.instance = this.got.extend({
                    followRedirect: false
                });
                this.instance[m](s, i).then(t => {
                    const {
                        statusCode: i,
                        request: q,
                        headers: r,
                        body: o
                    } = t;
                    e(null, q, {
                        statusCode: i,
                        headers: r,
                        body: o
                    })
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "h+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        async showmsg() {
            if(!this.notifyStr) return;
            let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr
            if($.isNode()){
                var notify = require('./sendNotify');
                console.log('\n============== 推送 ==============')
                await notify.sendNotify(this.name, notifyBody);
            } else {
                this.msg(notifyBody);
            }
        }
        logAndNotify(str) {
            console.log(str)
            this.notifyStr += str
            this.notifyStr += '\n'
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "============== 系统通知 =============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n"))
        }
        getMin(a,b){
            return ((a<b) ? a : b)
        }
        getMax(a,b){
            return ((a<b) ? b : a)
        }
        padStr(num,length,padding='0') {
            let numStr = String(num)
            let numPad = (length>numStr.length) ? (length-numStr.length) : 0
            let retStr = ''
            for(let i=0; i<numPad; i++) {
                retStr += padding
            }
            retStr += numStr
            return retStr;
        }
        json2str(obj,c,encodeUrl=false) {
            let ret = []
            for(let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if(v && encodeUrl) v = encodeURIComponent(v)
                ret.push(keys+'='+v)
            }
            return ret.join(c);
        }
        str2json(str,decodeUrl=false) {
            let ret = {}
            for(let item of str.split('&')) {
                if(!item) continue;
                let idx = item.indexOf('=')
                if(idx == -1) continue;
                let k = item.substr(0,idx)
                let v = item.substr(idx+1)
                if(decodeUrl) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret;
        }
        randomString(len,charset='abcdef0123456789') {
            let str = '';
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random()*charset.length));
            }
            return str;
        }
        randomList(a) {
            let idx = Math.floor(Math.random()*a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`)
            if(this.isSurge() || this.isQuanX() || this.isLoon()) $done(t)
        }
    }(name,env)
}