import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";

class User extends Model { }

// Initialize the Company model
User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,

        }

    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "User",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);

// Sync the model to create the table in the database
const asyncUser = async () => {
    try {
        await User.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("user table created successfully.");
    } catch (err) {
        console.error("Error creating user table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncUser();

export default User;
