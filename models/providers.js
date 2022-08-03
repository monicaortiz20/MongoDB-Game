
const mongoose = require('mongoose');

const objectSchema = {
    company_name: { 
        type: String, 
        required: true ,
        unique: true
    },
    CIF: { 
        type: Number, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            }, 
            message: "Porfa, sólo imágenes JPG"
        }
    }
};

// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema); //le pasamos el nombre de la variable que hemos creadocon el obj esq
// Crear el modelo --> Colección
const Providers = mongoose.model('Providers', providersSchema);

module.exports = Providers;
