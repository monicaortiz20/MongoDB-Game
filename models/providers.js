
const mongoose = require('mongoose');

const objectSchema = {
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    company_name: { 
        type: String, 
        required: true ,
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
const Provider = mongoose.model('Provider', providersSchema);

module.exports = Provider;


//insertar un producto  (documentación)
// const provider = new Provider({
//     company_name: "Teatro Marquina",
//     CIF: "B40236882",
//     address: "Calle de Prim 11",
//     provider: OnbjetID("62ea9090d52869066e61a853")
// });

// //primero creo el producto y luego lo guardo
// provider.save().then((data)=>console.log(data))
