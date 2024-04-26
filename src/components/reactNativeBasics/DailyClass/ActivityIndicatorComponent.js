import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const ActivityIndicatorComponent = () => {
  return (
    <View>
        <ActivityIndicator size='large' color='gray'/>
      <Text>ActivityIndicatorComponent</Text>
    </View>
  )
}

export default ActivityIndicatorComponent