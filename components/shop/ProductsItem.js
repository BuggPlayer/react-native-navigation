import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../Constants/Colors";
import Card from "../UI/Card";

const ProductsItem = (props) => {
  // const dispatch = useDispatch();

  return (
    <TouchableOpacity 
    //onPress={props.dtaisl}
    >
      <View style={{ ...styles.product, ...props.style }}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: props.image,
            }}
          />
        </View>

        <View style={styles.actions}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.description}</Text>
          <Text>{props.kg}kg/gm</Text>
          <Text style={{ textDecorationLine: "line-through" }}>
            MRP:{props.mrp}
          </Text>
          <Text>₹: {props.price}</Text>
          <View style={styles.btnaddtocart}>{props.children}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    height: "auto",
     display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",

    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  actions: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
  },

  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    //width: "100%",
    //height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
    height: 120,
    width: 125,
    backgroundColor: "red",
    //justifyContent: "",
    //alignItems: "flex-start",
    //alignContent: "center",
    //backgroundColor: "#581845",
    marginTop: 15,
    marginLeft: 10,
  },
  details: {
    //flex: 1,
    padding: 0,
    justifyContent: "space-around",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    width: "100%",
    //display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 5,
    color: Colors.primary,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  btnaddtocart: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    //alignContent: "center",
    bottom: 30,
    paddingRight: 5
    // position: "absolute",
  },
  text: {
    marginBottom: 10,
  },
  kg: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 50,
    textAlign: "center",
    borderColor: "#20232a",
  },
});

export default ProductsItem;
