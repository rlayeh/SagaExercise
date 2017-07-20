const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

const customHost = process.env.HOST || process.env.OPENSHIFT_NODEJS_IP;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.set("x-powered-by", false);

app.use(compression());
app.use(express.static("./dist", {
  etag: false,
  extensions: ["html"],
}));

app.use("/api/hello", (req, res) => {
  res.send(JSON.stringify({message: 'hello from the server :)'}));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

const listener = app.listen(port, host, () => {
  console.log('Express started at ' + prettyHost + ':' + port);
});
