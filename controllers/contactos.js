const { request, response } = require("express");
const Contacto = require("../models/contacto");

const getContactos = async (req = request, res = response) => {
  const {limite = 10, desde = 0} = req.query;
  const query = {estado: true};

  const {total, contactos} = await Promise.all([
    Contacto.countDocuments(query),
    Contacto.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
    ]);

    res.json ({
      total,
      contactos
    })
};

const getContacto = async (req = request, res = response) => {
  const { id } = req.params;
  
  const contacto = await Contacto.findById(id)
      
  res.json({
    contacto
  });
};

const postContacto = async (req, res) => {
  const {nombre, email, numero} = req.body;

  //const existeNumeroEmail = await Contacto.findOne({numero})

  const data = {
    nombre,
    email,
    numero
  };

  const contacto = new Contacto(data);

  await contacto.save();

  res.status(201).json({
    msg:"Se agregó contacto"
  })
};

const putContacto = async (req, res) => {
  const {id} = req.params;
  const {nombre, email, numero} = req.body;

  let data = {
    nombre, email, numero
  };

  const contacto = await Contacto.findByIdAndUpdate (id, data, {new:true});

  res.status(200).json(contacto)
};

const deleteContacto = async (req, res) => {
  const {id} = req.params;

  const contactoEliminado = await Contacto.findByIdAndUpdate(
    id,
    {estado:false},
    {new:true}
  );

  res.json({
    contactoEliminado
  })
};

module.exports = {
 getContactos,
 getContacto,
 postContacto,
 putContacto,
 deleteContacto
}