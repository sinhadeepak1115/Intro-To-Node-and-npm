const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const  https = require("https")

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use("/public",express.static(__dirname+"/public"))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/singup.html')
})

app.post('/failure', function(req, res){
    res.redirect("/")
})

app.post('/', function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);

    var data = {
        members: [
            {
                email_adress:email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName, 
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/74e445b1da"
    const options = {
        methods:"POST ",
        auth:"deepu:8de7aeb42f3248ac4f3d5b5c8dd95d4f-us14"
    }
    const request = https.request(url, options, function(response){
        if (response.statusCode ===200){
            res.sendFile(__dirname +"/success.html")
        }else{
            res.send(__dirname +"/failure.html")
        }



        response.on("data", function(data){
            console.log(JSON.parse(data )); 
        })
    })
    request.write(jsonData);
    request.end();
})  


app.listen(3000, function(){
    console.log("Server is running on port 3000")
})

// API Key
// 8de7aeb42f3248ac4f3d5b5c8dd95d4f-us14

// Audience ID 
// 74e445b1da