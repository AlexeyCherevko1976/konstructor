const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const urlencodedParser=bodyParser.urlencoded({extended: false});



app.use("/static", express.static(__dirname+"/public"));

app.get("/register", urlencodedParser, function(request, response){
	response.sendFile(__dirname+"/public/register.html");
})
app.post("/register", urlencodedParser, function(request, response){
	if(!request.body) return response.sendStatus(400);
	console.log(request.body);
	response.send(`${request.body.userName}-${request.body.userAge}`)
})
app.get("/", function(request, response){
	//response.send("<h2> Main Page</h2>");
	response.sendFile(__dirname+"/public/index.html");

})
app.get("/contact", function(request, response){
	    let userName = request.query.name;    let id = request.query.id;
    response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
	//response.send("<h2> Contact</h2>")
})
app.listen(3000, function(){console.log("listen 3000")})