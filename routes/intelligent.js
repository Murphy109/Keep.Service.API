var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getintelligent', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

  var s = "hot_events";
    var ban= {
  "total":5,
  "pageno":1,
  "items":[{"name":"Jijizhang","title":"生命太短，享受每一个年龄段的快乐","gUrl":"http://localhost:3000/img/intelligent1.png"},
    {"name":"冉晓冉健身girl","title":"健身达人 微博：MS冉晓冉，拍摄或","gUrl":"http://localhost:3000/img/intelligent2.png"},
    {"name":"Yuyu余生","title":"Keep健身房课程示范模特！微博：","gUrl":"http://localhost:3000/img/intelligent3.png"}
  ]
} ;

res.jsonp(ban)

});
module.exports = router;
