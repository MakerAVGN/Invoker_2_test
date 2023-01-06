var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Quas */
router.get('/quas', function(req, res, next) {
    res.send("<h1>Сфера Quas</h1>")
});

/* Страница Wex */
router.get('/wex', function(req, res, next) {
    res.send("<h1>Сфера Wex</h1>")
});

/* Страница Exort */
router.get('/exort', function(req, res, next) {
    res.send("<h1>Сфера Exort</h1>")
});

module.exports = router;
