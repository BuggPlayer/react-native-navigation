import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/users/HomeScreen";
import Productdetails from "../screens/users/ProductDetailsScreen";
import CartScreen from "../screens/users/CartScreen";
import Colors from "../Constants/Colors";
import ProductsItems from "../components/shop/ProductsItem";
import OrderScreen from "../screens/users/OrderScreen";

import AddProductScreen from "../screens/admin/AddProductScreen";
import EditProdcutsScreen from "../screens/admin/EditProductScreen";
import HomeCategory from "../components/shop/HomeCategory";
//import MapScreen from "../screens/map/MapScreen";
//import MapScreen from "../screens/map/MapScreen";

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
    Cart: CartScreen,
   HomCategory : HomeCategory
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

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrderScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AdminNavigator = createStackNavigator(
  {
    AddProduct: AddProductScreen,
    EditProducts: EditProdcutsScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
