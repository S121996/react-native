
import React from 'react';
import {View, Text} from 'react-native'

class ClassComponents extends React.Component {
   //props = {name:'React Native'}
    render(){
        return (
            <View>
                <Text>Hello from { this.props.name } in class component</Text>
            </View>
        )
    }
}

export default ClassComponents;
