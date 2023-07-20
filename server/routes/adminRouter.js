const express = require('express')
const client = require('../connection/db.js')
const bodyParser = require('body-parser')
const authenticate = require('../adminTokenVerification.js')
const multer = require('multer')
const fs = require('fs')

const router = express.Router()

router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ limit: '50mb', extended: true }));
const upload = multer({dest: "uploads/",
    limits: {
      fieldSize: 50 * 1024 * 1024 // 10MB
    }
  });

router.use(bodyParser.json())
router.use(authenticate)
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

//get all user

router.get('/user', (req, res)=>{
    client.query(`Select * from public.user`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            console.log(result.rows)
            
        }
    });
    client.end;
})



//logic to import image

router.post("/imageUpload", upload.array("images[]") ,async (req,res)=>{
    let imageBuffer = null
    const data = JSON.parse(req.body.item)
    const files = req.files
    try{
        if(files.length>0){
            const file = files[0]
            imageBuffer = fs.readFileSync(file.path)
        }
        // console.log("data: ",data)
        // console.log("image: ", imageBuffer)
        const insertQuery = "INSERT INTO menu (name , price,image ) VALUES ($1, $2, $3) RETURNING id"
            const { rows } = await client.query(insertQuery, [data.name,data.price,imageBuffer]);
            console.log(rows)
            return res.status(200).json({mess:"product added"})
    }catch(err){
        console.log(err)
        return res.status(500).json({mess:err})
    }
})

module.exports = router