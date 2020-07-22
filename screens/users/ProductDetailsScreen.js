import React from "react";
import {  StyleSheet,ScrollView } from "react-native";

import ProductsDetailItem from "../../components/shop/ProductsDetailItem";

const ProductDetailsScreen = props => {
 
  return (
  <ScrollView>
    <ProductsDetailItem />
  </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ProductDetailsScreen;
