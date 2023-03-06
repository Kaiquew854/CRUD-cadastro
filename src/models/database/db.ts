import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


dotenv.config()

export const db = new Sequelize(
    process.env.URL as string,
    {
        dialect: 'postgres' 
    }
);

export default db;