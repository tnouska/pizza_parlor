const router = require('express').Router()
//brings in express from node-modules
const pool = require('../modules/pool')
//sources in pool.js

router.get('/', (req,res)=>{
    const queryText = 'SELECT * from pizza'
    pool.query(queryText).then((response)=>{
        res.send(response.rows);
    }).catch((error)=>{
        console.log('error in pizza.router.get: ', error);
        res.sendStatus(500)
    });//end pool.query to get all menu items
});//end router.get




module.exports = router