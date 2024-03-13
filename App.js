import {Text,View ,Button,StyleSheet} from 'react-native'
import UserInfo from './UserInfo';
// const UserInfo=()=>{
//   return(
//     <View>
//       <Text>Name: Sumit</Text>
//       <Text>City: Delhi</Text>
//     </View>

//   )
// }

const App=()=>{
  //it will return jsx
  //p tag -Text

  const name='Sumit';
   const displayName =()=>{
    return 'React Native component'
   }

   const marks =28;
   const onPressHandler=()=>{
    console.log('pressed')
   }

   return(<View>
    <Text style={{fontSize:18}}>Hello World</Text>
    <Text></Text>
   </View>)
}
