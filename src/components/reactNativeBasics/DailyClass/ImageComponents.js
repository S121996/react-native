import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View style={{flex:1}}>
     <Image
       source={require('../../assests/aws.png')}
       resizeMode='contain'
       style={{width:300}}
     />
     <Image
       source={{uri:'https://res.cloudinary.com/djxhf8jwg/image/upload/v1705810351/image-5_ohwt21.webp'}}
       style={{width:300, height:300}}
     />
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({})