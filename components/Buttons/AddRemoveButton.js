import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const AddRemoveButton = props => {
  return (
    <Button
      type="outline"
      buttonStyle={[styles.button, { width: 32 }]}
      title={props.title}
      onPress={props.onPress}
      titleStyle={styles.titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#f15b5d",
  },

  button: {
    width: 30,
    height: 30,
    borderColor: "#f15b5d",
    borderWidth: 0.3,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default AddRemoveButton;
