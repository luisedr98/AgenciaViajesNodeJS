import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) =>{
    const errores =[];
    const {nombre, correo, mensaje} = req.body
    if (nombre.trim() == '') errores.push({ mensaje : 'El campo Nombre esta vacío'});
    if (correo.trim() == '') errores.push({ mensaje : 'El campo Correo esta vacío'});
    if (mensaje.trim() == '') errores.push({ mensaje : 'El campo Mensaje esta vacío'});

    if (errores.length > 0){
        const testimoniales = await Testimoniales.findAll();
        res.render("testimoniales", {
            titulo: "testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        })
    } else {
        // * pasa la validacion
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });
            //* redireccion mediante redirect
            res.redirect('/testimoniales');
        } catch (err) {
            console.log(err);
        }
    }
}

export{
    guardarTestimonial,
}