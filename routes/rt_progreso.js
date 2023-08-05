const express = require("express")
const body_parser = require("body-parser")
const {consultar, buscar, insertar, actualizar, eliminar} = require("../modules/md_progreso")


const progreso = express.Router()
//progreso.use(body_parser.urlencoded({extended:true}))
progreso.use(body_parser.json())

progreso.get("/lista/:estudiante", (req, res)=>{
    let estudiante = req.params.estudiante
    consultar((datos)=>{
        res.json(datos)
    }, estudiante)
})

progreso.get("/ID/:id",(req,res)=>{
    let id = req.params.id;

    buscar((resultado)=>{
        res.json(resultado)
    }, id)
})

progreso.post("/insertar", (req, res)=>{
    const datos = req.body;
    insertar((respuesta)=>{
        res.send(respuesta)
    }, datos)
    
})

progreso.post("/actualizar", (req, res)=>{
    const datos = req.body;
    actualizar((respuesta)=>{
        res.send(respuesta)
    }, datos)
})

progreso.delete("/eliminar/:id", (req, res) =>{
    let id = req.params.id;
    eliminar((respuesta)=>{
        res.send(respuesta)
    }, id)
})
module.exports = progreso;