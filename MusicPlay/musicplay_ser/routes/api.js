var express = require('express');
var router = express.Router();
const http = require('http')

/* GET users listing. */
var request = require('request');
/* GET home page. */
router.get('/getdata', function(req, res, next) {
	//封装查询接口
	var str = "";
	for(var key in req.query){
		str = str + (key +"="+ encodeURIComponent(req.query[key])) + "&" 
	}
	var queryStr = 'https://api.imjad.cn/cloudmusic/?' +(str.substr(0,str.length-1));
    request(queryStr,function(error,response,body){//查询数据并返回前台
        if (!error && response.statusCode == 200) {
            var data=JSON.parse(body);
            res.send(data);
        }else{
        	res.send(error)
        }
    });
});
router.post('/getdata_post',function(req,res,next){
	res.send(req.body)
})
module.exports = router;
