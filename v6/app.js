var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");
var seedDB = require("./seeds");

mongoose.connect("mongodb://localhost:27017/campgrounds", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Bailey is my son",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Campground.create(
// 	{
// 		name: "Granite Hill",
// 		image: "https://live.staticflickr.com/2756/4095405210_15690be30d_m.jpg",
// 		description: "This is a huge granite hill. No bathrooms. No water. But still a beautiful sight."
// 	}, 
// 	function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("newly created campground: ");
// 			console.log(campground);
// 		}
// 	});


app.get("/", function(req, res){
	res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds:allCampgrounds});
		}
	});
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
	// res.send("you hit the post route")
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc}
	// campgrounds.push(newCampground); - Goes with the commented out Campground.create up there
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
			//redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			//render show template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
			
		}
	});
});

// =============================================
// comments routes
// =============================================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
	//find campground by ID
	Campground.findById(req.params.id, function(err, campground){
		if(err) {
			console.log(err);
		} else {
			res.render("comments/new", {campground: campground});
		}
	});
});

app.post("/campgrounds/:id/comments", isLoggedIn,function(req, res){
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
	//create new comment
	//connect new comment to campground
	//redirect campgound show page
});

//AUTH routes

//show register form
app.get("/register", function(req, res){
	res.render("register");
});
//handle sign up logic
app.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/campgrounds");
		});
	});
});

//show login form
app.get("/login", function(req, res){
	res.render("login");
});
// handling login logic
app.post("/login", passport.authenticate("local", 
	{
		successRedirect: "/camgrounds",
		failureRedirect: "/login"
	}), function(req, res){
});

//logic route
app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/camgrounds");
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("The campgrounds server has started!");
});