const obtenerConexion = require("../conexion");

async function obtenerEstudiantes(){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM TB_ESTUDIANTE");
    await conexion.end();

    return rows;
}

async function loguearEstudiante(dni, codigo){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM TB_ESTUDIANTE WHERE dni = ? AND codigo_estudiante = ?", [dni, codigo]);

    await conexion.end();

    return rows;
}

module.exports["obtenerEstudiantes"] = obtenerEstudiantes
module.exports["loguearEstudiante"] = loguearEstudiante;