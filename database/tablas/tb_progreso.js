const obtenerConexion = require("../conexion");

async function obtenerProgresos(estudiante){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM PROGRESOS WHERE estudiante = ?", [estudiante]);
    await conexion.end();

    return rows;
}

async function obtenerProgreso(id){
    const conexion = await obtenerConexion();

    const [rows, fields] = await conexion.query("SELECT * FROM PROGRESOS WHERE id_progreso = ?", [id]);
    await conexion.end();

    return rows;
}

async function nuevoProgreso(datos){
    const conexion = await obtenerConexion();
    let arreglo = []
    for (const clave in datos) {
        arreglo.push(datos[clave])
    }

    const [result, fields] = await conexion.query("INSERT INTO TB_PROGRESO VALUES (?,?,?,?,?,?)", arreglo);
    await conexion.end();

    return result.affectedRows;
}

async function actualizarProgreso(datos){
    const conexion = await obtenerConexion();
    let arreglo = []

    for(const clave in datos){
        arreglo.push(datos[clave])
    }

    const [result, fields] = await conexion.query("UPDATE TB_PROGRESO SET pagina_actual = ?, fecha_actualizacion = ?, estado_progreso = ? WHERE  id_progreso = ?", arreglo);
    await conexion.end();

    return result.affectedRows;

}

async function eliminarProgreso(id){
    const conexion = await obtenerConexion();

    const [result, fields] = await conexion.query("DELETE FROM TB_PROGRESO WHERE id_progreso = ?", [id]);
    await conexion.end();

    return result.affectedRows;
}

module.exports.obtenerProgresos = obtenerProgresos;
module.exports.obtenerProgreso = obtenerProgreso;
module.exports.nuevoProgreso = nuevoProgreso;
module.exports.actualizarProgreso = actualizarProgreso;
module.exports.eliminarProgreso = eliminarProgreso;