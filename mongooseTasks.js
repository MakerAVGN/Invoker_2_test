var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1');
mongoose.set('strictQuery', true);
var Orb = require("./models/orb").Orb

var orb = new Orb({
title: "Quas",
nick: "quas"
})

console.log(orb)
orb.save(function(){
console.log(arguments)
})
