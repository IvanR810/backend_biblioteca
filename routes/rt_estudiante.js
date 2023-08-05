const express = require("express");
const {visualizar, loguearse} = require("../modules/md_estudiante");

const estudiante = express.Router();

estudiante.get("/", (re, res)=>{
    let funcion = (datos)=>{
        res.json(datos);
    }

    visualizar(funcion);
})

estudiante.get("/:dni/:codigo", (req, res)=>{
    let dni = req.params.dni
    let codigo = req.params.codigo

    loguearse(dni, codigo, (paquete)=>{
        res.json(paquete);
    })
})

module.exports = estudiante;