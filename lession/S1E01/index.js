const https = require('https');
const { URL } = require('url');

const u = "https://oapi.dingtalk.com/robot/send?access_token=6a48709f045f3b3e78c2c55f70bb0acdb5b9f45b0d0bc9b6631d5c5695ebcf33";

let data = {
    "msgtype": "text",
    "text": {
        "content": "这是一条测试消息"
    },
    "at": {
        "atMobiles": [],
        "isAtAll": false
    }
}

let req = https.request(new URL(u),{
    'method': 'POST',
    'headers': {
        'content-type': 'application/json;charset=UTF-8'
    }
}, (res) => {
    console.log("done")
})

req.write(JSON.stringify(data));
req.end();