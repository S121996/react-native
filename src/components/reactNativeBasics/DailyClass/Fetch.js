import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
const FetchDataComponent = () => {
    const [data, setData] = useState([]);

    // const fetchData = async () =>{
    //    const response =await fetch(`https://fakestoreapi.com/products`);
    //    console.log(response)
    //    const jsonData =await response.json();
    //    console.log(jsonData) 
    // }
    const fetchData = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        // console.log(response.data)
        // const datas = response.data
        setData(response.data);
    }
    
    fetchData();
  return (
    <View>
      <Text>FetchData</Text>
      {data.map((product)=>(
        <Text>Title: {product.title.substring(0,10)}</Text>
      ))}
    </View>
  )
}

export default FetchDataComponent

const styles = StyleSheet.create({})