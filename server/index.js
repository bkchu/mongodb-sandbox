require("dotenv").config();
const app = require("express")();
const { json } = require("body-parser");
const { CONNECTION_STRING, PORT = 3001 } = process.env;
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(json());

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

routes(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
