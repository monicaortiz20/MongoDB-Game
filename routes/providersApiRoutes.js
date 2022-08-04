const express = require('express');

const providersApiController = require("../controllers/productsApiController")  // importa el controlador

const providersApiRouter = express.Router();

providersApiRouter.get('/:id?', providersApiController.getProducts);
// providersApiRouter.post('/', providersApiController.createProvider);
// providersApiRouter.delete("/", providersApiController.deleteProvider); 


module.exports = providersApiRouter;