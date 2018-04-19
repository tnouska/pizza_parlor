const router = require('express').Router()
//brings in express from node-modules
const pool = require('../modules/pool')
//sources in pool.js

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "order"'
    pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
    })//end .then
    .catch((error) => {
        console.log('error in pizza.router.get: ', error);
        res.sendStatus(500)
    });//end pool.query to get all orders from order table
});//end router.get

router.post('/', (req,res)=>{
    let newOrder = req.body;
    const queryText = `INSERT INTO order (customer_name,order_total)`
    pool.query(queryText, [req.body.customer_name, req.body.order_total])
    .then((response)=>{
        res.sendStatus(201);
    })//end .then
    .catch((error)=>{
        console.log('error inside order.router.post: ', error);
        res.sendStatus(500);
    });//end pool.query to add to order table
});//end router.post
module.exports = router;