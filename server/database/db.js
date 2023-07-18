import mongoose from "mongoose";

export const Connection = async (userName, password) => {
  const URL = `mongodb+srv://${userName}:${password}@ecommerce-clone.ry7rpyt.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected succesfully");
  } catch (error) {
    console.log("error while connenting", error.message);
  }
};

export default Connection;
