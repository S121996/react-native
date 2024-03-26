import { View, Text } from 'react-native'
import React from 'react'

let age=28;
var email="sumit@12345gmail.com";

function fruit(){
    return "Mango";
}

const JSX = () => {
    const name="Sumit";
  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{age}</Text>
      <Text style={{fontSize:30}}>{email}</Text>
      <Text style={{fontSize:30}}>{fruit()}</Text>
      <Text style={{fontSize:30}}>{100 +20}</Text>
      <Text style={{fontSize:30}}>{100*20}</Text>
      <Text style={{fontSize:30}}>{age===39?"above 30" : "Under age" }</Text>

    </View>
  )
}

export default JSX