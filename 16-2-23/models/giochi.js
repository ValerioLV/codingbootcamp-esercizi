const mongoose = require('mongoose');

var giochiSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    genre: {
        type: String,
      
    },
    developer: {
        type: String
    },
    platform: {
        type: String
    },
    price: {
        type: String
    }
});

mongoose.model('giochiModel', giochiSchema);