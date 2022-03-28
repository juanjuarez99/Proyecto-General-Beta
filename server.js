const express = require("express");
const serveStatic = require("serve-static");

const v1Router = require("./api/v1/rutas");

const app = express();
const port = 3000;

app.use(require("cors")());
app.use(serveStatic("docs", { index: ["index.html"] }));

app.use("/api/v1/", v1Router);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
