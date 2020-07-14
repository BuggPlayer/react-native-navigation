import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// import nextpage from "../screens/nextpage";
// import Fisrtpagee from "../screens/fisrtPage";
import HomeScreen from "../screens/users/HomeScreen";
import Productdetails from "../screens/users/ProductDetailsScreen";
import CartScreen from "../screens/users/CartScreen";

const ProductsNavigator = createStackNavigator({
  Productdetail: { screen: Productdetails },
  Cart: CartScreen,
  Home: {
    screen: HomeScreen,
  },

});
export default createAppContainer(ProductsNavigator);
