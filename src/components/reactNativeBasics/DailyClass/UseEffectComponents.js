import { View, Text,Button,Image,ScrollView,StyleSheet, Pressable } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';

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

const deleteItem = (id) => {
    const newData = data.filter(product => product.id !== id);
    setData(newData);
  };

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <Text>UseEffectComponent {count}</Text>
      <Button 
      title='increment'
      onPress={()=>setCount(count+1)}
      />
     {/* <Pressable  onPress={}/> */}
     {/* <Button style={{marginTop:5}}
      title='Delete'
      onPress={()=>setCount(count-1)}
      /> */}

      {data.map((product,index)=>(
        <View style={styles.productContainer} key={index}>
        <Image
        source={{uri: product.image}}
        style={{width:100, height:100}}
        />    
        <View style={{marginLeft:20}}>
        <Text style={styles.headerText}>{product.title.substring(0,10) }
        <Pressable onPress={()=>deleteItem (product.id)}>
          <Text style={{color:'blue',fontSize:16,fontWeight:'bold',paddingLeft:30}}>X</Text>
            </Pressable></Text>
        {/* <Button title="Delete" onPress={() => deleteItem(product.id)} /> */}
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