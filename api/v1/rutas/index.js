const { Router } = require("express");

const router = new Router();

const categorias = require("./categorias");
const productos = require("./productos");
const usuarios = require("./usuarios");
const ventas = require("./ventas");

router.use("/categorias", categorias);
router.use("/productos", productos);
router.use("/usuarios", usuarios);
router.use("/ventas", ventas);

module.exports = router;
