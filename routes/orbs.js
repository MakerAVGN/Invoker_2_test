var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//var Orb = require("../models/orb").Orb
// var async = require("async")
//var checkAuth = require("../middleware/checkAuth.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с orbs');
});
  

/* Страница сфер */

router.get("/:nick", function(req, res, next) {
  db.query(`SELECT * FROM orbs WHERE orbs.nick = '${req.params.nick}'`, (err, orbs) => {
  if(err) {
  console.log(err);
  if(err) return next(err)
  } else {
  if(orbs.length == 0) return next(new Error("Нет такой сферы!"))
  var orb = orbs[0];
  res.render('orb', {
  title: orb.title,
  picture: orb.avatar,
  desc: orb.about
  })
  // result(null, results);
  }
  })
});


/*router.get('/:nick',checkAuth,function(req, res, next) {
    Orb.findOne({nick:req.params.nick}, function(err,orb){
        if(err) return next(err)
        if(!orb) return next(new Error("Нет такой сферы"))
        res.render('orb', {
            title: orb.title,
            picture: orb.avatar,
            desc: orb.desc
        }) 
    })
}) */

  
  module.exports = router