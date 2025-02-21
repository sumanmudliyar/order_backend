import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";
import User from "./user.js";

class Role extends Model { }

// Initialize the Company model
Role.init(
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "Role",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);



// Sync the model to create the table in the database
const asyncRole = async () => {
    try {
        await Role.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("role table created successfully.");
    } catch (err) {
        console.error("Error creating role table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncRole();

export default Role;
