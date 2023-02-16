const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://valeriozzo:SussyDatab@cluster0.xdjw2cu.mongodb.net/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (!err) {
        console.log('MongoDB connesso.')
    }
    else {
        console.log(`Problemi con la connessione:  ${err}`)
    }
});


require('./nota');
require('./giochi')