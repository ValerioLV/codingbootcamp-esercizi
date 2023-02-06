const express = require('express')
const authorize = require('./auth')
const libri = require('./libri.json')

const app = express()
const PORT = 5000

app.use(express.static('public'));

app.get('/', (req, res) =>{  
    res.sendFile(__dirname + '/public/hp.html')

})

app.get('/lista', (req, res) => {
    res.sendFile(__dirname + 'lista.html')
    res.json(lista)
    res.end()
})

app.get('/api-segreta', authorize, (req, res) => {
    const listaFiltro = libri.filter((value) => value.id >= 2)
    
    res.json(listaFiltro)
})

app.listen(PORT)