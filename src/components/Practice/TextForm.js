import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const TextForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display,setDisplay]=useState(false);

  const resetFormData=()=>{
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  }

  return (
    <View>
      <Text style={{fontSize: 40}}>Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Mail Id"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <View style={{marginBottom:10}}>
        <Button title="Print Details"  color={"green"}
        onPress={()=>setDisplay(true)}/>
      </View>
      <Button title="Clear Details" onPress={resetFormData}/>
      <View>
        {
            display ?
            <View> 
                <Text style={{fontSize:25}}>User Name is:{name}</Text>
                <Text style={{fontSize:25}} >User Password is:{password}</Text>
                <Text style={{fontSize:25}}>User Email is:{email}</Text>
                


                </View>
                :null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'red',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default TextForm;
