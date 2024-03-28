import { View, Text, StyleSheet ,ScrollView} from 'react-native'
import React from 'react'

const ListWithMapFunction = () => {
    const users=[
        {
            id:1,
            name:"Sumit"
        },
        {
            id:2,
            name:"Rahul"
        },
        {
            id:3,
            name:"Rocky"
        },{
            id:1,
            name:"Sumit"
        },
        {
            id:2,
            name:"Rahul"
        },
        {
            id:3,
            name:"Rocky"
        },
        {
            id:4,
            name:"Ram"
        },
        {
            id:5,
            name:"Shayam"
        },
        {
           id:6,
           name:"Ramavatar"
        },
        {
            id:7,
            name:"Shayaaam"
        },
        {
           id:8,
           name:"Ramaaaaaavatar"
        },
        {
            id:5,
            name:"Shayaaaam"
        },
        {
           id:6,
           name:"Raaaaamavatar"
        }
        ,
        {
            id:7,
            name:"mohan das"
        },
        {
           id:8,
           name:"Ramvilas"
        },
        {
            id:5,
            name:"Shayaaaambajan"
        },
        {
           id:6,
           name:"Raaaaambajan"
        }


    ]

  return (
    <View>
      <Text style={{fontSize:20}}>List With Map Function</Text>
     <ScrollView style={{marginBottom:80}}>
    {
        users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
    </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    item:{
        fontSize: 24,
        padding:10,
        color:"#fff",
        backgroundColor:'blue',
        borderColor:"black",
        borderWidth:1,
        margin:10
    }
})

export default ListWithMapFunction