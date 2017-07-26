var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getbann', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

var bann= {
  "total":5,
  "pageno":1,
  "items":["http://localhost:3000/img/train_banner.png","http://localhost:3000/img/train_banner1.png","http://localhost:3000/img/train_banner2.png","http://localhost:3000/img/train_banner3.png"
  ]
} ;

res.jsonp(bann)

});
module.exports = router;
