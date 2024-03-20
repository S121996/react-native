
import { useState } from "react";
import { View, TextInput,StyleSheet, Text, Button } from "react-native";


const Todolist=()=>{
const [value ,setValue]=useState('');
const [data,setdata]=useState('');
const [arrayData,setarrayData]=useState([])
// arrayData=[]
// arrayData=['Sumit','Rahul','Ram','Shayam']
const addTodo=()=>{
    // setData(value)
    setdata((prevData) => prevData +'\n'+value)
    //using Array

    setarrayData(prevData=>[...prevData,value])
    setValue('')
}
    return(
        <View>
           <TextInput 
           placeholder="Enter Your Value" 
           onChangeText={text => setText(text)}
           style={styles.textInput}
           value={value}
           />

        <Text>{data}</Text>
        <Button title='add'
         onPress={addTodo}></Button>
         {/* <Text style={styles.text}>{data}</Text> */}
         {/* using array*/ }
         {/* arrayData=['Sumit','Rahul','Noida']*/ }
         {arrayData.map((data,index)=>(
            <Text style={{fontSize:17}} key={index}>{data}</Text>
         ))}

        </View>
    )
   
}
const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'skyblue',
        marginVertical:10,
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:10,
    },
    text:{
        fontSize:17,
        fontWeight:'bold'
    }
})

export default Todolist ;

