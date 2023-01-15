
var User = require("./../models/user").User


module.exports = function(req,res,next) {
    res.locals.user = null

    User.findById(req.session.user, function (err, user) {
        if (err)
            return next(err)
        res.locals.user = user;
        next();
    })
}

// Подключение модели, поиск пользователя по _id пользователя, сохраненного в сессии, создание глобальной пременной user и exports middleware функции.


