import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";


const Todolist=()=>{
const [text ,setText]=useState('');
const [value,setValue]=useState('');

    return(
        <View>
           <TextInput 
           placeholder="Enter Your Value" 
           onChangeText={(text) => setText(text)}
           />

        <Text>{data}</Text>
        <Button title='display Value' onPress={Todolist}></Button>

        </View>
    )
   
}


export default TodolistComponent ;
const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'skyblue',
        marginVertical:10,
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:10,
    }
})