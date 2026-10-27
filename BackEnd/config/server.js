const express = require('express')
const {crearPaciente, getPaciente} = require('../controller/paciente.controller')
const conexionDB = require("./database")
//local server
class Server{
    constructor(){
        this.port = 3001
        this.app = express()
        this.app.use(express.json())
        this.app.listen(this.port, () =>{
            console.log("ejecutando APP en el puerto 3001")
        })
        this.routes()
        conexionDB()

    }

    // Rutas de paciente 
    routes() {
        //login
        //ruta crear paciente
      this.app.post("/paciente", crearPaciente)
        //ruta obtener paciente  
      this.app.get("/paciente", getPaciente)
        //modificar
        //delete
    }
}
  module.exports = Server
