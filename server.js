const express = require('express');  

// port to run the server
const port =8000

// creating app object
const app = express(); 


app.use(function(req, res, next) {  
  console.log("i am middleware");  
  next();  
}); 

app.get('/', function(req, res, next) {  
  res.send('Welcome to node!');  
});  

app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  

app.get('/contact', function(req, res, next) {  
    res.send('my contact 9900000090');  
  }); 

 app.listen(port)