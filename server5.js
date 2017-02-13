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
app.get('/', function(req, res) {
connection.query('UPDATE emp1 SET email = ? WHERE id = ?', ['tanuja1607@gmail.com', 233], function(err, result){
  if(err) throw err;

  console.log('Record Updated ' + result.changedRows + ' rows');
 res.write("record updated");
  res.end();
});
});
app.listen(5000);
