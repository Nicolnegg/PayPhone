import mysql from "mysql";
import { Sequelize } from "sequelize";

const connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b5d24b42e41a1a",
    password: "c1ada6da",
    database: "heroku_b4ea2cfb2e15836"
});

connection.connect((error) => {
    if (error){
        console.log(`Conexion error a la base de datos es: ${error}`)
    }
    console.log('Conexion Exitosa a la base de datos');
});

export default connection;