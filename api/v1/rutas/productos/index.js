const { Router } = require("express");
const router = new Router();

const { get, post, getOne, put, menosUno, del } = require("./controlador");

router.get("/", get);
router.get("/:id", getOne);
router.post("/", post);
router.put("/:id", put);
router.put("/:id/dec", menosUno);
router.delete("/:id", del);

module.exports = router;
