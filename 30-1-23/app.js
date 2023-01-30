var http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Pagina iniziale");
    }
        
    else if(req.url === '/studenti'){
        res.end("Lista Studenti");
    }

    else if(req.url === '/corsi')
        {res.end("Lista corsi");
    }

    else{
        res.writeHead(404)
        res.end("pagina non esistente");
    }
});

server.listen(8000);