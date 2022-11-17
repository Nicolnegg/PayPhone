import mysql from "mysql";
import { Sequelize } from "sequelize";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "payphone"
});

connection.connect((error) => {
    if (error){
        console.log(`Conexion error a la base de datos es: ${error}`)
    }
    console.log('Conexion Exitosa a la base de datos');
});

export default connection;