import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";
import User from "./user.js";
import Product from "./product.js";

class Order extends Model { }

// Initialize the Company model
Order.init(
    {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        deliveryStatus: {
            type: DataTypes.STRING,
            allowNull: true,

        },

        northLatitude: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        eastLatitude: {
            type: DataTypes.FLOAT,
            allowNull: true
        }





    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "Order",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);


Order.belongsTo(Product, { foreignKey: "product_id" })

Order.belongsTo(User, { foreignKey: "user_id" })

// Sync the model to create the table in the database
const asyncOrder = async () => {
    try {
        await Order.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("Order table created successfully.");
    } catch (err) {
        console.error("Error creating order table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncOrder();

export default Order;
