import { ADD_TO_CART, REMOVE_FROM_CART, ADD_ITEM_CART } from "../actions/Cart";
import CartItem from "../../model/Cart-items";

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

      let updatedOrNewCartItem;

      if (state.items[addProduct.id]) {
        // already have the items in the cart

        updatedOrNewCartItem = new CartItem(
          state.items[addProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addProduct.id].sum + prodPrice,
          prodimage
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodPrice,
          prodimage
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
          selectedCartItem.imageURL
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
        if (addcurrentQty ) {
          //need to reduce it ,not erase it
          const updatedCartItem = new CartItem(
            addselectedCartItem.quantity + 1,
            addselectedCartItem.productPrice,
            addselectedCartItem.productTitle,
            addselectedCartItem.sum + addselectedCartItem.productPrice,
            addselectedCartItem.imageURL
          );
          addupdatedCartItems = { ...state.items, [action.addid]: updatedCartItem };
        } else {
          addupdatedCartItems = { ...state.items };
         //  updatedCartItems[action.pid];
          
        }
        return {
          ...state,
          items: addupdatedCartItems,
          totalAmount: state.totalAmount + addselectedCartItem.productPrice,
        };
  }
  return state;
};
