// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");
// create an instance of express to serve our end points
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
	res.status(200).send({
		message: "server is running",
	});
});

const WriteTextToFileAsync = async (contentToWrite) => {
	fs.writeFile(
		"/home/bharat/Desktop/HMS-IIITBh/hostel-management-system/src/data.json",
		contentToWrite,
		(err) => {
			// console.log(contentToWrite);
			if (err) {
				console.log(err);
			} else {
				console.log("Done writing to file...");
			}
		}
	);
};

// Declare post / write route to accept incoming request with data
app.post("/write", async (req, res, next) => {
	// take the body from incoming request by using req.body and convert it into string
	// console.log(req.body);
	const requestContent = JSON.stringify(req.body);
	await WriteTextToFileAsync(requestContent);
});

app.use((req, res, next) =>
	res.status(404).send({ message: "404 page not find" })
);

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
});
