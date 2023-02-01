const http = require('http')
var url = require('url')


const HOSTNAME = "localhost"
const PORT = 3001
const artTitle = "Articoli belli"
const comTitle = "Commenti belli"
const utTitle = "Utenti belli"

let paginaArt = `<!doctype html>
<html>
    <head>
    </head>
    <body>
        <b>${artTitle}</b>
    </body>
</html>`

let paginaCom = `<!doctype html>
<html>
    <head>
    </head>
    <body>
        <b>${comTitle}</b>
    </body>
</html>`

let paginaUt = `<!doctype html>
<html>
    <head>
    </head>
    <body>
        <b>${utTitle}</b>
    </body>
</html>`


const server = http.createServer((req, res) => {
    
    if(req.url === '/articoli'){
            res.writeHead(200, {  
                'Content-Type': 'text/plain'})
            res.write(paginaArt);  
            res.end();
            }

    else if(req.url === '/commenti'){
        res.writeHead(200, {  
                'Content-Type': 'text/plain' });  
            res.write(paginaCom);  
            res.end();
        }
    
    else if(req.url === '/utenti'){
        res.writeHead(200, {  
            'Content-Type': 'text/plain' });  
        res.write(paginaUt);  
        res.end();
    }

    if(res.statusCode = 404){
        res.end()
    }
    
})
server.listen(PORT)
console.log(HOSTNAME)

