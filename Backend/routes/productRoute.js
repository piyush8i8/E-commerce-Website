// productRoute.js
import express from "express";
import { addProduct, listProduct, removeProduct } from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", listProduct);
productRouter.post("/remove", removeProduct);

export default productRouter;
