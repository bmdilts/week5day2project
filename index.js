const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/public', express.static('public'));

app.get("/", function(req, res){
  res.render("home", {users: data.users})
});

app.get("/users/:id", function(req, res){
  res.render("users", {users: data.users[req.params.id]})
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
