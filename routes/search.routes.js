const { Router } = require('express');

const { buscar } = require('../controllers/search.controller')

const router = Router();


/**
 * @swagger
 * /buscar/productos/{termino}:
 *  get:
 *      summary: retorna todos los productos buscados que contengan la palabra ej coca.
 *      tags: [Busqueda]
 *      parameters:
 *          - in: path
 *            name: termino
 *            schema:
 *              type: string
 *            required: true
 *            description: el termino de busqueda
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
router.get('/:coleccion/:termino', buscar)



module.exports = router;