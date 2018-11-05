var data = [{item:'work at 8 am '},{item:'go to gym 5 pm '},{item:'pet my dog '}]
const {mongoose} = require('../config/db');
const {Todo} = require('../models/Todo');
const bodyparser = require('body-parser');
var urlencodedparser= bodyparser.urlencoded({extended:false});
module.exports=function (app) {
	app.get('/',function (req,res) {
		Todo.find({},function (err,data) {
			if (err) {
				return console.log(err);
			}
			res.render('index.ejs',{list:data});
		});
		
	});
	app.post('/',urlencodedparser,function (req,res) {
		var todo = new Todo({
        	title:req.body.item
        });
        todo.save(function(err,data){
	       if (err) {
		   return console.log(err);
	       }
	      res.json(data);
        });
		
	});
	app.delete('/todo/:item',function (req,res) {
		// body...

		Todo.find({title:req.params.item.replace(/\-/g,' ')}).remove(function (err,data) {
			if (err) {
				return console.log(err);
			}
			res.json(data);
		});

		
		
		
		  
	});

};