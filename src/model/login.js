import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../config/database.js";
import User from "./user.js";

class Login extends Model { }

// Initialize the Company model
Login.init(
    {
        login_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize: sequelizeConnection,  // This ensures the sequelize instance is passed correctly
        modelName: "Login",  // Model name should be capitalized and consistent
        paranoid: true,  // Enables soft deletes
    }
);


Login.belongsTo(User, { foreignKey: "user_id" })

// Sync the model to create the table in the database
const asyncLogin = async () => {
    try {
        await Login.sync();  // Sync the model (creates the table if it doesn't exist)
        console.log("Login table created successfully.");
    } catch (err) {
        console.error("Error creating login table:", err);
    }
};

// Calling syncCompany in case this model file is executed directly
asyncLogin();

export default Login;
