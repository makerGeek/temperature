var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.set('json spaces', 3);

var temp=0;
var randomHardcodedToken = "1651qsdf2165sdf231s6d8f4ea";

app.get('/set', function (req, res) {
  if(randomHardcodedToken==req.query.tok){
     console.log("TEMPERATURE CHANGED");
    temp=req.query.temp;
  }
  else console.log("WRONG TOKEN");

  res.send('{"temp":'+temp+'}');

})

app.get('*', function (req, res) {

  res.json({temp : temp});

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
