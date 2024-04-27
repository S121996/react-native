import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const PlatformComponent = () => {
  return (
    <View style={styles.container}>
      {console.log(Platform.OS)}  
      <Text style={Platform.OS === 'ios' ? styles.textIos : styles.textAndroid}>PlatformComponent</Text>
    </View>
  )
}

export default PlatformComponent

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textIos:{
       fontSize:20,
       fontWeight:'400',
       color:'blue'
    },
    textAndroid:{
        fontSize:18,
        fontWeight:'normal',
        color:'green'
    }
})