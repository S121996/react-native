
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import UserInfo from '../class/UserInfo';
import ClassComponents from '../class/ClassComponents';

const BasicsOne = () => {
     //it will return jsx
  //p tag - Text--  

  const numbers = 123;
  const name = 'Sumit';
  const displayName = () => {
    return 'React Native component'
  }
  const marks = 28;
  const onPressHandler = () => {
    console.log('pressed')
  }
  return (
    <View>
       <Text style={{ fontSize: 18 }}>Hello World</Text>
      <Text style={styles.text}>Hello from React Native</Text>

      <Button
        title='Press here'
        onPress={onPressHandler}
      />
      <Button
        title='update'
        onPress={() => updateValue('World')}
      />

      <Text>{name}</Text>
      <Text>{displayName()}</Text>
      <Text>{marks > 35 ? 'pass' : 'fail'}</Text>

      <UserInfo name='Rahul' city='Delhi' />
      <UserInfo name='Bhavesh' city='jaipur' />
      <UserInfo name='Sumit' city='Noida' />

      <ClassComponents name='React Native' />
    </View>
  )
}
const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    }
  })
export default BasicsOne
