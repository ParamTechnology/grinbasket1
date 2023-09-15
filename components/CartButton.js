import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartButton = () => {
  const [displayText, setDisplayText] = useState('Initial Text');

  // Function to handle button click and change the text
  const changeText = () => {
    setDisplayText('New Text After Click');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <Button title="Change Text" onPress={changeText} />
    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize: 18,
    
  },
});

export default CartButton;
