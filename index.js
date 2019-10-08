const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');
const { User } = models;

const app = express();
// Parse Application / JSON
app.use(bodyParser.json());
//Parse Application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Test Route
app.get('/', (req, res) => {
  res.send("Hello World!!")
});

models.sequelize.authenticate().then(()=>{
  console.log(`Connected to the db.`)
})

// Add Users
app.post('/api/register', (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then(user => res.json(user))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));