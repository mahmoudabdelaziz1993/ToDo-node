var todoContoller= require('./controller/todocontroller.js');
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.listen(3000);
app.use(express.static('./public'));
todoContoller(app);
console.log('127.0.0.1:3000');