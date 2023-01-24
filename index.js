import express  from "express";
import router from "./router/index.js";
import db from "./config/database.js";
import dotenv from "dotenv";

// * importando express y las variables de entorno
const app = express();
dotenv.config();

// * configuracion del puerto
const port = process.env.PORT;

//* conectar a la base de datos
db.authenticate()
    .then(()=>console.log('base de datos conectada'))
    .catch(err => console.log(err));

// * usa el motor de plantillas
app.set("view engine", "pug");

//* obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia De Viajes';
    next();
});

//* Agregando el body parser para leer los datos del formulario
app.use(express.urlencoded({extended : true}))

// * importa la carpeta de los estaticos
app.use(express.static("public"))


// * importa las vistas
app.use('/', router);

app.listen(port, ()=>{
    console.log('Iniciando la app en el puerto:' + port);
})