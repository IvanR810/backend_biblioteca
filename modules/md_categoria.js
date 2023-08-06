const {obtenerCategorias, obtenerGrupos, buscarCategorias} = require("../database/tablas/tb_categoria");

function getCategorias(callback){
    obtenerCategorias().then((datos)=>{
        callback(datos);
    })
}

function getGrupos(callback){
    obtenerGrupos().then((datos)=>{
        callback(datos);
    });
}

function searchCategorias(callback, letra){
    buscarCategorias(letra).then((datos)=>{
        callback(datos)
    })
}

module.exports.getCategorias = getCategorias;
module.exports.getGrupos = getGrupos;
module.exports.searchCategorias = searchCategorias;