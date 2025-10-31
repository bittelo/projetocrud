const mysql = require('mysql2');

// criar as credenciais de conexao
const db = mysql.createConnection({
    // credenciais de acesso
    host: 'localhost',
    user: 'root',
    password: 'catolica',
    database: 'userdb',
    port: '3307'
});

//estabelecer a conexão
db.connect(err =>{
    if(err) throw err;
    console.log("banco de dados conectado");
});

// exportar a conexão
module.exports = db;