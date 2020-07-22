import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";

import AddRemoveButton from "../Buttons/AddRemoveButton";



const CartItem = (props) => {

  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.smallcontainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.rs}>Rs:{props.price.toFixed(2)}</Text>
        <Text style={styles.save}> TOTal:{props.amount.toFixed(2)} </Text>
        <View style={styles.countView}>
          <AddRemoveButton
            title="-"
           onPress={props.onRemove}
          />
          <Text
           h4
            style={{ alignSelf: "center", margin: 5, fontWeight: "600" }}
          >
          QTY: {props.quantity}
          </Text>
          <AddRemoveButton
            title="+"
            onPress={props.onAdd}
          />
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
    flexDirection: "column",
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
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 22,
    paddingLeft: 10,
  },
  btnMinus: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    fontSize: 22,
    paddingLeft: 12,
  },
  quantitytext: {
    margin: 5,
  },

  countView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 8,
  },

});

export default CartItem;
