const {obtenerProgresos, obtenerProgreso, nuevoProgreso, actualizarProgreso, eliminarProgreso} = require("../database/tablas/tb_progreso");

function consultar(callback, estudiante){
    obtenerProgresos(estudiante).then((datos)=>{
        callback(datos)
    })
}

function buscar(callback, id_progreso){
    obtenerProgreso(id_progreso).then((datos)=>{
        callback(datos)
    })
}

function insertar(callback, datos){
    nuevoProgreso(datos).then((result)=>{
        callback(result)
    })
}

function actualizar(callback, datos){
    if(datos.estado_progreso != "completado"){
        actualizarProgreso(datos).then((result)=>{
            callback(result)
        })
    }
}

function eliminar(callback, id_progreso){
    eliminarProgreso(id_progreso).then((result)=>{
        callback(result)
    })
}

module.exports.consultar = consultar;
module.exports.buscar = buscar;
module.exports.insertar = insertar;
module.exports.actualizar = actualizar;
module.exports.eliminar = eliminar;