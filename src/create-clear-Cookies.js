
var util = require('util')
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/', function (req, res) {
  res.send('Visit /createCookie');
});

app.get('/createCookie',function(req, res){
     	console.log('To view your cookie in web browser, go to developer tools and Application. Then to Cookies')
	res.cookie('PL_Cookie' , 'Cookie_for_PL!').send('Cookie is set. Visit /seeCookie to view. Visit /clearCookie to delete.');
});

app.get('/seeCookie', function(req, res){
     res.send("This is your cookie" + util.inspect(req.cookies))
})

app.get('/clearCookie', function(req,res){
     res.clearCookie('PL_Cookie');
     res.send('Cookie deleted');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
