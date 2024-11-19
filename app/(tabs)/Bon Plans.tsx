import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BonPlans = () => {
  return (
    <View style={styles.Container}>
      <Text>BonPlans</Text>
    </View>
  )
}

export default BonPlans

const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})