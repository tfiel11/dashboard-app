'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'node_practice'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;