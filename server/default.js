import { products } from "./constants/data.js";
import Product from "./model/product-model.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data succesfully imported");
  } catch (error) {
    console.log("Error while inserting data from database", error);
  }
};

export default DefaultData;
