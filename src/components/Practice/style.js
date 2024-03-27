import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const Style = () => {
  return (
    <View>
      <Text style={{fontSize:40,color:'red', backgroundColor:'blue'}}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={{fontSize:40,color:'red'}}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
    
    </View>
  )
};

const styles=StyleSheet.create({
    textBox:{
        color: '#fff',
        fontSize:40,
        backgroundColor:'lightblue',
        margin:10,
        padding:10,
        borderRadius:20,
        height:100,
        textAlign:'center',
        textAlignVertical:'center',
        borderColor:'red',
        borderWidth:2
    }
})

export default Style