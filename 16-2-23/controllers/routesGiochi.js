const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Nota = mongoose.model('giochiModel');

router.get('/giochi', (req, res) => {
    res.render("addgameupdt", {
        viewTitle: "Inserisci una nota"
    });
});

router.post('/giochi', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    let game = new Nota();
    game.name = req.body.name;
    game.genre = req.body.surname;
    game.developer = req.body.email;
    game.platform = req.body.mobile;
    game.price = req.body.address;
    game.save((err, doc) => {
        if (!err)
            res.redirect('gamelist');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Nota.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('gamelist'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

router.get('/gamelist', (req, res) => {
    Nota.find((err, docs) => {
        if (!err) {
            res.render("gamelist", {
                gamelist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


router.get('/giochi/:id', (req, res) => {
    Nota.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addgameupdt", {
                viewTitle: "Aggiornamento",
                game: doc
            });
        }
    });
});

router.get('/gamedelete/:id', (req, res) => {
    Nota.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/gamelist');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = router;