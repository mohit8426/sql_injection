//create a table with name - users
//cols -- user_id,name,password
//add some dummy entries
var mysql = require('mysql');
var db_conn = mysql.createConnection({
	  host:"db4free.net",
	user:"cmnshareteb",
	password:"cmnshareteb1",
	database: "testing_db_free"
	})

db_conn.connect(function(err) {
	if (err) throw err
	
});
module.exports = {db_conn};


