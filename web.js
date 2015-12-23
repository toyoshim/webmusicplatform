var express = require("express");
var logfmt = require("logfmt");
var momolog = require("momolog");
var app = express();
var log = momolog();
app.use(log.morgan());
app.use(logfmt.requestLogger());
app.use(express.static(__dirname));
var port = Number(process.env.PORT) || 8080;
log.connect(process.env.MONGOLAB_URI, 'log').then(function() {
  app.listen(port, function () {
    console.log("Listening on " + port);
  });
});
