const mysql = require('mysql');

const conexiondb = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database:   'crud_nodejs'
})