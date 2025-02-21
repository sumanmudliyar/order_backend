import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";
import User from "./user.js";
import Role from "./role.js";

class UserRoleLinking extends Model { }

// Initialize the Company model
UserRoleLinking.init(
    {
        user_role_linking: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },



    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "UserRoleLinking",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);

UserRoleLinking.belongsTo(User, { foreignKey: "user_id" });

UserRoleLinking.belongsTo(Role, { foreignKey: "role_id" });



// Sync the model to create the table in the database
const asyncUserRoleLinking = async () => {
    try {
        await UserRoleLinking.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("UserRoleLinking table created successfully.");
    } catch (err) {
        console.error("Error creating UserRoleLinking table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncUserRoleLinking();

export default UserRoleLinking;
