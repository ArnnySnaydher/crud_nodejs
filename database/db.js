const mysql = require('mysql');

const conexiondb = mysql.createConnection({
    host:   'localhost',
    user:   'root',
    password:   '',
    database:   'crud_nodejs'
})

conexiondb.connect((Error)=>{
    if(Error){
        console.log("El error de la conexion es: " + Error);
        return
    }
    console.log("conectado a la BD MySQL")
})