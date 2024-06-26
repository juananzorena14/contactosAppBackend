const mongoose = require ("mongoose");

const dbConnect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("dbConnect exitoso, BD conectada"); 
    } catch (error) {
        console.log(error);
        throw new Error ("dbConnect fallido")
    }
};

module.exports = {
    dbConnect
}