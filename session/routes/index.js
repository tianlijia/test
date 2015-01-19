var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
    req.session.sessname = 'i am a sesion';
    //res.send('session:' + req.session.sessname);
    req.session.destroy(); //清空session
   if(req.session){
       console.log("1");
   }else{
       console.log("2");
   }
});



module.exports = router;
