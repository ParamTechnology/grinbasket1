import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Product from "../components/Product";
import BottomTabs from "../components/BottomTabs";

export default function HomeScreen() {
  return (
    // <SafeAreaView>
    <SafeAreaView style={{flex:1}}>
      <View>
        <Header />
        <SearchBar />


        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
        <Banner />

        <Categories />
        <Product />

        </ScrollView>
      
        <View>
          
        <BottomTabs />
        </View>
    </SafeAreaView>
  );
}
