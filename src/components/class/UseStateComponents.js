
import React from 'react'

const UseStateComponent = () => {
      // const arr = useState('Rahul');
  //  const [value] = arr
  // const [value, setValue] = useState([]);
  const [value, setValue] = useState('Rahul');
  const [counter, setCounter] = useState(0);
  const updateValue = (value) => {
    console.warn('Hello ', value)
  }
  const updateData = () => {
    setValue('Ram');
    // numbers = 400;
  }
  const incrementValue = () =>{
  //  setCounter(counter + 1) // 0 + 1 = 1
  //  setCounter(counter + 1) // 0 + 1 = 1
  //  setCounter(counter + 3) // 0 + 1 = 1
  //  setCounter(counter + 1) // 0 + 1 = 1

  setCounter((prevState) => prevState + 1) //prevState=0, 0+1=1
  setCounter((prevState) => prevState + 1) //prevState=1, 1+1 = 2
  setCounter((prevState) => prevState + 1) //prevState=2, 2+1 =3
  setCounter((prevState) => prevState + 1) //prevState=3, 3+1 = 4

  }
  const decrementValue = () =>{
  //  if(counter <= 0){
  //   return
  //  } 
   if(counter <=0) return
   setCounter(counter - 1)
  }
  return (
    <View>
        {/* Hooks */}
      <Text style={styles.text}>Value: {value}</Text>
      <Text>{numbers}</Text>
      <Button
        title='update data'
        onPress={updateData}
      />

      <Text style={styles.text}>{counter}</Text>
      <View style={{flexDirection:'row'}}>
        <Button
        title='increment'
        onPress={incrementValue}
        />
        <Button
        title='decrement'
        onPress={decrementValue}
        />
      </View>
    </View>
  )
}

export default UseStateComponent
