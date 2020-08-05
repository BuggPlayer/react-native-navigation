import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector } from "react-redux";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderBottn from "../../components/UI/HeaderBottn";
import OrderItems from "../../components/shop/OrderItems";

const OrderScreen = (props) => {
  const orders = useSelector((state) => state.ordersR.orders);

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => (
        <OrderItems
          amount={itemData.item.totalamount}
          date={itemData.item.readableDate}
          items={itemData.item}
        />
      )}
    />
  );
};

OrderScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Order",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBottn}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "iso-menu "}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrderScreen;
