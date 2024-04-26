import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
// import ButtonComponent from './src/components/reactNativeBasics/DailyClass/ButtonComponents';
// import TextInputComponent from './src/components/reactNativeBasics/DailyClass/TextInpuComponent';
// import SearchUseEffectComponent from './src/components/reactNativeBasics/DailyClass/SearchUseEffectComponents';
// import ScrollviewComponent from './src/components/reactNativeBasics/DailyClass/ScrollviewComponent';
// import New from './src/components/reactNativeBasics/DailyClass/New ';
// import KeyboardAvoidingViewComponent from './src/components/reactNativeBasics/DailyClass/KeyBoardAvoidComponents';
// import ImageComponent from './src/components/reactNativeBasics/DailyClass/ImageComponents';
// import FlatListUseEffectAssignment from './src/components/reactNativeBasics/DailyClass/FlatListUseEffectAssignment';
// import ButtonComponent from './src/components/reactNativeBasics/DailyClass/ButtonComponents';
// import UseEffectComponents from './src/components/reactNativeBasics/DailyClass/UseEffectComponents';
// import FetchDataComponent from './src/components/reactNativeBasics/DailyClass/Fetch';
// import Arrayof1o from './src/components/reactNativeBasics/Assignment/Arrayof10'
// import BasicsOne from './src/components/reactNativeBasics/Assignment/BasicsOne';
// import NewAssignment from './src/components/reactNativeBasics/Assignment/NewAssignment';
// import ActivityIndicatorComponent from './src/components/reactNativeBasics/DailyClass/ActivityIndicatorComponent';
// import UseStateComponent from './src/components/class/UseStateComponents';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import UseEffectComponent from './src/components/reactNativeBasics/DailyClass/UseEffectComponents';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/reactNativeBasics/Home';
import ProductListingComponent from './src/components/ProductListingComponents';
import Profile from './src/components/Profile';
import ProductCard from './src/components/ProductCard';

const Tab =createBottomTabNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Products" component={ProductListingComponent}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="ProductCard" component={ProductCard}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
};
// const Home=(props)=>{
//   const {navigation}=props
//   return(
//     <View>
//     <Text>Home</Text>
//     <Button title='Products' onPress={()=>navigation.navigate('Products') }/>
//     </View>
//   )
// }

export default App;
