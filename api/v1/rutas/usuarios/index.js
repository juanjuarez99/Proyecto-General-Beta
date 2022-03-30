const { Router } = require("express");
const router = new Router();

const { get, post, getOne, put, del } = require("./controlador");

router.get("/", get);
router.get("/:id", getOne);
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", del);

module.exports = router;
