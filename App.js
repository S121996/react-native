import React,{useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import UserInfo from './src/components/UserInfo';
import ClassComponents from './src/components/ClassComponents';
import 'react-native-gesture-handler';
/*const UserInfo=()=>{
  return(
    <View>
      <Text>Name:Sumit</Text>
      <Text>City:Noida</Text>
    </View>
  )
}*/
/* const [value] =arr */
/*const [value,setValue] = useState([]);*/


 const App = () => {
  //it will return jsx
  //p tag ==Text
  const name = 'Sumit';

  const [count,setCounter]=useState(0);
const incrementValue =()=>{
  setCounter(count+1)//0+1=1
  setCounter(count+1)
  setCounter(count+1)
  setCounter(count+1)//0+1=1
}

const decrementValue =()=>{
  //if (Counter==0)
  //return}
  if(count<=0)
  return 
setCounter(count-1)
}

const [value,setValue] = useState('Vishnu');
let numbers =123;
const updateData=()=>{
  setValue('Bhavesh')
  numbers=400;
}

  const displayName = () => {
    return 'React Native component';
  };
  const onPressHandler = () => {
    console.log('presses completed');
  };
  const marks = 29;
  
  const updateValue=(value)=>{
    console.warn('hello',value)
  }

  return (
    <View>
      <Text style={{fontSize: 18}}>hello world </Text>
      <Text style={styles.text}>Hello Sumit in React Native</Text>
      <Button
        title="Press Me"
        color="#ff34ff"
        onPress={onPressHandler}/>
      <Button
        title="Press here"
        onPress={() => console.log('pressed again')}
        color="#542322"
      />
      <Text>{name}</Text>
      <Text>{displayName()}</Text>
      <Text>{marks > 35 ? 'pass' : 'fail'}</Text>
     
      <UserInfo name="Rahul" City="Varanasi" />
      <UserInfo name="Raj" City="jaipur" />

      <ClassComponents name="Ram" City="Lucknow" />
      
      <Button title="Update" 
      onPress={()=>updateValue('World')}
      />

<Button title="Sumit" 
      onPress={()=>console.log('Sumit Bhargava')}
      />

      
<Text style= {styles.text} color ="00ff55">
  Value:{value}
</Text>
<Text>{numbers}</Text>
<Button title="update data" 
      onPress={updateData}
      />
<Text>Count:{count}</Text>
<Button onPress={incrementValue} title='Increment'>
  
</Button>
<Button onPress={decrementValue} title='decrement'>
  
</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
