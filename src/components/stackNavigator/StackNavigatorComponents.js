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
import Home from './src/components/reactNativeBasics/Home';
import ProductListingComponent from './src/components/ProductListingComponents';
import ProductDetails from './src/components/ProductDetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        // screenOptions={{
        //   title: 'Home',
        //   headerStyle: {backgroundColor: '#008080'},
        //   headerTintColor: '#fff',
        //   headerTitle: {
        //     fontWeight: 'bold',
        //   },
        // }}
        >
        <Stack.Screen
          name="Products"
          component={ProductListingComponent}
          options={{
            title: 'Products Listing',
            headerStyle: {backgroundColor: '#008080'},
            headerTintColor: '#fff',
            headerTitle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
            options={{title:'Home Screen',
            headerStyle:{backgroundColor:'#008080'},
            headerTintColor:'#fff',
            headerTitle:{
              fontWeight:'bold'
            }

          }}
        />
        <Stack.Screen name="Product Details" component={ProductDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
    //     <View style={{ paddingHorizontal: 10, paddingTop:40 }}>
    //      <Text style={styles.text}></Text>
    //    <Text style={{fontSize:30}}></Text>

    //    {/* Daily Class*/ }
    //    {/* <UseEffectComponents/> */}
    // {/* <TextInputComponent/> */}
    // {/* <SearchUseEffectComponent/> */}
    // {/* <ScrollviewComponent/> */}
    // {/* <New/> */}
    // {/* <KeyboardAvoidingViewComponent/> */}
    // {/* <ImageComponent/> */}
    // {/* <FlatListUseEffectAssignment/> */}
    //  {/* <ButtonComponent/>   */}
    // {/* <FetchDataComponent/> */}
    // <ActivityIndicatorComponent/>

    //  {/* Assignment*/}
    // {/* <Arrayof1o/> */}
    // {/* <BasicsOne/> */}
    // {/* <NewAssignment/> */}
    // {/* <UseStateComponent/> */}

    //     </View>
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
