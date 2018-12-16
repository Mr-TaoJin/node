var ding = require('./ding')
var express = require('express')
var app = express();

var  bodyParser = require('body-parser');
app.use(bodyParser.json())

ding.resp('bafa6e52b05d02a62a86ee234c36a83f7c561b9553d38d05c63020ae0b588044');

app.post('/ding', function (req, res) {
    console.log(req.body);
    const req_info = req.body;
     // console.log(req_info.text.content);
    let data ={
        "msgtype": "text",
        "text": {
            "content": `我接收到了你的消息为:${req_info.text.content}`
        },
        "at": {
            "atMobiles": [],
            "atDingtalkIds":[req_info.senderId],
            "isAtAll": false
        }
    }
    ding.send(data);
})
app.listen(3000);
