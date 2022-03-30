const { Router } = require("express");

const router = new Router();

const usuarios = require("./usuarios");

router.use("/usuarios", usuarios);

module.exports = router;
