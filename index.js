const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const models = require('./models');

const users = require('./routes/api/users');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

models.sequelize.sync({
  force: false
});

models.sequelize.authenticate().then(() => {
  console.log(`Connected to the db.`)
})

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));