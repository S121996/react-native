import { View, Text,Button } from 'react-native'
import React ,{useState} from 'react'

const State = () => {
    const [name,setName]=useState("Sumit Bhargava");

    function testName(){
    setName("Rahul ")
    }
  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Button title='Update Name' onPress={testName}></Button>
    </View>
  )
}

export default State