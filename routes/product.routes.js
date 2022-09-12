const { Router } = require('express');

const { getProductos } = require('../controllers/product.controller')

//inicializar router
const router = Router();
/**
 * @swagger
 * components: 
 *  schemas:
 *      Product:
 *          type: object
 *          properties: 
 *              name:
 *                  type: string
 *                  description: nombre del producto
 *              url_image:
 *                  type: string
 *                  description: la url de la imagen asociada
 *              price:
 *                  type: float
 *                  description: precio del producto
 *              discount:
 *                  type: int
 *                  description: porcentaje de descuento
 *              category:
 *                  type: int
 *                  description: la id de la categoría
 *    
 */

//rutas
/**
 * @swagger
 * /productos:
 *  get:
 *      summary: retorna todos los productos.
 *      tags: [Producto]
 *      responses:
 *          200:
 *              description: todos los productos
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/Products'
 */
router.get('/', getProductos);

//exportar la ruta
module.exports = router;