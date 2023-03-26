// use express.Router() class and load it with controllers
const express = require('express')
const router = express.Router()


router.get('/fruit', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'fruit.html'));
  });
  
  router.post('/fruit', (req, res) => {
    console.log(req.body.name, req.body.image_url);
    res.redirect('/fruit');
  });
  
  router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
  });
  
  router.use((err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
  });


  module.exports = router