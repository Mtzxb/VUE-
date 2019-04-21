var express = require('express');
var router = express.Router();
const http = require('http')

/* GET users listing. */
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
    request('https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=%E7%83%9F%E8%8A%B1%E6%98%93%E5%86%B7&limit=2',function(error,response,body){
        if (!error && response.statusCode == 200) {
            /*把字符串转换为json*/
            var data=JSON.parse(body);
            /*渲染模板*/
           console.log(data)
            res.send(data);
        }
    });
});
module.exports = router;
