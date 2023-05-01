const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefs = require("./data/data.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hungry Dev is running");
});

app.get("/chefs", (req, res) => {
	res.send(chefs.chefs);
});

app.get("/chefs/:id", (req, res) => {
	const id = req.params.id;
	const chef = chefs.chefs.find((n) => n.id === id);
	res.send(chef);
});

app.listen(port, () => {
	console.log(`Hungry Dev API is running on port: ${port}`);
});
