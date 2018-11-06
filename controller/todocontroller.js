var data = [{item:'work at 8 am '},{item:'go to gym 5 pm '},{item:'pet my dog '}]
const {mongoose} = require('../config/db');
const {Todo} = require('../models/Todo');
const bodyparser = require('body-parser');
var urlencodedparser= bodyparser.urlencoded({extended:false});
module.exports=function (app) {
	app.get('/',function (req,res) {
		Todo.find({completed: false},function (err,data) {
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
	// app.delete('/todo/:item',function (req,res) {
	// 	// body...

	// 	Todo.find({title:req.params.item.replace(/\-/g,' ')}).remove(function (err,data) {
	// 		if (err) {
	// 			return console.log(err);
	// 		}
	// 		res.json(data);
	// 	});
	// });
	app.patch('/todo/:item',function (req,res) {
		// body...

		Todo.find({title:req.params.item.replace(/\-/g,' ')},function (err,data) {
			// body...
			var datas = data[0];
			datas.set({completed:true}).save(function (err,data) {
			if (err) {console.log(err)}
				res.json(data)
			console.log(data);
		});});
		
	});
	// -------------------------------------api end points
	app.get('/api/todos',function (req,res) {
		Todo.find({},function (err,data) {
			if (err) {
				return res.send(err);
			}
			res.send(data)
		});
	});
	app.post('/api/todos',urlencodedparser,function (req,res) {
		var todo = new Todo({
        	title:req.body.item
        });
        todo.save(function(err,data){
	       if (err) {
		   return res.status(400).send(err);
	       }
	      res.send(data);
        });
	});
	// app.delete('/todo/:item',function (req,res) {
	// 	// body...

	// 	Todo.find({title:req.params.item.replace(/\-/g,' ')}).remove(function (err,data) {
	// 		if (err) {
	// 			return console.log(err);
	// 		}
	// 		res.json(data);
	// 	});
	// });

};