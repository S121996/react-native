import { View, Text ,FlatList, StyleSheet} from 'react-native'
import React from 'react'

const ListFlatList = () => {
    
    const users=[
        {
            id:1,
            name:"Anil"
        },
        {
            id:2,
            name:"Sunil"
        },
        {
            id:3,
            name:"Ram"
        }
        ,
        {
            id:4,
            name:"Sumit"
        }
        ,
        {
            id:5,
            name:"Rahul"
        }
    ]

  return (
    <View>
      <Text style={{fontSize:30}}>List With Flat List</Text>
    <FlatList
    data={users}
    renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    keyExtractor={item=>item.id}
    />
    </View>
  )
}

const styles=StyleSheet.create(
    {
      item:{
        fontSize:20,
        padding:10,
        color:"#fff",
        backgroundColor:"orange",
        borderColor:"black",
        borderWidth:1,
        margin:10
      }  
    }
)

export default ListFlatList