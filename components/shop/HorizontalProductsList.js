import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductsItem from "./ProductsItem";
import HorizontalProductsItem from "./HorizontalProductsItem";

const HorizontalProductsList = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={(itemData) => (
        <HorizontalProductsItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
         // description={itemData.item.description}
          kg={itemData.item.kg}
          mrp={itemData.item.cutprice}
          price={itemData.item.price}
        />
      )}
    />
  );
};

export default HorizontalProductsList;
