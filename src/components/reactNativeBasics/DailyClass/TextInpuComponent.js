
import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

const TextInputComponent = () =>{
    const [text ,setText] = useState('');
    const [value, setValue] = useState('');
    const [data, setData] = useState('');
    const displayValue = () =>{
     setData(value)
    }

    // const display = () =>{
    //     setData(value)
    //    }
    return(
     <View>
        <TextInput
         placeholder="Enter your Name"
         style={styles.textInput}
         multiline
         numberOfLines={2}
         textAlignVertical="top"
         editable
        //  dfd
        value={text}
        onChangeText={text=>setText(text)}

        />
        {/* <Text>{value}</Text> */}
        {/* <Button title="click" onPress={display}></Button> */}

        <TextInput
         placeholder="Enter Value"
        //  value={value}
         onChangeText={text=>setValue(text)}
         style={styles.textInput}
        />
        {/* <Text>{value}</Text> */}
        <Text>{data}</Text>
        <Button
         title='display Value'
         onPress={displayValue}
        />
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
    }
})


export default TextInputComponent;

