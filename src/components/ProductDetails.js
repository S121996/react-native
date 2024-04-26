import { View, Text,Image } from 'react-native'
import React from 'react'

const ProductDetails = (props) => {
    const {route}=props
    console.log(route.params)
    const {id,title,image}= route.params
  return (
    <View>
      {/* <Text style={{fontSize:17}}>{route.params.id}</Text>
      <Text>{route.params.title}</Text> */}
      <Image source={{uri:image}}
      style={{width:100,height:100}}
      />
       <Text style={{fontSize:17}}>{id}</Text>
      <Text style={{fontSize:17}}>{title}</Text>
      
    </View>
  )
}

export default ProductDetails