import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import ButtonComponent from './src/components/reactNativeBasics/DailyClass/ButtonComponents';
// import TextInputComponent from './src/components/reactNativeBasics/DailyClass/TextInpuComponent';
// import SearchUseEffectComponent from './src/components/reactNativeBasics/DailyClass/SearchUseEffectComponents';
// import ScrollviewComponent from './src/components/reactNativeBasics/DailyClass/ScrollviewComponent';
// import KeyboardAvoidingViewComponent from './src/components/reactNativeBasics/DailyClass/KeyBoardAvoidComponents';
// import ImageComponent from './src/components/reactNativeBasics/DailyClass/ImageComponents';
import FlatListUseEffectAssignment from './src/components/reactNativeBasics/DailyClass/FlatListUseEffectAssignment';
const App = () => {
  const styles = StyleSheet.create({
   
  })
  return (
    <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
     <Text style={styles.text}></Text>
   <Text style={{fontSize:30}}></Text>

   {/* Daily Class*/ }

{/* <ButtonComponent/> */}
{/* <TextInputComponent/> */}
{/* <SearchUseEffectComponent/> */}
{/* <ScrollviewComponent/> */}
{/* <KeyboardAvoidingViewComponent/> */}
{/* <ImageComponent/> */}
<FlatListUseEffectAssignment/>
   

    </View>
  )
}



export default App;