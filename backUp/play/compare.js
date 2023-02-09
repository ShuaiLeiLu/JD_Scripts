const ck_1 = []
const ck_2 = []
const ck_3 = []

let list_ck = ck_1.concat(ck_2).concat(ck_3)
let ck_list = []
list_ck.map((val) => {
    let userName = (val.value.match(/pt_pin=([^; ]+)(?=;?)/) && val.value.match(/pt_pin=([^; ]+)(?=;?)/)[1])
    if (ck_list.indexOf(userName) > -1) {
        console.log(userName)
    } else {
        ck_list.push(userName)
    }
})