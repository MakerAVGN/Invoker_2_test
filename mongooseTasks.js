var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.set('strictQuery', true);

var schema = mongoose.Schema({ name: String })

schema.methods.attribute= function(){
    console.log(this.get("name") + " прибавил атрибуты")
}

var Orb = mongoose.model('Orb', schema);

var sphere = new Orb({ name: 'Exort' })
sphere.save(function (err) {
   sphere.attribute()
})
