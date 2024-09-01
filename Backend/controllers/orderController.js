import orderModel from "../Models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:3000";

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();

        await userModel.findByIdAndUpdate(req.body.userId, { cartData: [] });

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,  // Add item name dynamically
                },
                unit_amount: item.price * 100 *80, // Price should be in paise (smallest currency unit)
            },
            quantity: item.quantity, // Add quantity to line items
        }))
        line_itens.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charge"
                },
                unit_amount: 1*100*80
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            // payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error placing order" });
    }
};

// Verifying user order
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Payment successful" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment not successful" });
        }
    } catch (error) {
        console.log(error);
        await orderModel.findByIdAndDelete(orderId);
        res.status(500).json({ success: false, message: "Error verifying order" });
    }
};

// Getting user orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving orders" });
    }
};

export { placeOrder, verifyOrder, userOrders };
