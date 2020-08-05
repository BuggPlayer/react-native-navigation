import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const AppButton = (props) => {
  return (
    <Button
  
   disabled={props.disabled}
      type="clear"
      buttonStyle={{...styles.button,...props.style}}
      title={props.title}
      onPress={props.onPress}
      //style={...style. ...props.button}
      
      titleStyle={styles.titleStyle}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },

  button: {
    width: 80,
    height: 30,
    backgroundColor: "#f15b5d",
    alignSelf: "center",
    borderRadius: 50,
  },
});

export default AppButton;
