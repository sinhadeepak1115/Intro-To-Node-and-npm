const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use("/public",express.static(__dirname+"/public"))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/singup.html')
})

app.post('/', function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})