var express = require('express');
var async = require('async');
var Vitex = require('vitex-mysql');

var router = express.Router();

var db = {
    host: 'localhost',
    user: 'root',
    password :'',
    database:"" //数据库名
};
var Mydb = Vitex(db);;

/* GET home page. */
router.get('/', function(req, res) {
    
    async.series([
        function(callback){
            Mydb.from("表名");
            Mydb.sort("key","desc");
            Mydb.limit(9,0);
            Mydb.find(function(err,result){
                callback(null,result);
            });
        },
        function(callback){
            Mydb.from("表名");
            Mydb.select("id,name");
            Mydb.sort("id","desc");
            Mydb.limit(9,0);
            Mydb.find(function(err,result){
                callback(null,result);
            });
        }
    ],function(err,result){
        res.send(result);
        
    });

});

/*app.get("/user/:name/:id", function(req, res) {
    console.log(req.params.id); //"123"
    res.send("使用req.params属性复杂路由规则的参数对象值!");
});*/

/*app.get("*", function(request, response) {
    response.send("404 error!");
});
//res.redirect("http://www.hubwiz.com");重定向到某页*/
module.exports = router;
