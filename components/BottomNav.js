import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const BottomNav = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      {/* Content */}
      

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Home' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('Home')}
        >
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Profile' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('Profile')}
        >
          <Text>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === 'Settings' && styles.activeTab,
          ]}
          onPress={() => handleTabPress('Settings')}
        >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%', // Ensure content takes the full width
    paddingHorizontal: 20, // Optional: Add horizontal padding
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
});

export default BottomNav;
