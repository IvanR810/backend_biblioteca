const express = require("express")
const cors = require("cors")

const estudiante = require("./routes/rt_estudiante");
const libro = require("./routes/rt_libro");
const progreso = require("./routes/rt_progreso");
const categoria = require("./routes/rt_categoria");

const app = express();

app.use(cors());

app.use("/api/estudiante", estudiante);
app.use("/api/libro", libro);
app.use("/api/progreso", progreso);
app.use("/api/categoria", categoria);

let puerto = process.env.PORT || 3000;

app.listen(puerto, ()=>{
    console.log("EL SERVIDOR SE EJECUTANDO")
})

