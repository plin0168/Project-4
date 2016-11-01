var
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/User.js')

//creating session for cookie, does loggin in
passport.serializeUser(function(user, done){
  done(null, user.id)
})
//takes cookie, translate, find id, find user with id, go to user page; checks if user is logged in
passport.deserializeUser(function(id, done){
    User.findById(id, function(err,user){
      done(err,user)
    })
})

//PASSPORT LOCAL Strategy;


//Local signup
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  User.findOne({'local.email': email}, function(err,user){//creating error possibility actions
    // there is a problem
    if(err) return done(err)
    //check password length
    if(password.length < 5) return done(null,false, req.flash('signupMessage', 'Please make sure your password is longer than 4 characters. Ass.'))

    //email user is taken
    if(user){
      console.log("theres already a username");
       return done(null,false, req.flash('signupMessage', 'That email is taken. Sorry bro.'))
     }
    //create user if above doesn't happen
    var newUser = new User()
    newUser.local.name = req.body.name
    newUser.local.email = email
    newUser.local.password = password //**
    newUser.save(function(err){
      if(err) throw err
      done(null, newUser)//next after complete
    })
  })
}))

//local log-in:
passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req,email,password,done){
  //make sure that user exists by searching DB:
  User.findOne({'local.email':email}, function(err,user){
    if(err) return done(err)
      //no user email found, flash would say so
    if(!user) {return done(null, false)}
    //password is invalid
    if(!user.validPassword(password)) return done(null, false)

    return done(null,user)
  })
}))

module.exports = passport
