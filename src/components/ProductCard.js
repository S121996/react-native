import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductCard = (props) => {
    const {item} = props  //item :{"id": 1, "name": "product1", "price": "2000"}
    // console.log(props) //props-  {item :{"id": 1, "name": "product1", "price": "2000"}}
    const {name} = item

    // const items = {
    //     names:'Sumit',
    //     item:{
    //         name:'product',
    //         price:2000,
            
    //     }
    // }
    // const {names} = items
    // console.log(names)
  return (
    <View style={styles.product}>
          <Text>{name}</Text>
          <Text>{props.item.price}</Text>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    product:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderWidth:1,
      height:60,
      backgroundColor:'skyblue',
      marginVertical:10,

    }
})