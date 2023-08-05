const express = require("express")

const {visualizar, buscar, filtrarLibro} = require("../modules/md_libro")

const libro = express.Router()

libro.get("/", (req, res)=>{
    visualizar((datos)=>{
        res.json(datos)
    })
})

libro.get("/ID/:id", (req, res)=>{
    buscar((fila)=>{
        res.json(fila)
    }, req.params.id)
})

libro.get("/grupo/:grupo", (req, res)=>{
    let grupo = req.params.grupo
    filtrarLibro((datos)=>{
        res.json(datos)
    },null, grupo)
})

libro.get("/categoria/:categoria", (req, res)=>{
    let categoria = req.params.categoria
    filtrarLibro((datos)=>{
        res.json(datos)
    },categoria, null)
})

libro.get("/lista/:grupo/:categoria", (req, res)=>{
    let grupo = req.params.grupo
    let categoria = req.params.categoria
    filtrarLibro((datos)=>{
        res.json(datos)
    },categoria, grupo)
})

module.exports = libro