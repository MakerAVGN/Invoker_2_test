var express = require('express');
var router = express.Router();
var Orb = require("../models/orb").Orb
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с orbs');
});

/* Страница машин */


router.get('/:nick', function(req, res, next) {
    Orb.findOne({nick:req.params.nick}, function(err,orb){
        if(err) return next(err)
        if(!orb) return next(new Error("Нет такой сферы"))
        res.render('orb', {
            title: orb.title,
            picture: orb.avatar,
            desc: orb.desc
        }) 
    })
})

  
  module.exports = router