const express = require("express");
const {getCategorias, getGrupos, searchCategorias} = require("../modules/md_categoria");

const categoria = express.Router();

categoria.get("/", (re, res)=>{
    getCategorias((datos)=>{
        res.json(datos)
    })
})

categoria.get("/grupos", (req, res)=>{
    getGrupos((datos)=>{
        res.json(datos)
    })
})

categoria.get("/buscar/:letra", (req, res)=>{
    let letra = req.params.letra

    searchCategorias((datos)=>{
        res.json(datos)
    }, letra)
})

module.exports = categoria;