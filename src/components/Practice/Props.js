import { View, Text,Button } from 'react-native'
import React,{useState} from 'react'

const PropsUse  = () => {
   const [name,setName]=useState("Rahul")

  return (
    <View>
      <Text style={{fontSize:30, color:'red'}}>Parents Props</Text>
     <Button title='Update Props'onPress={()=>setName("Peter")}></Button>
   <User name={name} age={29}/>
    </View>
  )
}
const User=(props)=>{
    // console.warn()
    return(
        <View style={{backgroundColor:'green', padding:5}}>
      <Text style={{fontSize:30, color:'white'}}>Name:{props.name}</Text>
      <Text style={{fontSize:30, color:'white'}}>Age:{props.age}</Text>
    
    </View>
    )
}
export default PropsUse