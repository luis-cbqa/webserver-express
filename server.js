const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function(req, res) {
	res.render("home", {
		name: "Luis"
	});
});

app.get("/about", function(req, res) {
	res.render("about");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
