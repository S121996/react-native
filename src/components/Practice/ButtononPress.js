import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtononPress = () => {
    let data=10;
    const fruit=(val)=>{
        data=20;
        console.warn(data)
    }
  return (
    <View>
      <Text style={{fontSize:40}}>{data}</Text>
      <Button title='On Press' onPress={fruit} color={'green'}></Button>
      <Button title='Press' onPress={()=>fruit("Hello")} color={'lightgreen'}></Button>
    </View>
  )
}

export default ButtononPress