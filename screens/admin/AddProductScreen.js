import React from "react";
import { FlatList, Platform, Alert, StyleSheet, View } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderBottn from "../../components/UI/HeaderBottn";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../../components/shop/ProductsItem";
import AppButton from "../../components/Buttons/AppButton";
import * as productsAction from "../../stored/actions/products";

const AddProductScreen = (props) => {
  // console.log(props);
  const AddProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProdcutHandler = (id) => {
    props.navigation.navigate("EditProducts", { productId: id });
  };

  const deleteHandler = (id) => {
    Alert.alert("Are You sure?", "Do you really want to delete this item?", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsAction.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={AddProducts}
      renderItem={(itemData) => (
        <ProductItem
          style={styles.reusable}
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          description={itemData.item.description}
          kg={itemData.item.kg}
          mrp={itemData.item.mrp}
          price={itemData.item.price}
        >{ <View style={styles.buttonaction}>
          <AppButton
          style={styles.button}
            title="Edit"
            onPress={() => {
              editProdcutHandler(itemData.item.id);
            }}
          />
          <AppButton
          style={styles.button}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </View>
      }
          
          
        </ProductItem>
      )}
    />
  );
};
AddProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "You Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBottn}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "iso-menu "}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBottn}>
        <Item
          title="add"
          iconName={Platform.OS === "android" ? "md-create" : "iso-create"}
          onPress={() => {
            navData.navigation.navigate("EditProducts");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  reusable: {
    height: 200,
  },
  button:{
    marginTop:3
  },
  
  buttonaction: {
    display: "flex",
    flexDirection: "column",
    position:"absolute",
    flex:2,
    paddingLeft: 100,
    paddingTop: 30
  },
});
export default AddProductScreen;
