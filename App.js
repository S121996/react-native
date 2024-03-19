import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BasicsOne from './src/components/reactNativeBasics/BasicsOne';
import TextInputComponent from './src/components/reactNativeBasics/TextInputComponent';

const App = () => {

  return (
    <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
     <Text style={styles.text}>React Native</Text>

    {/* <BasicsOne /> */}
    <TextInputComponent />

    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical:15
  }
})

export default App;