var data = [{item:'work at 8 am '},{item:'go to gym 5 pm '},{item:'pet my dog '}]
const bodyparser = require('body-parser');
var urlencodedparser= bodyparser.urlencoded({extended:false});
module.exports=function (app) {
	// body...
	app.get('/',function (req,res) {
		// body...
		res.render('index.ejs',{list:data});
	});
	app.post('/',urlencodedparser,function (req,res) {
		// body...
		data.push(req.body);
		res.json(data); 
	});
	app.delete('/todo/:item',function (req,res) {
		// body...

		data = data.filter(function (todo) {
			// body...
			return todo.item.replace(/ /g,'-') !== req.params.item;
			
		});
		res.json(data);  
	});

};