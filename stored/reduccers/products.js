import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";
import Product from "../../model/product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
        action.productData.mrp,
        // action.productData.cutprice,
        action.productData.kg,
        action.productData.countInStock
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );

      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.mrp,
        action.productData.countInStock,
        state.userProducts[productIndex].price,

        // action.productData.cutprice,
        action.productData.kg
      );

      const updateUserProducts = [...state.userProducts];
      updateUserProducts[productIndex] = updatedProduct;

      const availabeproductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvilableProducts = [...state.availableProducts];
      updatedAvilableProducts[availabeproductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvilableProducts,
        userProducts: updateUserProducts,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
