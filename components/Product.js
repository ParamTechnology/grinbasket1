import React from "react";
import { TextInput } from "react-native";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import QuantitySelector from "./QuantitySelector";

function Product() {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.productCategory}>{item.category}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="information-outline"
            size={17}
            color="grey"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.productPrice}>
          ₹{item.price}/{item.unit}
        </Text>
        <Text style={styles.previousPrice}>
          ₹{item.previousPrice}/{item.unit}
        </Text>
      </View>
      <QuantitySelector />
      <TouchableOpacity style={{ position: "absolute", right: 0, top: 0 }}>
        <Text
          style={{
            color: "white",
            backgroundColor: "green",
            padding: 3,
            fontWeight: "bold",
          }}
        >
          50% off
        </Text>
      </TouchableOpacity>
    </View>
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const firestore = firebase.firestore();
    const productsCollection = firestore.collection("products");

    productsCollection.onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) => {
        const product = doc.data();
        productsData.push(product);
      });
      setProducts(productsData);
    });
  }, []);

  return (
    <>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Set the number of columns for your grid
        contentContainerStyle={styles.productGrid}
        scrollEnabled={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  productGrid: {
    padding: 1,
    backgroundColor: "#eee",
  },
  productItem: {
    flex: 2,
    flexDirection: "column",
    margin: 8,
    padding: 0,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    height: 230,
  },
  productImage: {
    width: "100%",
    height: 125, // Adjust the height as needed
    resizeMode: "cover",
  },
  productName: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "900",
  },
  productCategory: {
    fontSize: 12,
    margin: 5,
    color: "grey",
  },
  productPrice: {
    color: "green",
    fontWeight: "700",
    marginLeft: 5,
  },
  previousPrice: {
    color: "grey",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
});

export default Product;
