
var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'dvd_collection'
});
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.post('/myaction', function(req, res) {

console.log(req.body);
res.write('You sent the name "' + req.body.no+'".\n');
res.write('You sent the Email "' + req.body.name+'".\n');
res.write('You sent the City "' + req.body.email+'".\n');

res.end();

connection.query("Insert into emp1 (id,name,email) VALUES ('"+req.body.no+"','"+req.body.name+"','"+req.body.email+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
});
});
app.listen(3000);
console.log('Example app listening at port:3000');