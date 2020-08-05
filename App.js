import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigation from "./navigation/ShopNavigation";
import productsReducer from "./stored/reduccers/products";
import orderRedusers from "./stored/reduccers/orders"
import topCategoryReducer from "./stored/reduccers/TopCategoryReducer";
//import ShopNavigator from "./navigation/ShopNavigator";
import Topscrollprodutcs from "./stored/reduccers/TopScrollProductsReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./stored/reduccers/Cart";

const rootReducers = combineReducers({
  products: productsReducer,
  cart:cartReducer,
  ordersR: orderRedusers,
  topCategory: topCategoryReducer,
  topscrollprodutcs: Topscrollprodutcs,
});

const store = createStore(rootReducers, composeWithDevTools());

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
