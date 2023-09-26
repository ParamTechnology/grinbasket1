import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const QuantitySelector = ({ onChange, initialValue = 0 }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    if (typeof onChange === 'function') {
      onChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (typeof onChange === 'function') {
        onChange(quantity - 1);
      }
    }
  };

  return (
    <View style={styles.container}>
        
      <TouchableOpacity onPress={handleDecrement} activeOpacity={1}>
        <Text style={styles.button}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity onPress={handleIncrement} activeOpacity={1}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:10,

  },
  button: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginHorizontal:5,
    
  },
  quantity: {
    fontSize: 15,
    fontWeight: 'bold',
    
    
  },
});

export default QuantitySelector;
