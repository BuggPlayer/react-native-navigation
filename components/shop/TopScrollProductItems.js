import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const TopScrollProductItems = (props) => {
  return (
    <View>
      <View style={styles.choiceView}>
        <Text style={styles.choiceText}>Top Deals</Text>
      </View>

      <TouchableOpacity>
        <Image
          style={styles.foodImage}
          source={{
            uri:props.image
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 20,
    height: 220,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    margin:3
  },
});
export default TopScrollProductItems;
