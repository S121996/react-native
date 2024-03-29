import { View, Text,SectionList, StyleSheet } from 'react-native'
import React from 'react'

const SectionlistComponents = () => {
    const users=[
        {
        id:1,
        name:"Sumit",
        data:["JavaScript","ReactNative","Jquery","Html/Css"]
        
    },
    {
        id:2,
        name:"Rahul",
        data:["JavaScript","ReactNative","Jquery","Html/Css"]
        
    },
    {
        id:3,
        name:"Bhargava",
        data:["JavaScript","ReactNative","Jquery","Html/Css"]
        
    },
    {
        id:4,
        name:"punit",
        data:["JavaScript","ReactNative","Jquery","Html/Css"]
        
    }




    ]
  return (
    <View>
      <Text style={{fontSize:30,marginLeft:20}}>Sectionlist</Text>
      <SectionList 
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
     renderSectionHeader={({section:{name}})=>(
<Text style={{fontSize:20,color:"red"}}>{name}</Text>
  )
    }
      />
    </View>
  )
}



export default SectionlistComponents