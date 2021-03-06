var
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
      name: String,
      description: String,
      image: String
    },{timestamps:true}
  )

  userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }

  userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.local.password)
  }
  //** rehash password when edit update complete
  userSchema.pre('save', function(next){
    if(!this.isModified('local.password')) return next()
    this.local.password = this.generateHash(this.local.password)
    next()
  })

  var User = mongoose.model('User', userSchema)
  module.exports = User
