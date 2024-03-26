import { View, Text } from 'react-native'
import React from 'react'

const Components = () => {
  return (
    <View>
        <CompanyData/>
        <UserData/>
      <Text style={{fontSize:30}}>Components</Text>
     <StateData/>
      
     
    </View>
  )
};

const UserData=()=>{
    return(
        <View>
            <Text style={{fontSize:20}}>Name:Sumit</Text>
            <Text style={{fontSize:20}}>Age:28</Text>
            <Text style={{fontSize:20}}>City:Noida</Text>
            <Text style={{fontSize:20}}>Email:Sumit@123.com</Text>
        </View>
    )
}

const  StateData=()=>{
    return(
        <View>
            <Text style={{fontSize:20}}>StateName:UP</Text>
            
        </View>
    )
}

const CompanyData=()=>{
    return(
        <View>
            <Text style={{fontSize:20}}>CompanyName:Bhargava Education</Text>
            <Text style={{fontSize:20}}>Total Emp:100000</Text>
            <Text style={{fontSize:20}}>City:Noida</Text>
            <Text style={{fontSize:20}}>Email:Bhargava@123.com</Text>
        </View>
    )
}


export default Components