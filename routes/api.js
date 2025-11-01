const express = require('express');
const router = express.Router();
const db = require ('../db');

router.post('/', (req, res) =>{
    const{nome, email} = req.body;

    db.query('INSERT INTO users (nome, email) VALUES(?, ?)', [nome, email],
    (err, result) =>{
        if (err) res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email});
    
        }
    );
});

module.exports = router;


