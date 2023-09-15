import { View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"


export default function Header() {
  return (
    <View
      style={{
        marginTop:40,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
      }}
    >
      <Image 
       source={require('../assets/appData/logo.png')}
       style={{
            height:35,
            width:80,
            }}
       
       />
       <Text 
        style={{
            marginLeft:110,
            fontWeight:"bold",
            color:"#3D550C"
            }}>
                Hinjewadi, Pune
        </Text>
        <Ionicons 
        name="notifications" 
        size={26}
        style={{
            justifyContent:"flex-end",
            marginRight:20
        }}
        color={"#3D550C"} />
    </View>
  );
}
