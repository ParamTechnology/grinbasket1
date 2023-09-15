import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View, Text, style, TouchableOpacity } from "react-native"

export default function BottomTabs() {
    return (
        <View style={{
            flexDirection:"row",
            margin:10,
            marginHorizontal:2,
            justifyContent:"space-between",
            backgroundColor:"#fff"
        }}
        >
            <Icon icon="store" text="Home" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="search" text="Search" />
            <Icon icon="shopping-cart" text="Cart" />
            <Icon icon="user-alt" text="Account" />

            
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>

    <View >    
    <FontAwesome5
    name={props.icon}
    size={25}
    style={{
        
        alignSelf:"center",
        
    }}
    />
    <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>

)