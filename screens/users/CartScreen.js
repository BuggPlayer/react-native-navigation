import React from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cart/CartItem";
import AppButton from "../../components/Buttons/AppButton";
import * as cartAction from "../../stored/actions/Cart";

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transferedCartItems = [];
    for (const key in state.cart.items) {
      transferedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        cartimage: state.cart.items[key].imageURL,
        sum: state.cart.items[key].sum,
      });
    }
    return transferedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:<Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <AppButton title="Order" disabled={cartItems.length == 0} />
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            quantity={itemData.item.quantity}
            image={itemData.item.cartimage}
            title={itemData.item.productTitle}
            price={itemData.item.productPrice}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(cartAction.removeFromCart(itemData.item.productId));
            }}
             onAdd={() => {
              dispatch(cartAction.addItemCart(itemData.item.productId));
             }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    // color="red"
  },
});

export default CartScreen;
