import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { syncModels } from "./model/index.js";
import cors from "cors";
import http from "http"; // Import HTTP module
import { WebSocketServer } from "ws"; // Import WebSocket module

import productRoutes from "./route/product.js";
import orderRoutes from "./route/order.js";
import userRoutes from "./route/user.js"

const app = express();
const PORT = process.env.PORT || 5000;

// Create an HTTP server and attach Express app
const server = http.createServer(app);

// Create a WebSocket server
const wss = new WebSocketServer({ server });

app.use(express.json());

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);



// app.use(async (req, res, next) => {
//     try {
//         if (req.path === "/user/login") {
//             return next();
//         }

//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) {
//             return res.status(401).json({ message: "Unauthorized", error: "Token missing" });
//         }

//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//         next();
//     } catch (err) {
//         return res.status(401).json({ message: "Unauthorized", error: "Invalid token" });
//     }
// });




// Routes
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);


// Start the server
const startServer = async () => {
    try {
        await syncModels(); // Sync database models

        server.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log(`WebSocket server running on ws://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error syncing models:", error);
    }
};

startServer();

// Export app, server, and wss for use in other files
export { app, server, wss };
