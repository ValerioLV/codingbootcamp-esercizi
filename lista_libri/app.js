const http = require('http')
var fs = require('fs')
var url = require('url')

const server = http.createServer((req, res) => {
    var path = url.parse(req.url).pathname;    

    if(path === "/"){
        let HP = fs.readFileSync('home-page.html')
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(HP)
    }

    else if(path === "/chi-sono.html"){
        let CS = fs.readFileSync('chi-sono.html')
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(CS)
    }

    else if(path === "/api"){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        const ListJson = fs.readFileSync('lista.json', 'utf8')
        res.end(ListJson)
    }

    else{
        res.writeHead(404)
        res.end("Non trovato")
    }

}).listen(3000)