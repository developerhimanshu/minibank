const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", router);

app.listen(port, () => {
  console.log("App is running on port " + port);
});
