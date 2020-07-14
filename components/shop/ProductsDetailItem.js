import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const ProductsDetailItem = (props) => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/powerhouse_vegetables_slideshow/650x350_powerhouse_vegetables_slideshow.jpg",
          }}
        />
      </View>
      <View style={styles.smallcontainer}>
        <Text style={styles.title}>Fresh and maha Fresh</Text>
        <Text style={styles.description}>Descriptipn:qweer rrtryr r ehheret  ergrgfr efh </Text>
        <Text style={styles.mrp}>MRP:300</Text>
        <Text style={styles.rs}>Rs:123</Text>
        <Text style={styles.save}>Saving:null </Text>
      </View>
      <View style={styles.btnaddtocart}>
        <Button title={"add to cart"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: "auto",
    maxWidth:500,
    display: "flex",
    //flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    marginRight:10,
  },

  image: {
    borderRadius: 10,
    height: 250,
    width: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
    marginTop: 20,
    marginLeft: 70,
  },
  smallcontainer: {
    padding: 25,
  },
  btnaddtocart: {
    borderRadius: 10,
    //width:80,
    //height:25,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 150,
    marginTop: 350,
    position: "absolute",
  },
  description: {
   
  },
  title: {
    color:"green",
    fontSize:18,
    fontWeight:"bold",
    textAlign: 'center',
    
  },
});
export default ProductsDetailItem;
