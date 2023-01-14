var express = require('express')
var router = express.Router()
var Orb = require("../models/orb").Orb

router.get('/', function(req, res, next) {
    Orb.find({},{_id:0,title:1,nick:1},function(err,menu){
        res.render('index', {
                                title: 'Express',
                                counter:req.session.counter
                            });
    })

});


module.exports = router;