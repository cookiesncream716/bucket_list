var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		create: function(req,res){
			// console.log(req.body)
			User.findOne({name: req.body.name}, function(err, result){
				// console.log(result);
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
		},
		show: function(req, res){
			console.log('show');
			console.log(req.params.id);
			User.findOne({_id: req.params.id}).populate('list').exec(function(err, user){
				if(err){
					console.log('could not find user' + err);
					var err = {error: 'Error finding User'}
					res.json(error);
				} else{
					console.log('found user')
					console.log(user);
					res.json(user);
				}
			})
		},
		showAll: function(req, res){
			console.log('showAll');
			User.find({}, function(err, results){
				if(err){
					console.log('err finding users');
					console.log(err);
				} else{
					res.json(results);
				}
			})
		}
	}
})();