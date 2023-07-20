const express = require('express')
// const app = express()
// const jwt = require('jsonwebtoken')
const authenticate = require('../verifyToken.js')
const client = require('../connection/db.js')
const bodyParser = require('body-parser')

const router = express.Router()





router.use(bodyParser.json())
router.use(authenticate)




//delete item from cart

router.post("/delete", (req,res)=>{
    console.log(req.body)
    const id = req.body.id
    try{
       const query = `DELETE FROM cart_info WHERE id = ${id}`
     client.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).send("Item deleted.",result)
        }
       })
    }catch(err){
        console.log(err)
    }
})

//menu 
router.get('/menu', (req, res)=>{
    // console.log(req)
    client.query(`Select * from menu `, (err, result)=>{
        if(!err){
            console.log("authenticated")
            res.send(result.rows);
            // console.log(result.rows 
        }
    });
    client.end;
})

//checkout

router.post('/checkout/:id' ,(req,res)=>{
    const id = req.params.id
    const query = `select * from cart_info where userid =${id}`
    client.query(query,(err,results)=>{
        if(err){
            console.log(err)
        }else{
            for(let i=0;results.rows.length>i;i++){
                console.log(results.rows[i])
                let { userid,name,price} = results.rows[i]
                const query =`insert into checkout (menu_name,price,user_id) values ('${name}',${price},${userid})`
                client.query(query,(err,result)=>{
                    if(err){
                        console.log(err)
                        console.log(result)
                    }else{
                        const query =`delete from cart_info where userid=${userid}`
                        client.query(query,(err,result)=>{
                            if(err){
                                console.log(err)
                                console.log(result)
                            }else{
                               return res.json({user:1})
                               
                            }
                        })
                    }
                })
            }
        }
    })
})


//add to cart


router.post("/addtocart",async (req,res)=>{
    console.log(req.body)
    let {user_id,menu_id,name,price} = req.body

    try{
        const query = `select * from cart_info where menu_id = ${menu_id}`
        client.query(query,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
               if(result.rows.length>0){
               const quantity= result.rows[0].quantity +1
               price = quantity * price
               const updateQuery = `UPDATE cart_info
               SET quantity = ${quantity}, price = ${price}
               WHERE  menu_id = ${menu_id};`
               client.query(updateQuery,(err,result)=>{
                if(err){
                    console.log(err)
                    console.log(result)
                }
                else{
                    res.status(200).send("added to cart")
                }
               })

               }else{
                const insertQuery ="INSERT INTO cart_info (userId,menu_id,name,price) values ($1,$2,$3,$4)"
                const {rows} = client.query(insertQuery,[user_id,menu_id,name,price])    
                console.log(rows)
                return res.status(200).json({mess:"product added to cart"})
               }
            }
        })

}
catch(err){
    console.log(err)
    return res.status(500).json({mess:err})
}
})

//cart info


router.get('/cartInfo/:id',(req,res)=>{
    const id = req.params.id
    
    const query = `SELECT * FROM cart_info WHERE userId = ${id}`
    
    client.query(query, (err, result)=>{
        if(!err){
    
                return res.send(result.rows)
            
        }
        
    })
    const  rows = client.query(query)
    console.log(rows)
    
})
module.exports = router