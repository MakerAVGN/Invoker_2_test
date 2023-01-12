var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1');
var Orb = require("../models/orb").Orb

var orb = new Orb({
title: "Quas",
nick: "quas"
})

console.log(orb)
orb.save(function(err, orb, affected){
console.log(orb.title)
})

