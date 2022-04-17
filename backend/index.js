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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})