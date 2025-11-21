const http= require('http');

const port=8080;

const server= http.createServer((required, response) => {
    if(required.url === '/home'){
        response.writeHead(200, {'Content-Type': 'text/html'}); //200 significa que deu tudo certo
        response.end('< h1 > Página Home </h1 >');
    }
    if(required.url === '/about'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('< h1 > Página About </h1 >');
    }

    if(required.url === '/users'){
      const users= [
        {name: 'Alice', age: 30},
        {name: 'Bob', age: 25},
        {name: 'Charlie', age: 35},
        {name: 'Diana', age: 28},
        {name: 'Ethan', age: 32}

      ]
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(JSON.stringify(users)); //transforma o array em JSON
      }

    
})

server.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})