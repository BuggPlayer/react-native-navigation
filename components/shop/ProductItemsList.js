import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductsItem from "./ProductsItem";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductItemsList = (props) => {
  console.log(props);
  const products = useSelector((state) => state.products.availableProducts);

  // const Ondetailsscreen = (props) => {

  //console.log(props.navigation)
  //};
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductsItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          description={itemData.item.description}
          kg={itemData.item.kg}
          mrp={itemData.item.cutprice}
          price={itemData.item.price}
          // add={() => {
          //   props.navigation.navigate({ routename: "Productdetail" });
          // }}
        />
      )}
    />
  );
};

export default ProductItemsList;
