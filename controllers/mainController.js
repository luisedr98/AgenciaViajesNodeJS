import {Viaje}  from "../models/Viajes.js";
import {Testimoniales} from "../models/Testimoniales.js"

const paginaInicio = async(req, res) => {
    try{
    const resultadoDB = await Promise.all([Viaje.findAll({limit:3}), Testimoniales.findAll({limit:3})])
    res.render("inicio", {
        titulo : "Inicio", 
        clase : "home", 
        viajes: resultadoDB[0],
        testimoniales : resultadoDB[1]
    });
    } catch (err){
        console.log(err);
    }
}


const paginaNosotros = (req, res)=>{
    res.render("nosotros", {titulo: "Nosotros"});
}

const paginaViajes = async(req, res)=>{
    const viajes = await Viaje.findAll();
    res.render("viajes", {
        titulo: "Viajes",
        viajes,
    });
}

const paginaTestimoniales = async(req, res) =>{
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render("testimoniales", {titulo: "Testimoniales", testimoniales});
    } catch (error) {
        console.log(error);
    }
}

//* mostrar pagina de viaje de acuerdo al slug
const paginaDetalleViaje = async(req, res) => {
    const {slug} = req.params;
    try {
        const viaje = await Viaje.findOne({ where : { slug}});
        res.render("viaje", {titulo: 'Viaje' , viaje});
    } catch (err) {
        console.log(err);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}