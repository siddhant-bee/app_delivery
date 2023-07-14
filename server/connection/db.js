const {Client} = require('pg')
require('dotenv').config()

const client =new Client({
    host: "localhost",
    user: "siddhant",
    port: "5432", 
    password: "1234",
    database: "food_delivery"
})

client.connect(err=>{
    if(err) console.log(err)
    else console.log('Database connected')
})
module.exports = client