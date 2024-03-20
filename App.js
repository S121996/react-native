import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BasicsOne from './src/components/reactNativeBasics/BasicsOne';
// import TextInputComponent from './src/components/reactNativeBasics/TextInputComponent';
// import LoginUi from './src/components/reactNativeBasics/UIreactnative';
// import Todolist from './src/components/reactNativeBasics/Assignment/TodolistComponent';
import ImageComponent from './src/components/reactNativeBasics/ImageComponents';
import KeyboardAvoidingViewComponent from './src/components/reactNativeBasics/DailyClass/KeyBoardAvoidComponents';
import ScrollviewComponent from './src/components/reactNativeBasics/DailyClass/ScrollviewComponent';
import TextInputComponent from './src/components/reactNativeBasics/DailyClass/TextInpuComponent';
const App = () => {

  return (
    <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
     <Text style={styles.text}>React Native</Text>
   <Text style={{fontSize:30}}>Hello React Native</Text>
    {/* <BasicsOne />
    <TextInputComponent /> */}
    
   <Todolist/>
    <ImageComponent/>
    <KeyboardAvoidingViewComponent/>
  <ScrollviewComponent/>
  <TextInputComponent/>
    </View>
  )
}



export default App;