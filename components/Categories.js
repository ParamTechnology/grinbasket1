import react from "react";
import { View, Text, Image, ScrollView } from "react-native";


const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts",
    }
]


export default function Categories() {
    return (
        <View style={{
            marginTop:1,
            backgroundColor:"#fff",
            paddingVertical:10,
            paddingLeft:0,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Loop Starts */}
            {items.map((item, index) =>(
            <View key={index} style={{alignItems:"center", marginRight:30}}>
           <Image source={item.image} style={{
            width:30,
            height:30,
            resizeMode:"contain",
           }}/>
           <Text style={{fontSize:11, fontWeight:"700"}}>{item.text}</Text>
           </View>
           ))}
           {/* Loop Ends */}
        </ScrollView>
        </View>
    )
}