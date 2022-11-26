import mysql from "mysql";
import { Sequelize } from "sequelize";

const connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b7677a191aa0ad",
    password: "46abfd86",
    database: "heroku_1a8c3f63a1a0d85"
});

connection.connect((error) => {
    if (error){
        console.log(`Conexion error a la base de datos es: ${error}`)
    }
    console.log('Conexion Exitosa a la base de datos');
});

export default connection;