const express = require("express")
const cors = require("cors")

const estudiante = require("./routes/rt_estudiante");
const libro = require("./routes/rt_libro");
const progreso = require("./routes/rt_progreso");

const app = express();

app.use(cors());

app.use("/api/estudiante", estudiante);
app.use("/api/libro", libro);
app.use("/api/progreso", progreso);

app.listen(3000, ()=>{
    console.log("LISTADO DE RUTAS");
    console.log("ESTUDIANTE: http://localhost:3000/api/estudiante");
    console.log("ESTUDIANTE: http://localhost:3000/api/libro");
    console.log("ESTUDIANTE: http://localhost:3000/api/progreso");
})

