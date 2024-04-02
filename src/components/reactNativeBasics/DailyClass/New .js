import React, { useState } from 'react';
import{View, Text, Button} from 'react-native'
const New =() =>{
const [count,setCount] = useState(0);
const Update =()=> {
    setCount(prevCount=>prevCount+1)
    // setCount(prevCount=>prevCount+1)
    // setCount(prevCount=>prevCount+1)
    // setCount(prevCount=>prevCount+1)
    // setCount(prevCount=>prevCount+1)
   
}

const Delete=()=>{
  
  setCount(prevCount=>prevCount-1)
}
return(
<View >
  <Text>Counter :{count}</Text>
  <Button title ="Update"  onPress={Update}  ></Button>
  <Button title ="Delete"  onPress={Delete} ></Button>
</View>
)
}
export default New;
