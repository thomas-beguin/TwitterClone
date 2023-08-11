const express = require('express');
const app = express();
const router = express.Router();

app.set("view engine", "pug");

// When you need a view, go to the views folder
app.set("views", "views");

router.get("/", (req, res, next) => {
  res.status(200).render("register");
})

module.exports = router;
