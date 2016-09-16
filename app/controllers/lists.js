var mongoose = require('mongoose');
var User = mongoose.model('User');
var List = mongoose.model('List');

module.exports =  (function(){
	return{
		// showOne: function(req, res){
		// 	console.log('showOne ' + req.params.id)
		// 	User.findOne({_id: req.params.id}).populate('list').exec(function(err, user){
		// 		if(err){
		// 			console.log('could not find user' + err);
		// 			var error = {error:'Error finding User'}
		// 			res.json(error);
		// 		} else{
		// 			res.json(user)
		// 		}
		// 	})
		// },
		create: function(req, res){
			console.log(req.body)
			User.findOne({_id: req.body.id}, function(err, user){
				console.log('USER' + user)
				var newItem = new  List(req.body);
				console.log(newItem);
				newItem._user = user._id;
				user.list.push(newItem);
				newItem.save(function(err){
					if(err){
						console.log('err saving list' + err)
					} else{
						user.save(function(err, results){
							if(err){
								console.log('err saving user' + err);
							} else{
								res.json(results);
							}
						})
					}
				})
			})
		}
	}
})();