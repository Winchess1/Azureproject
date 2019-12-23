const express = require('express');
const app =  express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

/* app.get('/login',function(req,res){

console.log(req.body);


res.send('req.body');

}) */

app.post('/login',function(req,res){
    console.log(req.body);


    res.send(req.body);
    
    })


app.listen(PORT,console.log(`server is up on ${PORT}`))