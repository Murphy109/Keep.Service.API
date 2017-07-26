var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getgroups', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

  var s = "hot_events";
    var ban= {
  "total":5,
  "pageno":1,
  "items":[{"title":"出汗不等于减肥","con":"2318人已参加","gUrl":"http://localhost:3000/img/groups_news1.png","gUrl1":"http://localhost:3000/img/groups_head1.png"},
    {"title":"美食小分队健身组","con":"334人已参加","gUrl":"http://localhost:3000/img/groups_news2.png","gUrl1":"http://localhost:3000/img/groups_head2.png"}
  ]
} ;

res.jsonp(ban)

});
module.exports = router;
