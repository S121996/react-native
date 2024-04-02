import React, { useState, useEffect } from 'react';
import { View, FlatList, Text,Button} from 'react-native';

const FlatListUseEffectAssignment = () => {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to delete an item
  const deleteItem = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
      <Text>{item.title}</Text>
      <Button title="Delete" onPress={() => deleteItem(item.id)} />
      {/* <Pressable
       onPress={()=>deleteItem(item.id)}
        >
          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}} >Delete</Text>
        </Pressable> */}
    </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};





export default FlatListUseEffectAssignment;
