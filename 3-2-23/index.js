const express = require('express')

const app = express()
const PORT = 8080

app.use(express.static('public'));

app.get('/', (req, res) =>{  
    res.sendFile(__dirname + '/public/HP.html')
})

app.get('/aperture/ckOp', (req, res) =>{
    res.sendFile(__dirname + 'aperture/ckOp.html')
})

app.get('/aperture/itaOp', (req, res) =>{
    res.sendFile(__dirname + 'aperture/itaOp.html')
})

app.get('/aperture/lndOp', (req, res) =>{
    res.sendFile(__dirname + 'aperture/lndOp.html')
})

app.get('/aperture/scOp', (req, res) =>{
    res.sendFile(__dirname + 'aperture/scOp.html')
})

app.get('/chi-sono', (req, res) =>{
    res.sendFile(__dirname + 'chi-sono.html')
})

app.get('*', (req, res) => {
    res.send('Pagina non esistente')
    console.log(res)
})



app.listen(PORT, () =>{
 console.log(`Server attivo su ${PORT}`)
})