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


var record= { id: 206, name: 'Kumar', email: 'abc@do.com' };

connection.query('INSERT INTO emp1 SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
});

connection.end(function(err) {
  // Function to close database connection
});

app.listen(5000);
