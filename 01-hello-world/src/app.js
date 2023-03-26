// create express app
const express = require('express')
const port = 3000 

const app = express()

// route handler

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// listen for connections

app.listen(3000, ()=>{
    console.log(`http://localhost:${port}`);
})
