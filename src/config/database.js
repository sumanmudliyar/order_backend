import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();


const sequelizeConnection = new Sequelize(
    process.env.DB_NAME || "order",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: false,
        // Other Sequelize options...
    }
);

// Test the database connection
sequelizeConnection
    .authenticate()
    .then(() => {
        console.log(`Database connection has been established successfully.`);
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

// module.exports = sequelize;
export default sequelizeConnection;
