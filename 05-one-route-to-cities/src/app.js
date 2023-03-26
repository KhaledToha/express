const express = require('express');

const app = express();

app.use('/',(req,res)=>{
  res.send(`Hello ${req.originalUrl.split('/')[1]}`)
})

// create 1 handler for 3 paths

app.listen(3000, () => {
  console.log('App running on port 3000');
});
