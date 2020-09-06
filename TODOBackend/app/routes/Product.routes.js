module.exports = (app) => {
    const product = require('../controllers/Product.controller.js');

    app.post('/login',product.login)

    // Create a new Product
    app.post('/product',product.authenticateJWT , product.create);

    // Retrieve all product
    app.get('/product',product.authenticateJWT, product.findAll);

    // Retrieve a single Product with ProductId
    app.get('/product/:PId',product.authenticateJWT, product.findOne);

    // Update a Product with ProductId
    app.put('/product/:PId',product.authenticateJWT, product.update);

    // Delete a Product with ProductId
    app.delete('/product/:PId',product.authenticateJWT, product.delete);
}