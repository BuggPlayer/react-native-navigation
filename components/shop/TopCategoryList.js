import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

const TopCategoryList = (props) => {
 // console.log("heelo",props)
  const TopCategoryListData = useSelector(
    (state) => state.topCategory.availableCategoty
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={TopCategoryListData}
      renderItem={(itemData) => (
        <CategoryItem image={itemData.item.imageUrl}
        TopCategoryTitle={itemData.item.name} />
      )}
    />
  );
};

export default TopCategoryList;
