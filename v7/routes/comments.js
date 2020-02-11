var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/camground");
var Comment = require("../models/comment");

// comments new
router.get("/new", isLoggedIn, function(req, res){
	//find campground by ID
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	});
});

// comments create
router.post("/", isLoggedIn,function(req, res){
	//lookup camground using ID
	Campground.findById(req.params.id, function(err, camground){
		if(err){
			console.log(err);
			res.redirect("/camgrounds");
		} else {
			Comment.create(req.body.comment, function(err, comment){
				if(err){
					console.log(err);
				} else {
					campgound.comments.push(comment);
					camground.save();
					res.redirect('/camgrounds/' + camground._id);
				}
			});
		}
	});
});

// middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports = router;