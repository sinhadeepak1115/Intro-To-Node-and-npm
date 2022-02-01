const express = require("express");
const bodyParser = require("body-parser"); 
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;

    res.send("thanks for yout response we will keep that in mind.Your answer is " + result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
})
app.post("/bmicalculator", function(req, res){
    console.log(req.body);
    console.log(req.body.weight);
    console.log(req.body.height);

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);
    console.log(bmi);
    res.send("Your BMI is" + bmi);
})
app.listen(3000, function () {
    console.log("Serever Started at rout 3000."); 
})