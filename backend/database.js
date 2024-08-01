const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
});

const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
