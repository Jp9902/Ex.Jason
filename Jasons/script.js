const { write } = require('fs');
const http = require('http');
const { writeHeapSnapshot } = require('v8');

const server = http.createServer((req, res) => {
    //rota principal
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem vindo aos Jasons');
    }
    //rota para a pagina do cliente
    else if (req.url === '/jogos_classicos.json') {
        res.writeHead(200, ('Content-Type', 'text/plain'));
        res.end('JogosClassicos');
    }

    //ROTA PARA A PAGINA DO FORNECEDOR
    else if (req.url === '/jogos_esportivos.json') {
        res.writeHead(200, ('Content-Type', 'text/plain'));
        res.end('JogosEsportivos');
    }

    //ROTA PARA A PAGINA DO PRODUTO
    else if (req.url === '/jogos_luxo.json') {
        res.writeHead(200, ('Content-Type', 'text/plain'));
        res.end('JogosLuxo');
    }

    else {
        res.writeHead(200, ('Content-Type', 'text/plain'));
        res.end('ERROR');

    }
});

const PORT = 3010;
server.listen(PORT, () => {
    console.log(`Servidor rodadno em http://localhost:${PORT}`);


});