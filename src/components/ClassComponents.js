import{View,Text} from 'react-native'
import React from 'react';
class ClassComponents extends React.Component{
//props={name:'React native}
    render(){
        return(
            <View>
                <Text>Hello,{this.props.name}               </Text>
                <Text>How are you class,{this.props.City}               </Text>
                <Text>Hello from class Components</Text>
                <Text>Hello,Welcome Developer</Text>
            </View>
        )
    }
} export default ClassComponents;