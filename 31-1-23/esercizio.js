const http = require('http')
const os = require('os')
var fs = require('fs');
var url = require('url')
// const { url } = require('inspector');
let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;
    
    if(req.url === '/')
        res.end(messaggio)

    else if(path === '/prodotti.html')
        fs.readFile(__dirname + path, function(err, data){
            if (err) {  
                res.writeHead(404);  
                res.write(err);  
                res.end();  
            } else {  
                res.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                res.write(data);  
                res.end();
            }
        })

    else if(path === '/clienti.html')
        fs.readFile(__dirname + path, function(err, data){
            if (err) {  
                res.writeHead(404);  
                res.write(err);  
                res.end();  
            } else {  
                res.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                res.write(data);  
                res.end();
            }
        })
})
server.listen(3001)
console.log(messaggio)
