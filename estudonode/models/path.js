const path= require('path');

// Basename


console.log('Basename:', path.basename(__filename)); 

// Directory name
console.log('Directory name:', path.dirname(__filename));

// File extension
console.log('File extension:', path.extname(__filename));

// Criar objeto path
console.log('Parse:', path.parse(__filename));

// Join= junta caminhos de arquivos
// console.log('Join:', path.join(__dirname, 'test', 'hello.html'));

// Resolve
console.log('Resolve:', path.resolve('src', 'models', 'path.js'));

// Normalize
console.log('Normalize:', path.normalize('/src/models//path.js'));

// Is Absolute
console.log('Is Absolute:', path.isAbsolute(__dirname));

// Relative
console.log('Relative:', path.relative(__dirname, '/src/models/path.js'));
