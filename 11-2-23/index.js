const express = require('express')
const session = require('cookie-session')
const articles = require('./articoli.json') 
const app = express()
const hbs = require('hbs')

const PORT = 3000

app.set('view engine', "hbs")
app.use(express.static('./public'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({secret: "la mia sessione"}))

app.post('/api/articles/post',(req,res)=>{
    const {id, title, body} = req.body
    if(!id || !title || !body){
        return res
        .status(400)
        .json({success:false, msg:'non trovo un dato necessario'})
    }
        return res
        .status(200)
        .json({success:true, data:[{articles}, person = {id:id, title:title, body:body}] })
})

app.put('/api/articles/:id', (req, res) => {
    const {id} = req.params
    const {title, body} = req.body

    const article = articles.find((article) => article.id === Number(id))

    if(!article){
        return res.status(400).json({success:false, msg:'id non trovato'})
    }

    const articleMod = articles.map((article) => {
        if(article.id === Number(id)){
            article.title = title
            article.body = body
        }
        return article
    })

    res.status(200).json({success:true, data:articleMod})
})

app.delete('/api/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id))

    if(!article){
        return res
        .status(400)
        .json({success: false, msg: `non c'è nessuno con id: ${req.params.id}`})
    }

    const articleMod = articles.filter((article) => article.id !== Number(req.params.id ))
    return res
    .status(200)
    .json({success: true, data: articleMod})
})

app.get('/home', (req, res) =>{
    res.render('hp')
})

app.get('/home-user', checkPage, (req, res) =>{
    res.render('hp', {
        link: "Articoli",
        titolo: "Home Page"
})
})

app.get('/login', (req, res) =>{
    res.render('login', {titolo: "Login"})
})

app.post('/login', (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(400)
        res.render('/login', {message: 'Dati richiesti mancanti'})
    }
    else{
        let name = 'Pippo'
        let password = 'sussypippo'
        let userAuth = {name:name, password:password}

        if(name == req.body.name && password == req.body.password){
            req.session.user = userAuth
            res.redirect('/home-user')
        }else{
            res.redirect('/warning')
        }
    }
})

app.get('/logout', (req, res) =>{
    req.session = null
    res.render('logout', {titolo: "Logout"})
})

app.get('/warning', (req, res) =>{
    
    res.render('warning', {titolo: "Warning"})  
})

// app.get('*', (req, res) =>{
//     res.render('404')
// })

function checkPage(req, res, next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}

app.get('/api/articles', checkPage, (req, res) =>{
    res.status(200).json({success:true, data:articles})
})

app.get('*', (req, res) =>{
    res.render('404')
})


app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})