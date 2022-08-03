const mongoose = require('mongoose');

//ejemplo de esquema que crea Mongoose, por detrás usa MongoDB
const objectSchema = {
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
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Providers',
        required: true 
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