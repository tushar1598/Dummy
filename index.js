const express = require("express");
const port = 3000;
const app = express();

app.use(express.static("assets"));

app.use(express.json());

app.use(express.urlencoded());

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(port, function () {
  console.log(`server is running successfully on port ${port}`);
});
