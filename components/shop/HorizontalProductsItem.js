import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import Colors from "../../Constants/Colors";
import AppButton from "../Buttons/AppButton";

const HorizontalProductsItem = (props) => {
  return (
    <View>
      <View style={styles.choiceView}>
        <Text style={styles.choiceText}>Top Deals</Text>
      </View>
      <View style={styles.product}>
        <TouchableOpacity>
          <Image
            style={styles.foodImage}
            source={{
              uri: props.image,
            }}
          />

          <View style={styles.actions}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text>{props.kg}kg/gm</Text>
            <Text style={{ textDecorationLine: "line-through" }}>
              MRP:{props.mrp}
            </Text>
            <Text>₹: {props.price}</Text>
            <View style={styles.btnaddtocart}>
              <AppButton  title="Order Now" onPress={props.orderNow} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: 280,
    width: 190,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  choiceView: {
    height: 40,
    marginLeft: 10,
    marginRight: 30,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.2,
    justifyContent: "flex-start",
  },
  choiceText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#f15b5d",
  },
  foodImage: {
    borderRadius: 10,
    height: 150,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin: 5,
  },
  actions: {
    //flex: 1,
    padding: 5,
    justifyContent: "center",
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
    fontSize: 14,
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
    width: 80,
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 100,
    marginTop: 120,
   
    position: "absolute",
    borderRadius: 20,
  },
  text: {
    marginBottom: 10,
  },
  kg: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 30,
    textAlign: "center",
    borderColor: "#20232a",
  },
});
export default HorizontalProductsItem;
