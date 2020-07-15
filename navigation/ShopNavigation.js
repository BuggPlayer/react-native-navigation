import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import nextpage from "../screens/nextpage";
// import Fisrtpagee from "../screens/fisrtPage";
import HomeScreen from "../screens/users/HomeScreen";
import Productdetails from "../screens/users/ProductDetailsScreen";
import CartScreen from "../screens/users/CartScreen";
import Colors from "../Constants/Colors";
import ProductsItems from "../components/shop/ProductsItem";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  // headerTitleStyle: {
  // fontFamily: "open-sans-bold",
  // },
  // headerBackTitleStyle: {
  //   fontFamily: "open-sans",
  // },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Productdetail: { screen: Productdetails },
    details: ProductsItems,
    
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);
const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    //  Orders: OrdersNavigator,
    //  Admin: AdminNavigator,
    Cart: CartScreen,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
