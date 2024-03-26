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
// import CityListComponent from './src/components/reactNativeBasics/Assignment/Arrayof10';
// import LoginScreen from './src/components/reactNativeBasics/Assignment/UIreactnative';
// import YourApp from './src/components/Practice/first';
// import Secondapp from './src/components/Practice/second';
// import Thirdpart from './src/components/Practice/third';
// import JSX from './src/components/Practice/JSX';
// import Components from './src/components/Practice/Components';
import ButtononPress from './src/components/Practice/ButtononPress';
const App = () => {
  const styles = StyleSheet.create({
   
  })
  return (
    <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
     <Text style={styles.text}></Text>
   <Text style={{fontSize:30}}></Text>

   {/* <YourApp/> */}
   {/* <Secondapp/> */}
 {/* <Thirdpart/> */}
 {/* <JSX/> */}
 {/* <Components/> */}
 <ButtononPress/>
     {/* <BasicsOne/> */}
    {/* <Todolist/> */}
    {/* <ImageComponent/> */}
    {/* <KeyboardAvoidingViewComponent/> */}
    {/* <LoginScreen/> */}
    {/* <CityListComponent/> */}
  {/* <ScrollviewComponent/> */}
  {/* <TextInputComponent/> */}

    </View>
  )
}



export default App;