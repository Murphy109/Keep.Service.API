var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getbanner', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

var banner= {
  "total":5,
  "pageno":1,
  "items":["http://localhost:3000/img/choiceness_banner1.png","http://localhost:3000/img/choiceness_banner2.png","http://localhost:3000/img/choiceness_banner3.png","http://localhost:3000/img/choiceness_banner4.png","http://localhost:3000/img/choiceness_banner5.png"
  ]
} ;

res.jsonp(banner)

});
module.exports = router;
