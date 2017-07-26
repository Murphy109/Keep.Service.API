var express = require('express');
var router = express.Router();


router.get('/getGoods', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  var goods = {
    "total":"4",
    "status":"ok",
    "lists":[
      {
        "title":"「keep上新季」高强度系列 无惧剧烈运动",
        "desc":"穿享自由，自律习练，让训练自然发生。",
        "single":[
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment1.png",
            "style":"工字背运动内衣",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment2.png",
            "style":"肩带运动内衣",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment1.png",
            "style":"工字背运动内衣",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment2.png",
            "style":"肩带运动内衣",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment1.png",
            "style":"工字背运动内衣",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/athletic_undergarment2.png",
            "style":"肩带运动内衣",
            "price":249,
            "link":"/Goodslink"
          }
        ]
      },
      {
        "title":"「keep上新季」自律系列",
        "desc":"每买一件新品T恤，即赠硅胶手环一个（五款手环，随机赠送，赠完为止）",
        "single":[
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt1.png",
            "style":"男子训练T恤 蓝色",
            "price":99,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt2.png",
            "style":"男子训练T恤 灰色",
            "price":99,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt1.png",
            "style":"男子训练T恤 蓝色",
            "price":99,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt2.png",
            "style":"男子训练T恤 灰色",
            "price":99,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt1.png",
            "style":"男子训练T恤 蓝色",
            "price":99,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/sports_T_shirt2.png",
            "style":"男子训练T恤 灰色",
            "price":99,
            "link":"/Goodslink"
          }
        ]
      },
      {
        "title":"「keep上新季」情侣T恤",
        "desc":"就喜欢和你穿得一样",
        "single":[
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts1.png",
            "style":"最萌小K-男款",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts2.png",
            "style":"最萌小K-女款",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts1.png",
            "style":"最萌小K-男款",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts2.png",
            "style":"最萌小K-女款",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts1.png",
            "style":"最萌小K-男款",
            "price":249,
            "link":"/Goodslink"
          },
          {
            "imgUrl":"http://localhost:3000/img/couple_t_shirts2.png",
            "style":"最萌小K-女款",
            "price":249,
            "link":"/Goodslink"
          }
        ]
      }
    ]
  }
  res.jsonp(goods);
});

module.exports = router;
