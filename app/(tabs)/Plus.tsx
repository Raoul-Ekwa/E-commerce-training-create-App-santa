import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Plus = () => {
  return (
    <View style={styles.Container}>
      <Text>Plus</Text>
    </View>
  )
}

export default Plus

const styles = StyleSheet.create({
    Container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }
  })