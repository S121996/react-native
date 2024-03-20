import React, { useState } from "react";
import {Text,View,TextInput,Button} from 'react-native'

const LoginUi=()=>{
const [email ,setEmail]=useState('');
const [password ,setPassword]=useState('');

const Login=()=>{
    if(password.length>=6){
        console.log('Email:',email);
        console.log('Password:',password);
    }
    else{
        console.log('Password is invalid')
    }
}

return(
    <View>
        <Text>Login</Text>
        <TextInput title="Enter your mail id" 
        value={email}
        onChangeText={(text)=> setEmail(text)}/>
        <Button title ="Login" onPress={LoginUi}></Button>
    </View>
)
}

export default LoginUi;