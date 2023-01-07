var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.set('strictQuery', true);

var Orb = mongoose.model('Orb', { name: String })

var sphere = new Orb({ name: 'Wex' })
sphere.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('E.M.P.')
    }
})


