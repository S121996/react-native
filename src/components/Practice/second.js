import React from "react";
import {ScrollView,Text,View,Image,TextInput,StyleSheet} from 'react-native'

const Secondapp=()=>{
    const styles = StyleSheet.create({
   
    })
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <Text>Holi AAYi Hol</Text>
            <View>
                <Text>Heppy Holi</Text>
                <Image source={{uri:'https://static.toiimg.com/thumb/msid-74477009,width-1070,height-580,imgsize-197846,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'}} 
                style={{width:200,height:200}}
                />
            </View>

            <TextInput style={{
                height:40,
                borderColor:'gray',
                borderWidth:1,
            }}
            defaultValue="You can type now"
            />
        </ScrollView>
    )
}

export default Secondapp