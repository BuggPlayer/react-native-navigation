import React from "react";
import { View, Text, Button } from "react-native";

const Fisrtpagee = (props) => {
  return (
    <View>
      <Text>first PAge</Text>
      <Button title="next page" onPress={()=>{
       // console.log("hello")
       props.navigation.navigate("next")
      }} />
    </View>
  );
};

export default Fisrtpagee;
