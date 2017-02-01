var express = require("express");
var upload = require("multer")();

var PORT = (process.env.PORT || 8080);

var app = express();

app.use(express.static("public"));

app.post("/api/fileanalyse/", upload.any(), function (req, res) {
	res.json(req.files[0].size);
});

app.get('/', function (req, res) {
	res.send('<html><head></head><body><p>Submit a file to view its filesize.</p> <form action="https://camper-api-filemetadata-ghoshal-rajarshi.c9users.io/api/fileanalyse" method="post" enctype="multipart/form-data"> <input type="file" name="file"> <input type="submit"> </form> </body></html>');
});

app.listen(PORT, function () {
	console.log("Node app is running on port", PORT);
});