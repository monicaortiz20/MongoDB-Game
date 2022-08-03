
const mongoose = require('mongoose');

const objectSchema = {
    company_name: { 
        type: String, 
        required: true ,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
    }
};

// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema); //le pasamos el nombre de la variable que hemos creadocon el obj esq
// Crear el modelo --> Colección
const Providers = mongoose.model('providers', providersSchema);

module.exports = Providers;


//insertar un producto  (documentación)
const provider = new Providers({
    company_name: "Teatro Marquina",
    CIF: "B40236882",
    address: "Calle de Prim 11",
    url_web:"https://www.tortillasmarquina.com"
});

//primero creo el producto y luego lo guardo
provider.save().then((data)=>console.log(data))
