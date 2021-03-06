//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
}
);

app.post("/", function(req, res) {

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);

   var result = num1 + num2;
   //console.log(req.body.num1);

    res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var bmi = weight / Math.pow(height, 2);

    res.send("Your BMI is " + bmi);
});

app.listen(3200, function() {
    console.log("Server is listening on port 3200.")
});


