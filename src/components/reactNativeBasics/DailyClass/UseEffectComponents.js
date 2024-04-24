import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UseEffectComponent = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //  console.log('useEffect Called')
  // })
  // console.log('outside useEffect')

  // useEffect with empty dependency array
  // useEffect(()=>{
  //     console.log('useEffect Called')
  // },[])

  // useEffect with dependency value
  useEffect(() => {
    // console.log('useEffect Called')
  }, [count])

  // Api call using useEffect--
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data)
      setProductData(response.data)
      setLoading(false)
    }
    fetchData();
  }, [])

  const searchProduct = () =>{
    //  const filteredProduct = data.filter((product)=>(
    //     product.title === inputValue
    //  ))
    const filteredProduct = data.filter((product)=>(
      product.title.toLowerCase().includes(inputValue.toLowerCase())
   ))
    //  setData(filteredProduct)
    setProductData(filteredProduct)
  }

  // const deleteItem = (id) => {
  //   const newData = data.filter(product => product.id !== id);
  //   setData(newData);
  // };

  // if (loading) return <ActivityIndicator />
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {/* <Text>UseEffectComponent {count}</Text>
      <Button 
      title='increment'
      onPress={()=>setCount(count+1)}
      /> */}
      <View style={{flex:1,flexDirection:'row'}}>
        <TextInput
          placeholder='Enter Product Name'
          style={styles.textInput}
          onChangeText={(text)=>setInputValue(text)}
        />
        <Pressable
        onPress={searchProduct}
        style={styles.button}>
          <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Saerch</Text>
        </Pressable>
      </View>
      { loading ? (
        <ActivityIndicator size='large' />
      ):(
      <View>
      {productData.map((product) => (
        <View style={styles.productContainer}>
          <Image
            source={{ uri: product.image }}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ marginLeft: 10 }}>
          {/* <Text style={styles.headerText}>{product.title}</Text> */}

            <Text style={styles.headerText}>{product.title.substring(0, 10)} 
            {/* <Pressable onPress={()=>deleteItem (product.id)}>
          <Text style={{color:'blue',fontSize:16,fontWeight:'bold',paddingLeft:30}}>X</Text>
            </Pressable> */}
            </Text>
            <Text style={styles.text}>Rating: {product.rating.rate} ({product.rating.count})</Text>
            <Text style={styles.text}>₹ {product.price}</Text>
          </View>
        </View>
      ))}
      </View>
      )}
    </ScrollView>
  )
}

export default UseEffectComponent

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowRadius: 4,
    elevation: 4,
    // borderWidth:1
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'grey'
  },
  text: {
    fontSize: 17,
    color: 'grey',
    marginTop: 2
  },
  textInput:{
    flex:1,
    paddingVertical:8,
    paddingHorizontal:12,
    fontSize:16,
    backgroundColor:'#fff',
    borderRadius:10,
    marginRight:10
  },
  button:{
    backgroundColor:'#007bff',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:20
  }

})