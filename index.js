const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const bookstoreRoutes = require('./routes/BookRoutes');
const app = express();
const port = process.env.APP_PORT || 3000;

// Parse incoming JSON requests
app.use(bodyParser.json());

const exampleRoute = require("./routes/examples");
//const bookRoutes = require('./routes/index');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api/v1/example", exampleRoute);
app.use('/', bookstoreRoutes);

// app.get('/', (req, res) => {
//   res.json('Okay')
// });

app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);
