import sequelizeConnection from "../config/database.js";
import Login from "./login.js";
import Order from "./order.js";
import Product from "./product.js";
import Role from "./role.js";
import User from "./user.js";
import UserRoleLinking from "./userRoleLinking.js";

// Define models
const models = {

    User,
    Login,
    Product,
    Order,
    Role,
    UserRoleLinking

};

// Sync all models with the database
const syncModels = async () => {
    try {
        await sequelizeConnection.sync({ alter: true }); // Sync models, altering tables without dropping existing data
        console.log("Models synced successfully.");
    } catch (err) {
        console.error("Error syncing models:", err);
    }
};

// Export both models and syncModels function
export { models, syncModels };
