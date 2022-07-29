const express = require("express");
const app = express();

const port = 3030;
const mainRouter = require ("./routers/main"); /* requiero los enroutadores y los guardo en una constante que luego utilizaré para armar las rutas*/

app.use(express.static("public")); /*armo recursos estáticos*/

/*RUTAS*/
app.use("/", mainRouter); /*defino que cuando la petición del usuario sea / es mainRouter el enroutador que se hará cargo, quien a su vez le pedirá la información al controlador correspondiente */

app.listen(port, ()=> console.log("Servidor corriendo en puerto " + port)); /* configuro puerto de salida*/