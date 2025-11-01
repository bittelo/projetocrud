const express = require('express');// importar framework
const app = express(); // instancia
const port = 3000;
const path = require('path');

// estabelecer onde estão os arquivos do front
app.use(express.static('public'));

// instanciar o banco de dados
const db = require('./db');

// rota
app.get('/', (req, res)=>{
    //res.send("front-funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

const apiRoutes = require('./routes/api');
app.use(express.json());
app.use('/api/users/', apiRoutes);

//porta do servidor
app.listen(port, () =>{
    console.log("servidor funcionando: https//localhost:3000");
});