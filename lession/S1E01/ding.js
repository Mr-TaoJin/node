// 用于回复消息
const https = require('https');
const { URL } = require('url');

let req_url = "https://oapi.dingtalk.com/robot/send?access_token=";
let u;
// 初始化taken
const resp = (tk)=>{
    u = new URL(req_url+tk)
}
// 自定义回复
const send = (data)=>{
    const req = https.request(u,{
        'method': 'POST',
        'headers': {
            'content-type': 'application/json;charset=UTF-8'
        }
    }, (res) => {
        console.log("done")
    })
    req.write(JSON.stringify(data));
    req.end();
}
module.exports = {
    'resp':resp,
    'send':send
}