const express = require("express");
const bodyParser = require("body-parser")
const jsData = require("./data.json")
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));



const port = 8000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("/api",(req,res)=>{
    res.json(jsData);
    console.log('kooo');
})
// app.post("/home",(req,res)=>{
//     console.log(req.body);
// })

app.listen(port,()=> console.log('server started'))