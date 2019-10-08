const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./sequelize');

const app = express();

// Parse Application / JSON
app.use(bodyParser.json());
//Parse Application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// //Initialize an Instance of Sequelize
// const sequelize = new Sequelize({
//   database: "",
//   username: "",
//   password: "",
//   dialect: "mysql"
// });

// // Database Connection
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected successfully!'))
//   .catch(err => console.log('Database error ' + err));

// Test Route
app.get('/', (req, res) => {
  res.send("Hello World!!")
});

// Add Users
app.post('/api/register', (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then(user => res.json(user))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));