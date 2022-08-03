//ESTE FICHERO ABRE LA CONEXIÓN A MONGOOSE

const mongoose = require("mongoose");

//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb://localhost:27017/fakeshop", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos O ""Listeners"
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose; //exportamos a app.js para que afecte a todo el proyecto