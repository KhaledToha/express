const express = require('express');
const path = require('path');
const compression = require('compression');

const router = require('./controllers/index.js')

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);

app.use('/',router)



app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));
});
