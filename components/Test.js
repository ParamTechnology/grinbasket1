import { db } from "./Firebase";import { View, Text, Button } from "react-native";
import Product from "./Product";

const data = [];
const fetchData = async () => {
    try {
      const collectionRef = db.collection('products');
      const snapshot = await collectionRef.get();
      data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data); // Log the fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

export default function Test() {

  return (
    
    <View>
      <Button onPress={fetchData} title="hi" />
      <Product products={data}/>
    </View>
      
  
  );
}
