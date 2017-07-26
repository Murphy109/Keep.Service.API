var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getarticle', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

  var s = "hot_events";
    var ban= {
  "total":5,
  "pageno":1,
  "items":[{"con":"480评论 / 251706阅读数","title":"据说吃糖的危害堪比吸烟，该怎么劫？","gUrl":"http://localhost:3000/img/article.png"}]
} ;

res.jsonp(ban)

});
module.exports = router;
