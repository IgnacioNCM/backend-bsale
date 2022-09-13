const { response } = require('express');

const { Product } = require('../models/product');


//obtener todos los productos
const getProductos = async (req, res = response) => {
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;

    const productos = await Product.findAll({ offset: Number(offset), limit: Number(limit) });

    productos.forEach(element => {
        if (element.url_image === null || element.url_image === "") {
            element.url_image = '/Imagen_no_disponible.png';
        }
    });


    res.json({
        productos
    })

}

module.exports = {
    getProductos
}