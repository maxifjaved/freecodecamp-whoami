var http = require('http');
var express = require('express');

var _express = express();
_express.use('*',function(req,res){
  res.json({'ipaddress':req.connection.remoteAddress,"language":req.headers["accept-language"].split(',')[0],'software':process.platform + ' ' +process.arch});
})
var server = http.createServer(_express);

server.listen(process.env.PORT || 8080, process.env.IP || '0.0.0.0',function(){
  var addr = server.address();
  console.log('Sever is listen to : ', addr.address + ':'+ addr.port);
});
