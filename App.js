// import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import BasicsOne from './src/components/reactNativeBasics/BasicsOne';
// import TextInputComponent from './src/components/reactNativeBasics/TextInputComponent';
// import LoginUi from './src/components/reactNativeBasics/UIreactnative';
// import Todolist from './src/components/reactNativeBasics/Assignment/TodolistComponent';
// import ImageComponent from './src/components/reactNativeBasics/ImageComponents';
// import KeyboardAvoidingViewComponent from './src/components/reactNativeBasics/DailyClass/KeyBoardAvoidComponents';
// import ScrollviewComponent from './src/components/reactNativeBasics/DailyClass/ScrollviewComponent';
// import TextInputComponent from './src/components/reactNativeBasics/DailyClass/TextInpuComponent';
import CityListComponent from './src/components/reactNativeBasics/Assignment/Arrayof10';
import LoginScreen from './src/components/reactNativeBasics/Assignment/UIreactnative';
const App = () => {
  const styles = StyleSheet.create({
   
  })
  return (
    <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
     <Text style={styles.text}>R</Text>
   <Text style={{fontSize:30}}>H</Text>
     {/* <BasicsOne/> */}
    {/* <Todolist/> */}
    {/* <ImageComponent/> */}
    {/* <KeyboardAvoidingViewComponent/> */}
    {/* <LoginScreen/> */}
    <CityListComponent/>
  {/* <ScrollviewComponent/> */}
  {/* <TextInputComponent/> */}
    </View>
  )
}



export default App;