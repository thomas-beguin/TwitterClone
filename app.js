const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware');

const server = app.listen(port, () => { console.log(`Listening on port: ${port}`)});

app.set("view engine", "pug");
// When you need a view, go to the views folder
app.set("views", "views");

const loginRoute = require('./routes/loginRoutes');

app.use("/login", loginRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

  const payload = {
    pageTitle: "Home"
  }
  res.status(200).render("home", payload);
})
