const { Router } = require("express");
const router = new Router();

const { get, post, put, del } = require("./controlador");

router.get("/", get);
router.post("/", post);
router.put("/", put);
router.delete("/", del);

module.exports = router;
