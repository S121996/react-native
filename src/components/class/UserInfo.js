
import {Text, View} from 'react-native'

const UserInfos =(props)=>{
    console.log(props) // 1. {name:'Rahul', city:'Delhi'} 2. {name:'Bhavesh', city:'Jaipur'}, 3. {}
    return (
        <View>
        <Text style={{fontSize:18}}>Name: {props.name}</Text>
        <Text style={{fontSize:18}}>City: {props.city}</Text>
        </View>
    )
}

export default UserInfos;
