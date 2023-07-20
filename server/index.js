const express = require("express")
const cors = require('cors')
const client = require("./connection/db")
const app = express()
const multer = require('multer')
const fs = require('fs')
const loginRouter = require("./routes/loginRouter.js")
const userRouter = require("./routes/userRouter.js")
const adminRouter = require("./routes/adminRouter.js")

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
app.use('/',loginRouter)
app.use('/',userRouter)
app.use('/',adminRouter)


