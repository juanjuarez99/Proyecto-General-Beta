const bd = require("../../basedatos");
const COLECCION = "productos";

exports.get = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd.db("cafeteria").collection(COLECCION).find({});
		const productos = await respuesta.toArray();
		res.send(productos);
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
			.collection(COLECCION)
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
			.collection(COLECCION)
			.findOne({ id: req.params.id });
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.put = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd
			.db("cafeteria")
			.collection(COLECCION)
			.updateOne({ id: req.params.id }, { $set: req.body });
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.menosUno = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd
			.db("cafeteria")
			.collection(COLECCION)
			.updateOne({ id: req.params.id }, { $inc: { stock: -1 } });
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};

exports.del = async (req, res) => {
	try {
		await bd.connect();
		const respuesta = await bd
			.db("cafeteria")
			.collection(COLECCION)
			.findOneAndDelete({ id: req.params.id });
		res.send(respuesta);
		await bd.close();
	} catch (error) {
		res.send({ error });
	}
};
