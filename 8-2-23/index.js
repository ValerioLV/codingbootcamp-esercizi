const express = require('express')
const articles = require('./articoli.json') 
const app = express()

const PORT = 3000
const encodeURL = express.urlencoded({extended: false})

app.use(express.static('./public'))



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/api/articles',(req,res)=>{
    res.status(200).json({success:true, data:articles})
})

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

app.get('/api/login', (req, res) =>{
    res.sendFile(__dirname + '/form.html')
})

app.post('/api/login', encodeURL, (req, res) => {
    res.sendStatus(200)
    console.log(req.body)
})


app.listen(PORT,(req, res)=>{
    console.log(`Server in ascolto sulla porta ${PORT}`)
})