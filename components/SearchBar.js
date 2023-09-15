import { View, Text, TextInput } from "react-native";
import Header from "../components/Header";
import Ionicons from "react-native-vector-icons/Ionicons"


export default function SearchBar() {
  return (
    
    <View 
    style={{
        marginTop:10,
        marginBottom:10,
        flexDirection:"row",
        // justifyContent:"center",
        
        alignItems:"center",
        marginLeft:"5%",
        borderWidth:1,
        borderColor:"grey",
        width:"90%",
        borderRadius:50,
        height:35
        }}>
        <Ionicons 
            name="nutrition-outline" 
            size={24}
            style={{
                
                marginRight:5,
                marginLeft:15
        }}
        color={"grey"} />
        <TextInput
            placeholder="Search veggie"
        />
    </View>
  );
}
