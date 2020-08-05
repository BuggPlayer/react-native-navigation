import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import HeaderBottn from "../../components/UI/HeaderBottn";
import { useSelector, useDispatch } from "react-redux";
import * as productsAction from "../../stored/actions/products";

const EditProdcutScreen = (props) => {
  const prodId = props.navigation.getParam("productId");
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === prodId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );
  const [mrp, setMrp] = useState(editedProduct ? editedProduct.mrp : "");
  const [kg, setkg] = useState(editedProduct ? editedProduct.kg : "");

  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productsAction.updateProduct(
          prodId,
          title,
          description,
          imageUrl,
          kg,
          mrp
        )
      );
    } else {
      dispatch(
        productsAction.createProduct(
          title,
          description,
          imageUrl,
          +price,
          kg,
          mrp
        )
      );
    }

    props.navigation.goBack();
  }, [dispatch, title, description, imageUrl, price, kg, mrp]);

  useEffect(() => {
    props.navigation.setParams({ submite: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>title </Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            keyboardType="default"
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url </Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            keyboardType="decimal-pad"
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price </Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description </Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>MRP </Text>
          <TextInput
            style={styles.input}
            value={mrp}
            onChangeText={(text) => setMrp(text)}
          />
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>kg/gm </Text>
          <TextInput
            style={styles.input}
            value={kg}
            onChangeText={(text) => setkg(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProdcutScreen.navigationOptions = (navData) => {
  const submitfn = navData.navigation.getParam("submite");
  //console.log(navData);
  return {
    headerTitle: navData.navigation.getParam("productId")
      ? "Edit Products"
      : "Add Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBottn}>
        <Item
          title="Save"
          iconName={Platform.OS === "android" ? "md-menu" : "iso-menu"}
          onPress={submitfn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {},
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default EditProdcutScreen;
