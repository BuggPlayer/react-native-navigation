import React from "react";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import Colors from "../../Constants/Colors";
const CartProducts = (props) => {
  return (
    <View style={styles.product}>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
});

export default CartProducts;
