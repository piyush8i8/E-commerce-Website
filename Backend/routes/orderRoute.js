import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";

const orderRoute = express.Router();

// Route for placing an order, protected by authentication middleware
orderRoute.post("/place", authMiddleware, placeOrder);

// Route for verifying an order payment
orderRoute.post("/verify", verifyOrder);

// Route for fetching user orders, protected by authentication middleware
orderRoute.post("/userorders", authMiddleware, userOrders);

export default orderRoute;
