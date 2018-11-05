const mongoose = require('mongoose');
const URL = 'mongodb://phantom:threedays3@ds251223.mlab.com:51223/todophantom';
mongoose.promise = global.promise;
//-------------------------------------- connect to database ------------------
mongoose.connect(URL);