import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const firestore = firebase.firestore();
    const productsCollection = firestore.collection('products');

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
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Home;
