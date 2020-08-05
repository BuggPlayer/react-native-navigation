import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductsItem from "./ProductsItem";
import * as cartAction from "../../stored/actions/Cart";
import AppButton from "../Buttons/AppButton";

const ProductItemsList = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
console.log(products)
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductsItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          description={itemData.item.description}
          kg={itemData.item.kg}
          mrp={itemData.item.mrp}
          price={itemData.item.price}
          
          dtaisl={props.details}
          countInStock={itemData.item.countInStock}
        >
          <AppButton
            title="Cart"
            onPress={() => {
              dispatch(cartAction.addToCart(itemData.item));
            }}
          />
        </ProductsItem>
      )}
    />
  );
};

export default ProductItemsList;
