const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/:brand', blockSpecialBrand, (req, res) => {
    const { brand } = req.params;
    const filteredProducts = products.filter(product => product.brand === brand);
    res.json(filteredProducts);
});

router.get('/productswitherror', (req, res) => {
    let err = new Error("Processing error");
    err.statusCode = 400;
    throw err;
});

router.get('/products/id/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === Number(id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});


module.exports = router;
