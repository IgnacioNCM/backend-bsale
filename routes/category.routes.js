const { Router } = require('express');

const { getCategoria, getCategorias } = require('../controllers/category.controller')

//inicializar router
const router = Router();

/**
 * @swagger
 * components: 
 *  schemas:
 *      Category:
 *          type: object
 *          properties: 
 *              name:
 *                  type: string
 *                  description: nombre de la categoria
 *    
 */


//rutas
/**
 * @swagger
 * /categoria:
 *  get:
 *      summary: retorna todas los categorias.
 *      tags: [Categoria]
 *      responses:
 *          200:
 *              description: todos las categorias
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 */
router.get('/', getCategorias)

/**
 * @swagger
 * /categoria/{id}:
 *  get:
 *      summary: retorna todos los productos pertencientes a una categoria (busqueda por id).
 *      tags: [Categoria]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: el id de la categoria (buscar por ejemplo 3)
 *      responses:
 *          200:
 *              description: todos los productos segun la busqueda
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          
 *          404:
 *              description: no encuentra el usuario
 *          500:
 *              description: busqueda no realizada
 */
router.get('/:id', getCategoria);

//exportar la ruta
module.exports = router;