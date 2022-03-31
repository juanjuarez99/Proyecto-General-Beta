const { Router } = require("express");
const router = new Router();

const { get, post, getOne, getProductos, put, del } = require("./controlador");

router.get("/", get);
router.get("/:id", getOne);
router.get("/:id/productos", getProductos);
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", del);

module.exports = router;
