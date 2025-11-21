const express= require('express');
const app= express();

app.get('/home', (required, response) =>{
    response.contentType('application/html');
    response.status(200).send('<h1>Página Home com Express</h1>');
})

const port= 5000;

app.listen(port, () =>{
    console.log(`Servidor Express rodando em http://localhost:${port}`);
})
app.get('/users', (required, response) =>{
 const users= [
        {name: 'Alice', age: 30},
        {name: 'Bob', age: 25},
        {name: 'Charlie', age: 35},
        {name: 'Diana', age: 28},
        {name: 'Ethan', age: 32}

      ]
  response.json(users);
})
