let express = require('express');
let fs = require('fs');
let app = express();
let mkdirp = require('mkdirp');
let winston= require('winston');
// start server on the specified port and binding host
app.listen(80, function() {
    console.log("server started");

});

app.get('/health', function (req, res) {
  res.send({
      "Am I Healthy?": "Yes!"
  });

})

app.get('/', function (req, res) {
  res.send({
      "url": req.url,
      "Is ATB a great place to work?": "Yes!",
      "baseUrl": req.baseUrl,
      "originalUrl": req.originalUrl,
      "ENV": process.env.NAME,
      "headers": JSON.stringify(req.headers)
  });
})
