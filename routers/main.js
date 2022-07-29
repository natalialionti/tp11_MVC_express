/*Enroutadores*/

const express = require("express"); /*requiero express*/
const router = express.Router();  /*llamo al método Router de express*/


/* traigo métodos del controlador */

const mainControler = require("../controllers/mainController"); /* creo una constante que traerá los métodos del controlador que estoy requiriendo y que está en la carpeta controllers*/


/*armo enroutadores*/

router.get("/", mainControler.home);  /* ejecuto el método del controlador (guardado en la contante anterior) que corresponde según la petición ingresada en el primer parámetro del router.get*/
router.get("/about", mainControler.about);

module.exports = router; /* exporto los enroutadores*/