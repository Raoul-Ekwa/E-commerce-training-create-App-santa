import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { AntDesign, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const descriptionDetaillee = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.bgColor}}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()} >
                <View style={styles.iconHeaderLeft} style={styles.iconLeftContainer}>
                  <Feather name="arrow-left" size={30} />
                  <Text style={styles.headerText}>Détails du produit</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <>
                <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                  <Entypo name="share" size={24} color={Colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                   <MaterialCommunityIcons name="message" size={24} color={Colors.black} />
                </TouchableOpacity>
              </>
            ),
          }}
        />
      </SafeAreaView>
  )
}

export default descriptionDetaillee

const styles = StyleSheet.create({
  iconLeftContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 30,
  },
  apercuDetailsContainer: {
    
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  iconButton: {
    borderRadius: 10,
    marginRight: 20,
  },
  iconHeaderLeft: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginLeft: 5,
    backgroundColor: 'orange'
  },
  headerText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsContainer: {
  
  },
  name: {
    
  },
  subInfoContainer:{
   
  },
  modele:{
    
  },
  description:{
   
  },
  descriptionTitle:{
   
  },
  descriptionText:{
   
  },
  
  
  
});


