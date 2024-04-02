import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const NewAssignment = () => {
    const [data,setData]=useState()

const getAPIData = async()=>{
    const url ="https://fakestoreapi.com/products";
    let result = await fetch(url);
    result = await result.json()
    setData(result);
}

useEffect(()=>{
    getAPIData();
},[])


  return (
    <View>
        <Text>List with</Text>
        {
        data.length  ? 
        data.map((item)=>{
        <View>
            <Text>{item.id}</Text> </View>
        })
        :null
}
    </View>
  )
}

export default NewAssignment