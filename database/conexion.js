const mysql = require("mysql2/promise");

const enviroment = require("dotenv")
enviroment.configDotenv()

const obtenerConexion = async ()=>{
    const conexion = await mysql.createConnection({
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE
    })

    return await conexion;
}

module.exports = obtenerConexion;