const express = require('express');
const path = require('path');

const app = express();

// use static middleware
app.use(express.static(path.join(__dirname,'..','public')))
// send 'fruit.html' file for '/fruit' get path



app.listen(3000, () => {
  console.log('App running on port 3000');
});
