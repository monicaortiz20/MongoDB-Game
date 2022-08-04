// const Providers = require('../models/providers'); 
// const Product = require('../models/products');


//para traer todos los producstos que traiga los datos del proveedor de cada producto.
// const getProducts = async (req, res) => {
//     if (req.params.id) { //FIND BY ID
//         try {
//             let product =  await Product.findOne({id:req.params.id},'title price id -_id')

//             res.status(200).json(product);
//         }
//         catch (error) {
//             console.log(`ERROR: ${error.stack}`)
//             res.status(404).json({"message": "producto no encontrado"});
//         }
//     } else { //FIND ALL
//         try {
//             let products =  await Product.find({}, '-_id -__v')
//             .populate('provider', 'company_name cif address -_id')
//             res.status(200).json({products});
//         }
//         catch (error) {
//             console.log(`ERROR: ${error.stack}`)
//             let products = []
//             res.status(404).json(error);
//         }
//     }
// }

// module.exports = {
//     getProducts,
//     // createProduct,
//     //editProduct,
//     // deleteProduct
//     }
    