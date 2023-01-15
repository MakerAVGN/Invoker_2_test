var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE orbs;'
var seedQuery = 'INSERT INTO orbs (title, nick, avatar, about) VALUES ("Quas", "quas", "/images/invoker_quas.png", "Сфера стихии льда. Позволяет управлять стихией льда и увеличивает здоровье персонажа. Каждая активная сфера увеличивает восстановление здоровья."), ("Wex", "wex", "/images/invoker_wex.png", "Сфера стихии молнии. Позволяет управлять стихией молнии и увеличивает ловкость персонажа. Каждая активная сфера увеличивает скорость атаки и передвижения."), ("Exort", "exort", "/images/invoker_exort.png", "Сфера стихии огня. Позволяет управлять стихией огня и увеличивает интеллект персонажа. Каждая активная сфера увеличивает урон от атак.");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'invoker'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
