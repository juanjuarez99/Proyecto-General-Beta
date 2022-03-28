const express = require("express");
const serveStatic = require("serve-static");

const app = express();
const port = 3000;

app.use(require("cors")());
app.use(serveStatic("docs", { index: ["index.html"] }));

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
