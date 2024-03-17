import{Text,View} from 'react-native'
const UserInfo=(props)=>{
    console.log(props)
    return(
        <View>
            <Text >Name:Sumit</Text>
            <Text >City:Noida</Text>
            <Text style={{fontSize:18}}>Hello are you,{props.name}</Text>
            <Text color="11ff66">Hello,{props.City}</Text>
        </View>
    )
}

export default UserInfo;