import { ADD_TO_CART } from "../actions/Cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addProduct = action.product;
      const productPrice = addProduct.price;
      const productTitle = addProduct.title;
  }
  return state;
};
