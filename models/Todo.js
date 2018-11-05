const mongoose = require('mongoose');
// ----------------------- make new schema for the model -----------------------

var schema = new mongoose.Schema({
	title:{type : String},
	completed:{type :String,default:false},
	date:{type:String,default:Date.now}
});
//----------------------------------create the model ---------------------------
var Todo = mongoose.model('todos',schema);
module.exports={Todo};

