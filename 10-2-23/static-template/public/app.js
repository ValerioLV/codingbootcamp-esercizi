const express = require('express')
const hbs = require('hbs')
const path = require('path')


const router = require('../router')
const app = express()
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, './views/partials'))
app.use(express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use( '/', router)

app.use('/about', router)

app.use('/contatti', router)

app.use('/formazione', router)

app.use('/web-design', router)

app.use('*', router)



app.listen(3000, () =>{
    console.log(`server attivo`)
}) 