import axios from "axios";

const url = "http://localhost:9000";

export const authenticateLogin = async (User) => {
  try {
    return await axios.post(`${url}/login`, User);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const authenticateSignup = async (User) => {
  try {
    return await axios.post(`${url}/signup`, User);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
    return error.response;
  }
};

// export const getProductById = async (id) => {
//   try {
//     return await axios.get(`${url}/product/${id}`);
//   } catch (error) {
//     console.log("Error while getting product by id response", error);
//   }
// };

// export const payUsingPaytm = async (data) => {
//   try {
//     let response = await axios.post(`${url}/payment`, data);
//     return response.data;
//   } catch (error) {
//     console.log("Error", error);
//   }
// };
