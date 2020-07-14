import React from "react";
import { FlatList } from "react-native";
import TopScrollProductItems from "./TopScrollProductItems";
import { useSelector } from "react-redux";

const TopScrollProductsList = (props) => {
  const TopScrolldata = useSelector(
    (state) => state.topscrollprodutcs.TopScrollProducts
  );

  return (
    <FlatList
      //horizontal={horizontal ? true : false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={TopScrolldata}
      renderItem={(itemData) => (
        <TopScrollProductItems image={itemData.item.imageUrl} />
      )}
    />
  );
};

export default TopScrollProductsList;
