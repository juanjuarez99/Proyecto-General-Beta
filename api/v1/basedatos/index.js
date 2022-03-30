const { MongoClient } = require("mongodb");

const API_URI =
	"mongodb+srv://marea:mongo123@cluster0.px8ls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const cliente = new MongoClient(API_URI);

module.exports = cliente;
