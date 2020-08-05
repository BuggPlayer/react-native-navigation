import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import CartItem from "../cart/CartItem";

const OrderItems = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    //console.log(props.items),
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$ {props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title={ showDetails ?"Hide Details" : "show Details"}
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View style={styles.detalisItems}>
          {props.items.items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              image={cartItem.cartimage}
              title={cartItem.productTitle}
              price={cartItem.productPrice}
              amount={cartItem.sum}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  totalAmount: {
    //font family
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  detalisItems: {
    width: "100%",
  },
});

export default OrderItems;
