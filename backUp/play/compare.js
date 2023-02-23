const ck_1 = ""
const ck_2 = ""
const ck_3 = ""
let list_ck = ck_1.concat(ck_2).concat(ck_3)
let ck_list = []
let ws_list = []
list_ck.map((val) => {
    if (val.name === 'JD_COOKIE') {
        let userName = val.value.match(/pt_pin=([^; ]+)(?=;?)/) && val.value.match(/pt_pin=([^; ]+)(?=;?)/)[1]
        if (ck_list.indexOf(userName) > -1) {
            console.log(userName, 'ck')
        } else {
            ck_list.push(userName)
        }
    } else if (val.name === 'JD_WSCK') {
        let userName = val.value.match(/pin=([^; ]+)(?=;?)/) && val.value.match(/pin=([^; ]+)(?=;?)/)[1]
        if (ws_list.indexOf(userName) > -1) {
            console.log(userName, 'wskey')
        } else {
            ws_list.push(userName)
        }
    }
})