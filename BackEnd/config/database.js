const mongoose =require("mongoose")

//Conectar a la base de datos MongoDB 
const conexionDB = async function (){
    try{
        const db = await mongoose.connect("mongodb://localhost:27017/tudoctor")
        console.log("connection successful")
    } catch (error) {
        console.log("error de conexion")
    }
}
module.exports = conexionDB
