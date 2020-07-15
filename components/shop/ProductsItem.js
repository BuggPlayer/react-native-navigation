import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import Colors from "../../Constants/Colors";
const ProductsItem = (props) => {
  //console.log(props)
  // const onDetails = props => {
  ///  props.navigation.navigate("pd");
  // };

  return (
    <TouchableOpacity
      onPress={
       // (props) => {
       // props.navigation.navigate("details");
    //  }
    console.log(props.navigation)
    }
    >
      <View style={styles.product}>
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
          <View style={styles.btnaddtocart}>
            <Button
              color={Colors.primary}
              style={{ borderRadius: 20 }}
              title="Cart"
              //  onPress={onDetails}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
    height: "80%",
    width: 125,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
    marginTop: 15,
    marginLeft: 10,
  },
  details: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    width: "100%",
    display: "flex",
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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 100,
    marginTop: 115,
    position: "absolute",
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
