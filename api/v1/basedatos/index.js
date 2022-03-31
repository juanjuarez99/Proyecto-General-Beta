const { MongoClient } = require("mongodb");

const API_URI =
	"mongodb+srv://Juan:080299@cluster0.tpowb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const cliente = new MongoClient(API_URI);

module.exports = cliente;
