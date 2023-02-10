const express = require('express')


const router = express.Router()


router.get('/',  (req, res) =>{
    res.render('index', {
        titolo: "Home page"
    })
    
})

router.get('/about', (req, res) =>{
    res.render('about', {
        titolo: "About me"
    })
})

router.get('/contatti', (req, res) =>{
    res.render('contatti', {
        titolo: "Contatti"
    })
})

router.get('/formazione', (req, res) =>{
    res.render('formazione', {
        titolo: "Formazione"
    })
})

router.get('/web-design', (req, res) => {
    res.render('web-design', {
        titolo: "Web Design"
    })
})

router.get('*', (req, res) => {
    res.render('404')
})

module.exports = router