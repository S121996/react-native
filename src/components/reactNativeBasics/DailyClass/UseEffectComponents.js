import { View, Text,Button,Image,ScrollView,StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';

const UseEffectComponents = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
   // useEffect(()=>{
    //  console.log('useEffect Called')
    // })
    // console.log('outside useEffect')

    // useEffect with empty dependency array
    // useEffect(()=>{
    //     console.log('useEffect Called')
    // },[])

    // useEffect with dependency value
 
   
    useEffect(()=>{
        // console.log('useEffect Called')
    },[])
//Api call using eseEffect--
useEffect(()=>{
    const fetchData = async () =>{
        const response=await axios.get('https://fakestoreapi.com/products');
        setData(response.data)
    }
    fetchData();
},[])

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <Text>UseEffectComponent {count}</Text>
      <Button 
      title='increment'
      onPress={()=>setCount(count+1)}
      />

      {data.map((product)=>(
        <View style={styles.productContainer}>
        <Image
        source={{uri: product.image}}
        style={{width:100, height:100}}
        />    
        <View style={{marginLeft:10}}>
        <Text style={styles.headerText}>{product.title.substring(0,10)}</Text>
        <Text style={styles.text}>Rating: {product.rating.rate} ({product.rating.count})</Text>
        <Text style={styles.text}>₹ {product.price}</Text>
        </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    productContainer:{
        marginTop:10,
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:10,
        marginBottom:5,
        flexDirection:'row',
        shadowColor:'#000000',
        shadowOpacity:0.3,
        shadowOffset:{
            width:0,
            height:20
        },
        shadowRadius:4,
        elevation: 4,
        // borderWidth:1
    },
    headerText:{
        fontSize:17,
        fontWeight:'bold',
        color:'grey'
    },
    text:{
       fontSize:17,
       color:'grey' ,
       marginTop:2
    }
})

export default UseEffectComponents