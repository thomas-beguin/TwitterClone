const mongoose = require('mongoose');

class Database {

  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect('mongodb+srv://thombeguin:twitterClone@cluster0.4oesoxm.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log('Database connection successful')
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

module.exports = new Database();
