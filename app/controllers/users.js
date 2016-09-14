var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		create: function(req,res){
			console.log('**********************')
			console.log(req.body)
			User.findOne({name: req.body.name}, function(err, result){
				console.log(result);
				if(result == null){
					var user = User({name: req.body.name});
					user.save(function(err, results){
						if(err){
							console.log(err);
						} else{
							res.json(results);
						}
					})
				} else{
					res.json(result);
				}
			})
		}
	}
})();