import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductsItem from "./ProductsItem";
import * as cartAction from "../../stored/actions/Cart";

const ProductItemsList = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();
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
          dtaisl={props.details}
          onAddToCart={() => {
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default ProductItemsList;
