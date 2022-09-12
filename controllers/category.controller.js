const { response } = require('express');

const { Product } = require('../models/product');
const { Category } = require('../models/category');

//obtener todas las categorias
const getCategorias = async (req, res = response) => {
    const category = await Category.findAll();

    res.json({
        category
    })
}

//obtener una categoria en específico
const getCategoria = async (req, res = response) => {

    const { id } = req.params;

    const categoria = await Category.findByPk(id);

    if (categoria) {
        const cat_product = await Product.findAll({ where: { category: categoria.id } })

        cat_product.forEach(element => {
            if (element.url_image === null || element.url_image === "") {
                element.url_image = '/front-end/assets/Imagen_no_disponible.png';
            }
        });

        res.json({
            id_cat: categoria.id,
            cat_product
        })
    } else {
        res.status(404).json({
            msg: `No existe una categoria con el id ${id}`
        })
    }

}

module.exports = {
    getCategoria,
    getCategorias
}