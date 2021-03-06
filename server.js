const express = require("express");
const serveStatic = require("serve-static");

const v1Router = require("./api/v1/rutas");

const app = express();
const port = process.env.PORT || 80;

app.use(require("cors")());
app.use(express.json());
app.use(serveStatic("dist", { index: ["index.html"] }));

app.use("/api/v1/", v1Router);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
