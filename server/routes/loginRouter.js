const express = require('express')
// const jwt = require('jsonwebtoken')
const client = require('../connection/db.js')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.json())



//login
router.post('/login', (req, res)=>{
    const { email, password } = req.body
    console.log(email,password)
    // let query=`Select * from  public.user where email='${email}' and password='${password}'`;
    // console.log(query);
    client.query(`Select * from  public.user where email='${email}' and password='${password}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            
        }
    });
    client.end;
})




//signup

router.post('/users', (req, res)=> {
    const userss = req.body;

    client.query(`SELECT * FROM public.user WHERE email='${userss.email}'`, (err, result)=>{
        if(!err){
            if(result.rows[0]){
                return res.send('Email already in use')
            }
        }
    })
    client.end;

    let insertQuery = `INSERT INTO public.user (name, email, password, role) 
                       VALUES('${userss.name}', '${userss.email}', '${userss.password}','${userss.role}')`;
    console.log(insertQuery)

    client.query(insertQuery, (err, result)=>
    {
        if(!err){
            console.log(result);
           return res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
module.exports = router