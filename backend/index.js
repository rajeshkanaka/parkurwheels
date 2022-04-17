<<<<<<< HEAD
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
const parkings = require("./routes/parkings");
const login = require("./routes/login");
app.use("/parking", parkings);
app.use("/login", login);
=======
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const cors = require("cors")
app.use(bodyParser.json())
const parkings = require('./routes/parkings')
const login = require('./routes/login')
const stct = require('./routes/cityState')
app.use('/parking', parkings)
app.use('/login', login)
app.use('/stct', stct)
>>>>>>> 1e92ef9793ca41d1247eadcdc473a9911404a439

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
