import * as actionTypes from "../constants/productConstants.js";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
