import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Promotions = () => {
  return (
    <View style={styles.Container}>
      <Text>Promotions</Text>
    </View>
  )
}

export default Promotions

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})