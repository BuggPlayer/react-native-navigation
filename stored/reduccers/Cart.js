import { ADD_TO_CART, REMOVE_FROM_CART, ADD_ITEM_CART } from "../actions/Cart";
import CartItem from "../../model/Cart-items";
import { ADD_ORDER } from "../actions/orders";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addProduct = action.product;
      const prodPrice = addProduct.price;
      const prodTitle = addProduct.title;
      const prodimage = addProduct.imageUrl;
      const outofstock = addProduct.outofstock;

      let updatedOrNewCartItem;

      if (state.items[addProduct.id]) {
        // already have the items in the cart

        updatedOrNewCartItem = new CartItem(
          state.items[addProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addProduct.id].sum + prodPrice,
          prodimage,
          outofstock
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodPrice,
          prodimage,
          outofstock
        );
      }
      return {
        ...state,
        items: { ...state.items, [addProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice,
      };
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        //need to reduce it ,not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
          selectedCartItem.imageURL,
          selectedCartItem.outofstock
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ITEM_CART:
      const addselectedCartItem = state.items[action.addid];
      const addcurrentQty = addselectedCartItem.quantity;
      let addupdatedCartItems;
      if (addcurrentQty) {
        //need to reduce it ,not erase it
        const updatedCartItem = new CartItem(
          addselectedCartItem.quantity + 1,
          addselectedCartItem.productPrice,
          addselectedCartItem.productTitle,
          addselectedCartItem.sum + addselectedCartItem.productPrice,
          addselectedCartItem.imageURL,
          addselectedCartItem.outofstock
        );
        addupdatedCartItems = {
          ...state.items,
          [action.addid]: updatedCartItem,
        };
      } else {
        addupdatedCartItems = { ...state.items };
        //  updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: addupdatedCartItems,
        totalAmount: state.totalAmount + addselectedCartItem.productPrice,
      };
    case ADD_ORDER:
      return initialState;
    case DELETE_PRODUCT:
      if (state.items[action.pid]) {
        return state;
      }
      const updatedItems = { ...state.items };
      //const itemTotal = state.items[action.pid].sum;
      //console.log(itemTotal)
      delete updatedItems[action.pid];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount,
      };
  }
  return state;
};
