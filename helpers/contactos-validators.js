const contacto = require("../models/contacto")

const numeroExiste = async (numero) => {
    const existeNumero = await contacto.findOne({numero});
    if (existeNumero) {
        throw new Error (`El número ${numero} ya está registrado para otro contacto`)
    }
};


const emailExiste = async (email) => {
    const existeEmail = await contacto.findOne({email});
    if (existeEmail) {
        throw new Error (`El email ${email} ya está registrado para otro contacto`)
    }
};

module.exports = {
    numeroExiste,
    emailExiste
}