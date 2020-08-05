import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import AddRemoveButton from "../Buttons/AddRemoveButton";

const CartItem = (props) => {
  // console.log("stock", props.outofstock);
  // console.log("quantity", props.quantity);
  const data =
    props.outofstock === props.quantity ? "Out Stock" : "in stock";
  // const [isStockEmpty, setIsStockEmpty] = useState(false);
  // console.log(
  //   props.outofstock === props.quantity ? setIsStockEmpty(true) : "hello"
  // );
  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.smallcontainer}>
        <Text style={styles.rs}>STOCK:{props.outofstock}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.rs}>Rs: {props.price.toFixed(2)}</Text>
        <Text style={styles.save}>TOTal: {props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <View style={styles.countView}>
            <AddRemoveButton title="-" onPress={props.onRemove} min="1" />
            <Text style={{ alignSelf: "center", margin: 5, fontWeight: "600" }}>
              QTY: {props.quantity}
                {data}
            </Text>
            <AddRemoveButton
              title="+"
              onPress={props.onAdd}
              disabled={props.quantity==props.outofstock}
            />
          </View>
        )}
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
