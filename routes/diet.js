var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getdiet', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");

var bann= {
  "total":5,
  "pageno":1,
  "items":[{"title":"不怕胖的夏日冷饮",
    "con":"自己制作的健康低糖冷饮和炎炎夏日更配！",
    "imgs":[
      {"text":"健康水果冰粉",
       "num":"294kal",
       "nUrl":"http://localhost:3000/img/cold_drink2.png",
        "link":"/Cater"
      },
      {"text":"高蛋白芒果冰淇淋",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/cold_drink1.png",
        "link":"/Cater"
      },
      {"text":"健康水果冰粉",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/cold_drink2.png",
        "link":"/Cater"

      },
      {"text":"高蛋白芒果冰淇淋",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/cold_drink1.png",
        "link":"/Cater"

      }]
  },
    {"title":"肉食主义",
      "con":"本系列菜谱由[豆果美食]提供",
      "imgs":[{"text":"香煎鸡胸",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/eating_animals1.png",
        "link":"/Cater"
      },
        {"text":"香烤三文鱼",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/eating_animals2.png",
        "link":"/Cater"
      },
        {"text":"香煎鸡胸",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/eating_animals1.png",
          "link":"/Cater"
        },
        {"text":"香烤三文鱼",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/eating_animals2.png",
          "link":"/Cater"
        }
      ]},
    {"title":"饱腹主食",
      "con":"减脂期间主食应该优先选择糙米、薯类和杂粮豆类等全谷杂粮类。",
      "imgs":[{"text":"糙米炒饭",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/staple_food2.png",
        "link":"/Cater"
      },
        {"text":"胡萝卜糙米饭团",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/staple_food1.png",
          "link":"/Cater"
        },
        {"text":"糙米炒饭",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/staple_food2.png",
          "link":"/Cater"
        },{"text":"胡萝卜糙米饭团",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/staple_food1.png",
          "link":"/Cater"
        }
      ]},
    {"title":"不需要肉的高蛋白料理",
      "con":"没有肉或不吃肉就无法获取优质蛋白质？并非如此，乳制品及大豆类制品也是非常好的蛋白质来源，这个主题和大家分享几道原料不包含肉的高蛋白料理。","imgs":[{"text":"香蕉蛋白松饼",
      "num":"294kal",
      "nUrl":"http://localhost:3000/img/high_protein1.png",
      "link":"/Cater"
    },
      {"text":"香菇烩豆腐","num":"294kal",
        "nUrl":"http://localhost:3000/img/high_protein2.png",
        "link":"/Cater"
      },
      {"text":"香蕉蛋白松饼",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/high_protein1.png",
        "link":"/Cater"
      },
      {"text":"香菇烩豆腐",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/high_protein2.png",
        "link":"/Cater"
      }]},
    {"title":"不一样的午餐便当",
      "con":"本系列菜谱由[豆果美食]提供",
      "imgs":[{"text":"龙利鱼卷饼便当",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/lunch1.png",
        "link":"/Cater"
      },
        {"text":"鹰嘴豆素食便当",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/lunch2.png",
          "link":"/Cater"
        },
        {"text":"龙利鱼卷饼便当",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/lunch1.png",
          "link":"/Cater"
        },
        {"text":"鹰嘴豆素食便当",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/lunch2.png",
          "link":"/Cater"}]},
    {"title":"夏日轻饮",
      "con":"本系列菜谱由[豆果美食]提供",
      "imgs":[{"text":"青柠苏打水",
        "num":"294kal",
        "nUrl":"http://localhost:3000/img/summer_drink1.png",
        "link":"/Cater"
      },
        {"text":"芒果酸奶冻",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/summer_drink2.png",
          "link":"/Cater"
        },
        {"text":"青柠苏打水",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/summer_drink1.png",
          "link":"/Cater"
        },
        {"text":"芒果酸奶冻",
          "num":"294kal",
          "nUrl":"http://localhost:3000/img/summer_drink2.png",
          "link":"/Cater"
        }]}
  ]
} ;

res.jsonp(bann)

});
module.exports = router;
