var
  Game = require('../models/User.js'),
  seeds = require('../seeds.js')


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  seed
}

function index(req,res){
  Game.find({}, function(err,games){
    if(err) throw err
    res.json(games)
  })
}

function show(req,res){
  Game.findById(req.params.id, function(err,games){
    if(err) throw err
    res.json(game)
  })
}

function create(req,res){
  Game.create(req.body, function(err,game){
    if(err)throw err
    res.json({success:true, message:"Post created!", game:game})
  })
}

function update(req,res){
  Game.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err,game){
    if(err)throw err
    res.json({success:true, message: "Post updated!", game:game})
  })
}

function destroy(req,res){
  Game.findByIdAndRemove(req.params.id, function(err){
    if(err)throw err
    res.json({success:true, message: "Post Deleted"})
  })
}

function seed(req,res){
  Game.remove({}, function(err){
    if(err) throw err
    Game.insertMany(seeds, function(err,games){
      if(err) throw err
      res.json({success:true, message: "Posts created!"})
    })
  })
}
