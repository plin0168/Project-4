var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),// used to see request
  bodyParser = require('body-parser'),//get body-parser
  port = process.env.PORT || 3000, //set port for our app
  apiRouter = express.Router(), //get an instance of the express Router
  User = require('./server/models/User.js'),
  passport = require('passport'),
  passportConfig = require('./server/config/passport.js'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  apiRoutes = require('./server/routes/games.js')

//mongoose connection
mongoose.connect('mongodb://localhost/', function(err){
  if(err) return console.log('there seems to be an issue connecting..')
  console.log('Connected. Sweet! :]');
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static('client'))

app.use('/api', apiRoutes)

app.get('*', function(req,res){
  res.sendFile('/client/index.html', {root:'/'})
})



  app.listen(port, function(){
  	console.log("Server running on port", port)
  })
