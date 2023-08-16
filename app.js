const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('./database');

const server = app.listen(port, () => { console.log(`Listening on port: ${port}`)});

app.set("view engine", "pug");
app.set("views", "views"); // When you need a view, go to the views folder

app.use(express.static(path.join(__dirname, "public"))); // Everything in this file is using as a static file
app.use(bodyParser.urlencoded({extended: false}));

const loginRoute    = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use("/login",    loginRoute);
app.use("/register", registerRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

  const payload = {
    pageTitle: "Home"
  }
  res.status(200).render("home", payload);
})
