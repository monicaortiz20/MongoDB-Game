const mongoose = require('mongoose');

//ejemplo de esquema que crea Mongoose, por detrás usa MongoDB
const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image:{
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
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;


/*
//insertar un producto  (documentación)
const p = new Product({
    id: 3,
    title: "Tortilla",
    price: 1.80,
    description: "Tortilla jugosa del teatro",
    image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
});

//primero creo el producto y luego lo guardo
p.save().then((data)=>console.log(data))
*/