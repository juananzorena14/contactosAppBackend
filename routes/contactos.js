const { Router } = require("express");
const { getContactos, getContacto, postContacto, putContacto, deleteContacto } = require("../controllers/contactos");
const { check } = require("express-validator");
const { numeroExiste, emailExiste } = require("../helpers/contactos-validators");

const router = Router();

router.get("/", getContactos);

router.get("/:id",
  [
    check("id", "No es un ID de mongo válido").isMongoId(),
  ],
  getContacto
);

router.post("/",
  [
    //CUSTOM CHECKS
    check("numero").custom(numeroExiste),
    check("email").custom(emailExiste),
  ],
  postContacto
);

router.put("/:id",
  [
    check("id", "No es un ID de mongo válido").isMongoId(),
    //CUSTOM CHECKS
    check("numero").custom(numeroExiste),
    check("email").custom(emailExiste),
  ],
  putContacto
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID de mongo válido").isMongoId(),
  ],
  deleteContacto  
);

module.exports = router