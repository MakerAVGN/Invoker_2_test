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
    async.parallel([
            function(callback){
                Orb.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Orb.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var orb = result[0]
            var orbs = result[1] || []
            if(!orb) return next(new Error("There was no such cаr in MidNightClub, maybe you made a mistake in your request?"))
            res.render('orb', {
                title: orb.title,
                picture: orb.avatar,
                desc: orb.desc,
                menu: orbs
            });
        })
  })
  
  module.exports = router

