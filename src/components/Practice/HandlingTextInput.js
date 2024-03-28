import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import React, { useState } from 'react'

const HandlingTextInput = () => {
    const [name,setName]=useState("");
  return (
    <View>
      <Text style={{fontSize:40}}>Handling Text Input</Text>
      <Text style={{fontSize:20}}>Your Name Is :{name}</Text>
      
      <TextInput style={styles.textInput}
      placeholder='Enter Your Name' 
      value={name}
      onChangeText={(text)=>setName(text)}
    
      />
     <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  )
}

const styles=StyleSheet.create({
    textInput:({
        fontSize:18,
        color:'red',
        borderWidth:2,
        borderColor:'blue',
         margin:10
})
})

export default HandlingTextInput