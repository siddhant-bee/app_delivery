const express = require('express')
// const jwt = require('jsonwebtoken')
const client = require('../connection/db.js')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())


//get order
router.get('/getorder', (req, res)=>{
    client.query(`Select * from checkout `, (err, result)=>{
        if(!err){
            res.send(result.rows);
            // console.log(result.rows)
            
        }
    });
    client.end;
})





module.exports = router