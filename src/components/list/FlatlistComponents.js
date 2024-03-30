import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import ProductCard from '../ProductCard'
const FlatlistComponent = () => {
    const productsData = [
        { id: 1, name: 'product1', price: '2000' },
        { id: 2, name: 'product2', price: '4000' },
        { id: 3, name: 'product3', price: '6000' },
        { id: 4, name: 'product4', price: '7000' },
        { id: 5, name: 'product5', price: '23000' },
        { id: 6, name: 'product6', price: '7000' },
        { id: 7, name: 'product7', price: '9000' },
        { id: 8, name: 'product8', price: '5000' },
        { id: 9, name: 'product9', price: '7000' },
        { id: 10, name: 'product10', price: '9200' },
    ]
    const [products, setProducts] = useState(productsData)
    const [loading, setLoading] = useState(false)
    const addProducts = () => {

        setTimeout(() => {
            setLoading(true)
            const additonalData = [
                { id: 11, name: 'product11', price: '7000' },
                { id: 12, name: 'product12', price: '9000' },
                { id: 13, name: 'product13', price: '5000' },
                { id: 14, name: 'product14', price: '7000' },
                { id: 15, name: 'product15', price: '9200' },
            ];
            setProducts(prevProducts => [...prevProducts, ...additonalData]);
            setLoading(false)
        },2000)
    
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <Text>FlatlistComponent</Text> */}
            {/*   
     <FlatList
      data={products}
      renderItem={({item})=>
          <View style={styles.product}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          </View>
       }
    />
    */}
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Text style={{ textAlign: 'center', fontSize: 17 }}>Product List</Text>}
                //   onEndReached={()=> console.warn('End Reached')}
                onEndReached={addProducts}
                onEndReachedThreshold={0.2}
                refreshing={false}
                // refreshing={loading}
                onRefresh={() => console.warn('refreshing')}
            />

        </View>
    )
}

export default FlatlistComponent

const styles = StyleSheet.create({
    product: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        height: 60,
        backgroundColor: 'skyblue',
        marginVertical: 10,

    }
})