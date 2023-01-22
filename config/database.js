import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//* habilita el uso de las variable de entorno
/*
 * DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DRIVER* 
 */
dotenv.config()



const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : process.env.DB_DRIVER,
    define : {
        timestamps : false,
    },
    pool :{
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 1000
    },
});

export default db;