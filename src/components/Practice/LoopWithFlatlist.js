import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const LoopWithFlatlist = () => {
  const users = [
    {
      id: 1,
      name: 'Anil',
      email: 'anil@gmial.com',
    },
    {
      id: 2,
      name: 'SuAnil',
      email: 'anil@gmial.com',
    },
    {
      id: 3,
      name: 'KAnil',
      email: 'anil@gmial.com',
    },
    {
      id: 4,
      name: 'JAnil',
      email: 'anil@gmial.com',
    },
    {
      id: 5,
      name: 'NAnil',
      email: 'anil@gmial.com',
    },
    {
      id: 6,
      name: 'MAnil',
      email: 'anil@gmial.com',
    },
    {
      id: 7,
      name: 'Anil',
      email: 'anil@gmial.com',
    },
    {
      id: 8,
      name: 'LAnil',
      email: 'anil@gmial.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Component of Loop With Flatlist</Text>
      <FlatList data={users} renderItem={({item}) => <UserData item={item}/>} />
    </View>
  );
};
const UserData = (props) => {
    const item=props.item
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.id}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    color: 'red',
    flex: 1,
    margin: 2,
    // backgroundColor: 'blue',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default LoopWithFlatlist;
