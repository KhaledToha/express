const express = require('express');

const app = express();

app.get('/london',(req,res)=>{
  res.send('Hello London')
})

app.get('/Gaza',(req,res)=>{
  res.send('Hello Gaza')
})

app.get('/nazareth',(req,res)=>{
  res.send('Hello nazareth')
})

// create 3 handlers for 3 paths

app.listen(3000, () => {
  console.log('App running on port 3000');
});
