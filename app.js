/**
 * Created by ishant on 28-06-2017.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 5000 ;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.listen(port,function(err){
   if(err){
       console.log("There is some error with port listen");
   }
    else{
       console.log("Application is running on port "+ port);
   }
});
