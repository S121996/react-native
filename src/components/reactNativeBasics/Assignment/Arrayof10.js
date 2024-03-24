import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const CityListComponent = () => {
  const [cities, setCities] = useState([
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
  ]);

  const handleRemoveCity = (city) => {
    setCities(cities.filter(item => item !== city));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRemoveCity(item)}>
      <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CityListComponent;

