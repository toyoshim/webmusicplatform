var express = require("express");
var logfmt = require("logfmt");
var momolog = require("momolog");
var app = express();
momolog.connect(process.env.MONGOLAB_URI, 'log').then(function(logger) {
  app.use(logger);
  app.use(logfmt.requestLogger());
  app.use(express.static(__dirname));
  var port = Number(process.env.PORT) || 8080;

  app.listen(port, function () {
    console.log("Listening on " + port);
  });
});
