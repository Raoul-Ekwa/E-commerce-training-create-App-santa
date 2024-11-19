import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Scanner = () => {
  return (
    <View style={styles.Container}>
      <Text>Scanner</Text>
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({
    Container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }
  })