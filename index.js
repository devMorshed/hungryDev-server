const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const about = require("./data/about.json");
const chefs = require("./data/data.json");
const blogs = require("./data/blogs.json")
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hungry Dev is running");
});

app.get("/chefs", (req, res) => {
	res.send(chefs.chefs);
});

app.get("/chefs/:id", (req, res) => {
	const id = req.params.id;
	const chefData = chefs.chefs.find((eachChef) => eachChef.id === id);
	res.send(chefData);
});

app.get("/blogs", (req, res) => {
	res.send(blogs.blogs);
});

app.get("/about", (req, res) => {
	res.send(about);
});


app.listen(port, () => {
	console.log(`Hungry Dev API is running on port: ${port}`);
});
