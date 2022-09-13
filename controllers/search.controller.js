const { response } = require("express");
const { Op } = require("sequelize");

const { Product } = require("../models/product")


const coleccionesPermitidas = [
    'productos'
];


const buscarProductos = async (termino = '', res = response) => {

    const products = await Product.findAll({
        where: {
            name: {
                [Op.like]: '%' + termino + '%'
            }
        }
    });

    products.forEach(element => {
        if (element.url_image === null || element.url_image === "") {
            element.url_image = '/Imagen_no_disponible.png';
        }
    });

    res.json({
        results: products
    });


}

const buscar = (req, res = response) => {
    const { coleccion, termino } = req.params;

    if (!coleccionesPermitidas.includes(coleccion)) {
        return res.status(400).json({
            msg: `las colecciones permitidas son: ${coleccionesPermitidas}`
        })
    }

    switch (coleccion) {
        case 'productos':
            buscarProductos(termino, res);

            break;

        default:
            res.status(500).json({
                msg: 'busqueda no realizada'
            })
            break;
    }
}



module.exports = {
    buscar
}