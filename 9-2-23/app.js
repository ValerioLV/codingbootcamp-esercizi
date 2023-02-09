const express = require('express')
const hbs = require('hbs')
const myPreferences = { color: "black", season: "winter", pet: "cane" }


const encodeURL = express.urlencoded({extended: false})
const app = express()
const PORT = 3000
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))

app.get('/' , (req, res) =>{
    res.render('home' ,{
        nome: "Pippo",
        titolo: "Esercizio node.js",
        ...myPreferences
    });
})


app.get('/about' , (req, res) =>{
    res.render('about', {
        titolo: "Chi sono",
    })
})

app.get('/mi-presento', (req, res) => {
    res.render('mi-presento')
})

app.post('/mi-presento', encodeURL, (req, res) => {
    console.log(req.body.fname)
    res.render('login', {
        fname: req.body.fname,
        lname: req.body.lname,
        desc: req.body.desc
    })
    
})


app.listen(PORT, () =>{
    console.log(`Server attivo su ${PORT}`)
})