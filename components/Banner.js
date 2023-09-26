import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import SearchBar from 'react-native-searchbar';




const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firestore = firebase.firestore();
    const bannersCollection = firestore.collection('banner');

    bannersCollection.onSnapshot((snapshot) => {
      const bannerData = [];
      snapshot.forEach((doc) => {
        const banner = doc.data();
        bannerData.push(banner);
      });
      setBanners(bannerData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  

  return (
    <Swiper style={styles.wrapper} autoplay={true}>
      {banners.map((banner, index) => (
        <View key={index} style={styles.slide}>
          <Image style={styles.image} source={{ uri: banner.image }} />
        </View>
      ))}
    </Swiper>
  );
};




const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height:200
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Banner;
