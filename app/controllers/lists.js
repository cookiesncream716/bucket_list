var mongoose = require('mongoose');
var User = mongoose.model('User');
var List = mongoose.model('List');

module.exports =  (function(){
	return{
		showOne: function(req, res){
			console.log('showOne ' + req.params.id)
			List.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
				} else{
					res.json(result)
				}
			})
		}
	}
})();