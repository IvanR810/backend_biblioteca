const {obtenerLibros, buscarLibro,buscarCategoria, buscarGrupo, buscarGrupoCategoria} = require("../database/tablas/tb_libro")

function visualizar(callback){
    obtenerLibros().then((datos)=>{
        callback(datos)
    })
}

function buscar(callback, id){
    buscarLibro(id).then((datos)=>{
        let fila = null
        if(datos.length > 0){
            fila = datos[0]
        }
        callback(fila)
    })
}

function filtrarLibro(callback, categoria = null, grupo = null){
    if(categoria == null && grupo == null){
        visualizar(callback)
    }
    else if(categoria != null && grupo != null){
        buscarGrupoCategoria(grupo, categoria).then((datos)=>{
            callback(datos)
        })
    }
    else if(categoria != null){
        buscarCategoria(categoria).then((datos)=>{
            callback(datos)
        })
    }
    else{
        buscarGrupo(grupo).then((datos)=>{
            callback(datos)
        })
    }
}

module.exports.visualizar = visualizar;
module.exports.filtrarLibro = filtrarLibro;
module.exports.buscar = buscar;