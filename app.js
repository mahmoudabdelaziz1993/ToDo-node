var todoContoller= require('./controller/todocontroller.js');
const express = require('express');
const port = process.env.PORT || 3000 ;
const app = express();
app.set('view engine','ejs');
app.listen(port);
app.use(express.static('./public'));
todoContoller(app);
console.log(`port ${port}`);