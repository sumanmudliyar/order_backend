import express from "express";
import { createOrderController, getAllOrderByUserController, getAllOrderController, getOrderByOrderController, updateOrderController } from "../controller/order.js";

const router = express.Router();

router.post("/newOrder", createOrderController)

router.get("/allOrders", getAllOrderController)

router.put("/updateOrder", updateOrderController);

router.get("/getOrder", getOrderByOrderController);

router.get("/getOrderByUser", getAllOrderByUserController)




export default router;
