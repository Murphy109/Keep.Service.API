var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var IndexDrillTraining = require('./routes/IndexDrillTraining');
var IndexDrillRecommend = require('./routes/IndexDrillRecommend');
var IndexDrillDaily= require('./routes/IndexDrillDaily');
var IndexDrillCourse= require('./routes/IndexDrillCourse');
var IndexRunningRouteRoutes= require('./routes/IndexRunningRouteRoutes');
var IndexRunningAboutAbouts= require('./routes/IndexRunningAboutAbouts');
var IndexBanner= require('./routes/IndexBanner');
var banner = require('./routes/banner');
var bann = require('./routes/bann');
var ban = require('./routes/ban');
var strategy = require('./routes/strategy');
var topic = require('./routes/topic');
var hot = require('./routes/hot');
var groups = require('./routes/groups');
var intelligent = require('./routes/intelligent');
var article = require('./routes/article');
var news = require('./routes/news');
var diet = require('./routes/diet');
var shopGoods = require('./routes/shopGoods');
var goodsInfo = require('./routes/goodsInfo');
var status=require('./routes/status')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/IndexDrillTraining', IndexDrillTraining);
app.use('/IndexDrillRecommend', IndexDrillRecommend);
app.use('/IndexDrillDaily', IndexDrillDaily);
app.use('/IndexDrillCourse', IndexDrillCourse);
app.use('/IndexRunningRouteRoutes', IndexRunningRouteRoutes);
app.use('/IndexRunningAboutAbouts', IndexRunningAboutAbouts);
app.use('/IndexBanner', IndexBanner);
app.use('/banner', banner);
app.use('/bann', bann);
app.use('/ban', ban);
app.use('/strategy', strategy);
app.use('/topic', topic);
app.use('/hot', hot);
app.use('/groups', groups);
app.use('/intelligent', intelligent);
app.use('/article', article);
app.use('/news', news);
app.use('/diet', diet);
app.use('/shopGoods', shopGoods);
app.use('/goodsInfo', goodsInfo);
app.use('/status',status)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
