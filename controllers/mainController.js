/*Armo controlador*/

const path = require("path"); /*requiero el método path para poder leer rutas*/


/* armo objeto literal con los métodos (respuestas) que tendrá el controlador y lo exporto con module.exports*/
module.exports = { 
    home : (req,res) => res.sendFile(path.join( __dirname, "../views/home.html")),
    about : (req,res) => res.sendFile(path.join( __dirname, "../views/about.html")),
    }