const express = require('express');
const cors = require('cors');
//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");

const { sequelize } = require('../database/config');
const swaggerSpec = {
   definition:{
    openapi: "3.0.3",
    info: {
        title: "Bsale API",
        version: "1.0.0",
        description: "Este es la Api del proyecto de Bsale Store"
    },
    servers:[
        {
            url: `http://localhost:${process.env.PORT}`
        }
    ]
   },
   apis: [`${path.join(__dirname,"../routes/*.js")}`] 
}

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {

            category: '/categoria',
            products: '/productos',
            search: '/buscar'

        }

        //conectar a bd
        this.conectarDB();
        //middlewares
        this.middlewares();
        //rutas de la aplicación
        this.routes();
    }

    async conectarDB() {
        let retries = 5;
        while (retries) {
            try {
                await sequelize.authenticate();
                console.log('Se conectó bien.');
                break;
            } catch (error) {
                console.error('No se conecta:', error);
                retries -= 1;
                console.log(`retries left: ${retries}`);
                //esperar 5 segundos
                await new Promise(res => setTimeout(res, 5000));
            }
        }

    }

    middlewares() {
        //CORS
        this.app.use(cors());
        // Lectura y Parse del body
        this.app.use(express.json());
        //swagger
        this.app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

    }

    routes() {
        this.app.use(this.paths.category, require('../routes/category.routes'))
        this.app.use(this.paths.products, require('../routes/product.routes'))
        this.app.use(this.paths.search, require('../routes/search.routes'))
    }

    listen() {
        this.app.listen(this.port);
    }
}

module.exports = Server;