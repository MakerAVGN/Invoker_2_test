var express = require('express');
var router = express.Router();
var Orb = require("../models/orb").Orb

  /* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с orbs');
});

module.exports = router;

router.get("/:nick", function(req, res, next) {
    Orb.findOne({nick:req.params.nick}, function(err,orb){
        if(err) return next(err)
        if(!cat) return next(new Error("НЕТ ТАКОЙ СФЕРЫ!"))
        res.render('orb', {
            title: orb.title,
            picture: orb.avatar,
            desc: orb.desc
        })
    })
})

