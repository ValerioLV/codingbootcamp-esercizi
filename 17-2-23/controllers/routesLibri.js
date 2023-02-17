const express = require('express');
let routerLibri = express.Router();

const mongoose = require('mongoose');
const Libro = mongoose.model('libroModel');

routerLibri.get('/', (req, res) => {
    res.render("addupbook", {
        viewTitle: "Inserisci un libro"
    });
});

routerLibri.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    let libro = new Libro();
    libro.title = req.body.title;
    console.log(req.body.title)
    libro.author = req.body.author;
    libro.pages = req.body.pages;
    libro.price = req.body.price;
    
    libro.save((err, doc) => {
        if (!err)
            res.redirect('/libro/booklist');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Libro.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/libro/booklist'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}


routerLibri.get('/booklist', (req, res) => {
    Libro.find((err, docs) =>{
        if(!err) {
            res.render("listBook", {
                viewTitle: "vedi i libri",
                libro: docs
            }) 
        }
        else{
            console.log(`Errore ${err}`)
        }
    })
            
});

routerLibri.get('/libro/:_id', (req, res) => {
    Libro.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.render("addupbook", {
                viewTitle: "Aggiornamento",
                libro: doc
            });
        }
    });
});

routerLibri.get('/deleteBook/:id', (req, res) => {
    Libro.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) {
            res.redirect('/listBook');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});



module.exports = routerLibri;
