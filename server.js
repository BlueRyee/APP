const express =require("express")
require('dotenv/config')

// creating an express app
const app = express()


// get method
// http-hyper text markup protocal
// app.get('path', fxn)

app.get('/' ,(req,res)=>{
    res.send('Hey code queen');
})
app.listen(process.env.PORT, ()=>{console.log('connected to port')});

// NODEMON
// Cant type anything TYPE CTRL+C