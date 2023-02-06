const authorize = (req, res, next) =>{
    const {user} = req.query

    if(user === 'pippo'){
        req.user = {nome: 'pippo'}
        next()
    }else{
        res.status(401).send('Non autorizzato')
    }
}

module.exports = authorize