import express from "express";
import { getAllProductController } from "../controller/product.js";


const router = express.Router();

router.get("/getallproduct", getAllProductController);


export default router;


