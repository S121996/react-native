
const { View, Text, StyleSheet, ScrollView } = require("react-native")


const ScrollviewComponent = () =>{

    return(
        <ScrollView 
        // style={styles.container}
        // showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <View style={{flexDirection:'row'}}>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
         <View style={styles.card}>
            <Text>Phone</Text>
         </View>
        </View>
        </ScrollView>
    )
}

export default ScrollviewComponent;

const styles = StyleSheet.create({
    container:{
    flex:1
    },
    card:{
       justifyContent:'space-around',
       marginTop:10,
       alignItems:'center',
       borderWidth:1,
       width:50,
       height:50,
       borderColor:'skyblue',
       borderRadius:10, 
    }
})
