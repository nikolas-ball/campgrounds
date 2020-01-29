var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Salmon Creek", image: "https://live.staticflickr.com/4079/4874694794_87362a41ea_b.jpg"},
		{name: "Granite Hill", image: "https://live.staticflickr.com/2756/4095405210_15690be30d_m.jpg"},
		{name: "Mountain Goat's Rest", image: "https://live.staticflickr.com/4139/4874695252_d16bf670bb_b.jpg"}
	]
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("The campgrounds server has started!");
});