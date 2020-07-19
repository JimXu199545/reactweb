var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
var IncomingForm = require("formidable").IncomingForm;
app.use(cors())

app.post('/upload',function(req, res) {
     
    var form = new IncomingForm();

        form.on("file", (field, file) => {
            console.log(field)
            console.log(file)
        });
        form.on("end", () => {
            res.json("OK");
        });
        form.parse(req);
});

app.listen(8000, function() {

    console.log('App running on port 8000');

});