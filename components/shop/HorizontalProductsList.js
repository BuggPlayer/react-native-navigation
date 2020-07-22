import React from "react";
import { FlatList } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import ProductsItem from "./ProductsItem";
import HorizontalProductsItem from "./HorizontalProductsItem";
import * as cartAction from "../../stored/actions/Cart";

const HorizontalProductsList = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
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
          orderNow={()=>{
            dispatch(cartAction.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

export default HorizontalProductsList;
