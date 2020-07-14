import React from "react";
import { FlatList, Text, ScrollView, StyleSheet, Button } from "react-native";

import ProductsItem from "../../components/shop/ProductsItem";
import CategoryItem from "../../components/shop/CategoryItem";
import TopCategoryDummyData from "../../data/TopCategory-dummydata";
import TopCategoryList from "../../components/shop/TopCategoryList";
import ProductItemsList from "../../components/shop/ProductItemsList";
import TopScrollProductItems from "../../components/shop/TopScrollProductItems";
import TopScrollProductsList from "../../components/shop/TopScrollProductsList";
import HorizontalProductsItem from "../../components/shop/HorizontalProductsItem";
import HorizontalProductsList from "../../components/shop/HorizontalProductsList";
import CartItem from "../../components/cart/CartItem";

const HomeScreen = (props) => {
  // const details = (props) => {
  //   {
  //     props.navigation.navigate("Productdetail");
  //   }
  // };
 // console.log(props);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TopCategoryList style={styles.topCategory} />
      <TopScrollProductsList />

      <HorizontalProductsList />
      <ProductItemsList  />

      <HorizontalProductsList />
    </ScrollView>

    //<FlatList
    //    data={products}
    // keyExtractor={item=>item.id}
    ////  renderItem={itemData =>

    //    // <Text>{itemData.item.title}</Text>
    // }

    // />
  );
};
const styles = StyleSheet.create({
  topCategory: {
    height: 100,
    backgroundColor: "#CACACA",
  },
});
export default HomeScreen;
