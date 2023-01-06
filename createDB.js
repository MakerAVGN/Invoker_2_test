var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("invoker");
database.dropDatabase()
database = client.db("invoker");
const orbs = database.collection("orbs");
const result = await orbs.insertOne({name:"Quas"});
console.log(`${result} прошло успешно!`);
} finally {
await client.close();
}
}
run()

