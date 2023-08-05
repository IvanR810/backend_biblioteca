const obtenerConexion = require("../conexion");

async function obtenerLibros(){
    const conexion = await obtenerConexion();
    
    const [rows, fields] = await conexion.query("SELECT * FROM TB_LIBRO");
    await conexion.end();

    return rows;
}

async function buscarLibro(id){
    const conexion = await obtenerConexion();
    const [rows, fields] = await conexion.query("SELECT * FROM TB_LIBRO WHERE id_libro = ?",[id]);
    await conexion.end();

    return rows;
}

async function buscarCategoria(categoria){
    const conexion = await obtenerConexion();

    const[rows, fields] = await conexion.query("SELECT * FROM LISTA_LIBROS WHERE id_categoria = ?",[categoria]);
    await conexion.end();

    return rows
}

async function buscarGrupo(grupo){
    const conexion = await obtenerConexion();

    const[rows, fields] = await conexion.query("SELECT * FROM LISTA_LIBROS WHERE grupo = ?",[grupo]);
    await conexion.end();

    return rows
}

async function buscarGrupoCategoria(grupo, categoria){
    const conexion = await obtenerConexion();

    const[rows, fields] = await conexion.query("SELECT * FROM LISTA_LIBROS WHERE grupo = ? AND id_categoria = ?",[grupo, categoria]);
    await conexion.end();

    return rows
}

module.exports.obtenerLibros = obtenerLibros;
module.exports.buscarLibro = buscarLibro;
module.exports.buscarCategoria = buscarCategoria;
module.exports.buscarGrupo = buscarGrupo;
module.exports.buscarGrupoCategoria = buscarGrupoCategoria;