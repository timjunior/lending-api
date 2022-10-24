import { Request, Response } from "express";
import mongoose from "mongoose";

import Product from "../../models/products";

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://tg-lender:GZSCIeHCWGyrmyZE@cluster0.rwg4svv.mongodb.net/my-products",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Database...!");
  })
  .catch(() => {
    console.error("Connection failed...!");
  });

export const createProduct = async (req: Request, res: Response, next: any) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();
  res.json(result);
};

export const getProducts = async (req: Request, res: Response, next: any) => {
  const products = await Product.find().exec();
  res.json(products);
};
