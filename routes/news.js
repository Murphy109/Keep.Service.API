var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getnews', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

var bann= {
  "total":5,
  "pageno":1,
  "items":[{"title":"新手入门","imgs":[{"nUrl":"http://localhost:3000/img/the_new.png"},{"nUrl":"http://localhost:3000/img/the_new.png"},{"nUrl":"http://localhost:3000/img/the_new.png"},{"nUrl":"http://localhost:3000/img/the_new.png"}]},
    {"title":"学生暑期训练","imgs":[{"nUrl":"http://localhost:3000/img/vacation.png"},{"nUrl":"http://localhost:3000/img/vacation.png"},{"nUrl":"http://localhost:3000/img/vacation.png"},{"nUrl":"http://localhost:3000/img/vacation.png"}]},
    {"title":"零基础减脂","imgs":[{"nUrl":"http://localhost:3000/img/lose_weight.png"},{"nUrl":"http://localhost:3000/img/lose_weight.png"},{"nUrl":"http://localhost:3000/img/lose_weight.png"},{"nUrl":"http://localhost:3000/img/lose_weight.png"}]},
    {"title":"瑜伽","imgs":[{"nUrl":"http://localhost:3000/img/yoga.png"},{"nUrl":"http://localhost:3000/img/yoga.png"},{"nUrl":"http://localhost:3000/img/yoga.png"},{"nUrl":"http://localhost:3000/img/yoga.png"}]},
    {"title":"户外跑步","imgs":[{"nUrl":"http://localhost:3000/img/outdoors_running.png"},{"nUrl":"http://localhost:3000/img/outdoors_running.png"},{"nUrl":"http://localhost:3000/img/outdoors_running.png"},{"nUrl":"http://localhost:3000/img/outdoors_running.png"}]},
    {"title":"女生热门","imgs":[{"nUrl":"http://localhost:3000/img/girls_hot.png"},{"nUrl":"http://localhost:3000/img/girls_hot.png"},{"nUrl":"http://localhost:3000/img/girls_hot.png"},{"nUrl":"http://localhost:3000/img/girls_hot.png"}]}
  ]
} ;

res.jsonp(bann)

});
module.exports = router;
