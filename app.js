const express=require("express");
const app=express();
app.use("/static", express.static(__dirname+"/public"));
app.get("/", function(request, response){
	response.send("<h2> Main Page</h2>")
})
app.get("/contact", function(request, response){
	    let userName = request.query.name;    let id = request.query.id;
    response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
	//response.send("<h2> Contact</h2>")
})
app.listen(3000)