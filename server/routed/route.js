import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import {
  getProductById,
  getProducts,
} from "../controller/productController.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);

Router.get("/products", getProducts);
Router.get("/product/:id", getProductById);

export default Router;
