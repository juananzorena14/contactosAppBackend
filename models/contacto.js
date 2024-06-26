const { Schema } = require("mongoose");

const ContactoSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"]
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
  },
  numero: {
    type: Number,
    required: [true, "El número es obligatorio"],
  },
  favorito: {
    type: Boolean,
    default: false
  },
  estado: {
    type: Boolean,
    default: true
  }
});

module.exports = model ("Contacto", ContactoSchema)