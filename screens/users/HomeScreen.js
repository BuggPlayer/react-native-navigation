import React from "react";
import { ScrollView, StyleSheet, Platform } from "react-native";

import TopCategoryList from "../../components/shop/TopCategoryList";
import ProductItemsList from "../../components/shop/ProductItemsList";
import TopScrollProductsList from "../../components/shop/TopScrollProductsList";
import HorizontalProductsList from "../../components/shop/HorizontalProductsList";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderBottn from "../../components/UI/HeaderBottn";

const HomeScreen = (props) => {
  const details = () => {
    props.navigation.navigate("Productdetail", { productId: itemData.item.id});
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TopCategoryList style={styles.topCategory} />
      <TopScrollProductsList />
      <HorizontalProductsList />
      <ProductItemsList details={details} />
      <HorizontalProductsList />
    </ScrollView>
  );
};
HomeScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBottn}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "iso-cart "}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  topCategory: {
    height: 100,
    backgroundColor: "#CACACA",
  },
});
export default HomeScreen;
