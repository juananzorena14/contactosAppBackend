const express = require ("express");
const cors = require ("cors");
const { dbConnect } = require("../database/config");


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.contactosPath = "/api/contactos"

    this.conectarDB();

    this.middlewares();

    this.routes();
  };

  async conectarDB() {
    await dbConnect()
  };

  middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
  };

  routes(){
    this.app.use(this.contactosPath, require("../routes/contactos"));
  };

  listen(){
    this.app.listen(this.port, () => {
        console.log("Server online puerto:", this.port);
    })
  }
};

module.exports = Server

