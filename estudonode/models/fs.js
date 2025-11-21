const fs= require('fs');
const path= require('path');

//Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error)=> { 

//     if (error){
//         return console.log('Erro ao criar a pasta:', error);
//     }
//     console.log('Pasta criada com sucesso!');
// })

//Criar um arquivo e escrever nele= a pasta já precisa existir
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (error)=> {
    if (error){
        return console.log('Erro ao criar o arquivo:', error);
    }
    console.log('Arquivo criado com sucesso!');
    //Adicionar mais conteúdo ao arquivo
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nAdicionando uma nova linha!', (error)=> {
    if (error){
        return console.log('Erro ao adicionar ao arquivo:', error);
    }
    console.log('Arquivo atualizado com sucesso!');
    
});
});


//Ler o arquivo
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (error, data)=> {
    if (error){
        return console.log('Erro ao ler o arquivo:', error);
    }
    console.log('Conteúdo do arquivo:', data);
});

//Renomear o arquivo
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-renamed.txt'), (error)=> {
    if (error){
        return console.log('Erro ao renomear o arquivo:', error);
    }
    console.log('Arquivo renomeado com sucesso!');
});
