import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can use other icon libraries too

const Banner = () => {
    const banners = [
      { id: 1, image: require('../assets/images/first.jpg') },
      { id: 2, image: require('../assets/images/second.jpg') },
      { id: 3, image: require('../assets/images/third.jpg') },
    ];
  
    return (
      <View style={styles.container}>
        <Swiper
          autoplay
          autoplayTimeout={3} // Adjust autoplay interval (in seconds)
          showsPagination={true} // Hide pagination dots
        >
          {banners.map((banner) => (
            <View key={banner.id} style={styles.slide}>
              <Image source={banner.image} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: 150, // Adjust the height as needed
      marginTop:10,
      width:"90%",
      marginLeft:20,
      marginBottom:10
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });
  
  export default Banner;
  