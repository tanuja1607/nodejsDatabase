var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'dvd_collection'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/",function(req,res){
connection.query('SELECT *from emp1', function(err, rows, fields) {
connection.end();

  if (err)
  throw err;
  else{
      for(i=0;i<rows.length;i++){
      console.log(rows[i].id);  }
       res.send(rows);
     }  
  });
});
app.listen(5000);
