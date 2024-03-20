

import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const KeyboardAvoidingViewComponent = () => {
  return (
    <KeyboardAvoidingView 
    // style={{flex:1}}
    behavior='height'
    >
    <View style={styles.emailContainer}>
     <TextInput style={styles.textInput} placeholder='Enter Email' />
     <TextInput style={styles.textInput} placeholder='Enter Password' />
     <TextInput style={styles.textInput} placeholder='Enter Confirm Password' />
     <TextInput style={styles.textInput} placeholder='Enter Confirm Password' />

     <TextInput style={styles.textInput} placeholder='Enter Confirm Password' />
     <TextInput style={styles.textInput} placeholder='Enter Confirm Password' />
     <TextInput style={styles.textInput} placeholder='Enter Pin Code' />

    </View>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingViewComponent

const styles = StyleSheet.create({
    
    emailContainer:{
        // flex:1,
        justifyContent:'space-around',
        padding:24,
        
    },
    textInput:{
        // height:40,
        borderWidth:1,
        marginBottom:50,
        paddingHorizontal:12,
        paddingVertical:15,
        borderColor:'skyblue'
    }
})