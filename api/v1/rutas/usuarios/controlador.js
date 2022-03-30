const bd = require("../../basedatos");

exports.get = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd.db("cafeteria").collection("usuarios").find({});
		const usuarios = await respuesta.toArray();
		res.send(usuarios);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.post = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd
			.db("cafeteria")
			.collection("usuarios")
			.insertOne(req.body);
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.getOne = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd
			.db("cafeteria")
			.collection("usuarios")
			.findOne({ nombre: req.params.id });
		console.log(respuesta);
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.put = (req, res) => {
	res.send("Hi user from controller");
};

exports.del = (req, res) => {
	res.send("Hi user from controller");
};
