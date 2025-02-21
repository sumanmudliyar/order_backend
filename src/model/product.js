import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";
import User from "./user.js";

class Product extends Model { }

// Initialize the Company model
Product.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "Product",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);



// Sync the model to create the table in the database
const asyncProduct = async () => {
    try {
        await Product.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("product table created successfully.");
    } catch (err) {
        console.error("Error creating product table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncProduct();

export default Product;
