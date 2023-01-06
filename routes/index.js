var express = require('express');
var router = express.Router();

  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: "Invoker",
        picture: "images/invoker.jpg",
      desc: "Добро пожаловать путник. Я - величайший маг и имя мне Карл. Вижу ты пришел не просто так, а чтобы узнать о моих сферах. Ты очень умен, раз прошел через все барьеры, поэтому я поведаю тебе о своей силе."
    });
 });

  /* Страница Quas */             
router.get('/quas', function(req, res, next) {
    res.render('invoker',{
      title: "Quas",
      picture: "images/invoker_quas.png",
      desc: "Сфера стихии льда. Позволяет управлять стихией льда и увеличивает здоровье персонажа. Каждая активная сфера увеличивает восстановление здоровья."
    });
});

  /* Страница Wex */
router.get('/wex', function(req, res, next) {
   res.render('invoker',{
    title: "Wex",
    picture: "images/invoker_wex.png",
    desc: "Сфера стихии молнии. Позволяет управлять стихией молнии и увеличивает ловкость персонажа. Каждая активная сфера увеличивает скорость атаки и передвижения."
  });
});
router.get('/exort', function(req, res, next) {
  res.render('invoker',{
    title: "Exort",
    picture: "images/invoker_exort.png",
    desc: "Сфера стихии огня. Позволяет управлять стихией огня и увеличивает интеллект персонажа. Каждая активная сфера увеличивает урон от атак."
  });
});
module.exports = router;
