var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Salmon Creek", image: "https://live.staticflickr.com/4079/4874694794_87362a41ea_b.jpg"},
		{name: "Granite Hill", image: "https://live.staticflickr.com/2756/4095405210_15690be30d_m.jpg"},
		{name: "Mountain Goat's Rest", image: "https://live.staticflickr.com/4139/4874695252_d16bf670bb_b.jpg"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	// res.send("you hit the post route")
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("The campgrounds server has started!");
});