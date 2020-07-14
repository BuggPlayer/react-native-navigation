import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import CartProducts from "../shop/CartProducts";
import ProductsItem from "../shop/ProductsItem";
import ProductItemsList from "../shop/ProductItemsList";

const CartItem = (props) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
      <View style={styles.smallcontainer}>
        <Text style={styles.title}>Fresh and maha Fresh</Text>
        {/* <Text style={styles.description}>Descriptipn:qweer rrtryr r ehheret  ergrgfr efh </Text> */}
        {/* <Text style={styles.mrp}>MRP:300</Text> */}
        <Text style={styles.rs}>Rs:123</Text>
        <Text style={styles.save}>Saving:null </Text>

        <View style={styles.quantity}>
          <Text style={styles.btnAdd}>+</Text>
          <Text style={styles.quantitytext}>name</Text>
          <Text style={styles.btnMinus}>-</Text>
        </View>
        <View>
          <Text ></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    // flex: 1,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  image: {
    borderRadius: 10,
    height: 120,
    width: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
    marginTop: 15,
    marginLeft: 10,
  },
  smallcontainer: {
    display: "flex",
    flexDirection:'column',
    flexWrap: "wrap",
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  quantity: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 130,
    
  },
  description: {},
  title: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnAdd: {
    width: 30,
    height:30,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 22,
    paddingLeft: 10
  },
  btnMinus: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 22,
    paddingLeft: 12,
  },
  quantitytext:{
    margin: 5,

  },
});

export default CartItem;
