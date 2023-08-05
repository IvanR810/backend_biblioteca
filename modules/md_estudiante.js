const {obtenerEstudiantes, loguearEstudiante} = require("../database/tablas/tb_estudiante");

function visualizar(callback){
    obtenerEstudiantes().then((datos)=>{
        callback(datos);
    })
}

function loguearse(dni, codigo, callback){
    loguearEstudiante(dni, codigo).then((datos)=>{
        let paquete = {};

        if(datos.length > 0){
            paquete.mensaje = 1
            paquete.estudiante = datos[0]
        }
        else{
            paquete.mensaje = 0
        }

        callback(paquete);
    });
}

module.exports.visualizar = visualizar;
module.exports.loguearse = loguearse;