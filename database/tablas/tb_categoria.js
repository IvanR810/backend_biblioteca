const obtenerConexion = require("../conexion");

async function obtenerCategorias(){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM TB_CATEGORIA");
    await conexion.end();

    return rows;
}

async function obtenerGrupos(){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM TB_GRUPO");
    await conexion.end();

    return rows
}

async function buscarCategorias(letra){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM CATEGORIAS WHERE letra = ?", [letra]);

    await conexion.end();

    return rows;
}

module.exports["obtenerCategorias"] = obtenerCategorias
module.exports["obtenerGrupos"] = obtenerGrupos;
module.exports["buscarCategorias"] = buscarCategorias;