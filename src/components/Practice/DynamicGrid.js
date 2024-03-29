import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DynamicGrid = () => {
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
      <Text style={{fontSize:30}}>Grid with Dynamic</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap', marginBottom:10}}>
        {/* <Text style={styles.item} >Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text>
        <Text style={styles.item}>Sumit</Text> */}
        {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    item:{
   fontSize:25,
   backgroundColor:'blue',
   color:"#fff",
   margin:5,
   padding:5,
   width:120,
   height:120,
   textAlign:"center",
   textAlignVertical:"center"

    }
})

export default DynamicGrid