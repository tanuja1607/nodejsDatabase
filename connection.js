
var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'root',
      database : 'dvd_collection',
    }
);

module.exports=connection;


/*query = connection.query("SELECT * FROM emp1;");
    query
    .on('error', function(err) {
        console.log( err );

    })
    .on('result', function( data ) {
        socket.emit('YourData',data);
    });*/