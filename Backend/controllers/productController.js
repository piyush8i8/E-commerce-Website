import productModel from "../Models/productModel.js";
;
import fs from "fs";

const addProduct = async (req, res) => {
  let image_filename = req.file ? req.file.filename : '';

  const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: "Error adding product" });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: "Error listing products" });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    fs.unlink(`uploads/${product.image}`, (err) => {
      if (err) console.error(err);
    });

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Error removing product" });
  }
};

export { addProduct, listProduct, removeProduct };
