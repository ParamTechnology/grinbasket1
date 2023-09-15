import React from 'react';
import { TextInput } from 'react-native';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import CartButton from './cartButton';

const products = [
  {
    id: '1',
    name: 'Product 1',
    category: 'fruit',
    price: '20',
    unit:'kg',
    previousPrice:'40',
    image: require('../assets/images/test.jpg'), // Replace with your image path
  },
  {
    id: '2',
    name: 'Product 2',
    category: 'fruit',
    price: '20',
    unit:'kg',
    previousPrice:'40',
    image: require('../assets/images/test.jpg'),
  },
  {
    id: '3',
    category: 'fruit',
    name: 'Product 3',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'), // Replace with your image path
  },
  {
    id: '4',
    category: 'fruit',
    name: 'Product 4',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'),
  }, {
    id: '5',
    category: 'fruit',
    name: 'Product 5',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'), // Replace with your image path
  },
  {
    id: '6',
    category: 'fruit',
    name: 'Product 6',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'),
  }, {
    id: '7',
    category: 'fruit',
    name: 'Product 7',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'), // Replace with your image path
  },
  {
    id: '8',
    category: 'fruit',
    name: 'Product 8',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'),
  },
  {
    id: '8',
    category: 'fruit',
    name: 'Product 8',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'),
  },
  {
    id: '8',
    category: 'fruit',
    name: 'Product 8',
    price: '20',
    previousPrice:'40',
    unit:'kg',
    image: require('../assets/images/test.jpg'),
  },
  // Add more products here
];
function Product() {
  const renderItem = ({ item }) => (
    <View style={styles.productItem}>

      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={styles.productPrice}>₹{item.price}/{item.unit}</Text>
        <Text style={styles.previousPrice}>₹{item.previousPrice}/{item.unit}</Text>
    </View>
    <CartButton />
      <TouchableOpacity style={{position:"absolute", right:0, top:0}}>
        <Text style={{color:"white", backgroundColor:"green", padding:3, fontWeight:"bold"}}>50% off</Text>
    </TouchableOpacity>

    </View>
  );

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
    backgroundColor:'#eee'
  },
  productItem: {
    flex: 2,
    flexDirection: 'column',
    margin: 8,
    padding: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    height:200
  },
  productImage: {
    width: '100%',
    height: 125, // Adjust the height as needed
    resizeMode: 'cover',
  },
  productName: {
    marginLeft:5,
    fontSize: 12,
    fontWeight:"900"

  },
  productCategory: {
    fontSize:12,
    margin:5,
    color:"grey"
  },
  productPrice: {
    color:"green",
    fontWeight:"700",
    marginLeft:5
  },
  previousPrice:{
    color:"grey",
    textDecorationLine:'line-through',
    marginRight:10
  }
});

export default Product;
