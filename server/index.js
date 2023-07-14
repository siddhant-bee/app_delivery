const express = require("express")
const cors = require('cors')
const client = require("./connection/db")
const app = express()
const multer = require('multer')
const fs = require('fs')
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
const bodyParser = require("body-parser");
const upload = multer({dest: "uploads/",
    limits: {
      fieldSize: 50 * 1024 * 1024 // 10MB
    }
  });
app.use(bodyParser.json());
app.use(cors());
const PORT = 5000
app.listen(PORT,console.log(`Server is running at ${PORT}`))






//get all users 
app.get('/user', (req, res)=>{
    client.query(`Select * from public.user`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            console.log(result.rows)
            
        }
    });
    client.end;
})
// login 
  app.post('/login', (req, res)=>{
    const { email, password } = req.body
    console.log(email,password)
    let query=`Select * from  public.user where email='${email}' and password='${password}'`;
    console.log(query);
    client.query(`Select * from  public.user where email='${email}' and password='${password}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            
        }
    });
    client.end;
})

// menu 
app.get('/menu', (req, res)=>{
    client.query(`Select * from public.menu`, (err, result)=>{
        if(!err){
            res.send(result.rows);
            // console.log(result.rows)
            
        }
    });
    client.end;
})









//signup

app.post('/users', (req, res)=> {
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
           return res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})





//image logic 
app.post("/imageUpload", upload.array("images[]") ,async (req,res)=>{
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



// addtocart


app.post("/addtocart",async (req,res)=>{
    console.log(req.body)
    const {user_id,menu_id,name,price} = req.body
    try{
    const insertQuery ="INSERT INTO cart_info (userId,menu_id,name,price) values ($1,$2,$3,$4)"
    const {rows} = await client.query(insertQuery,[user_id,menu_id,name,price])    
    console.log(rows)
    return res.status(200).json({mess:"product added to cart"})
}
catch(err){
    console.log(err)
    return res.status(500).json({mess:err})
}
})