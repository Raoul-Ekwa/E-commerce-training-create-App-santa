import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { router, Stack } from 'expo-router';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { LuxeType } from '@/types/LuxeType';
import luxeData from '@/datas/luxe.json';

const BonPlans = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <View style={styles.Container}>
              <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
                  <View style={styles.iconHeaderLeft}>
                    <Feather name="arrow-left" size={24} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.headerText}>Bons Plans</Text>
              </View>
            </View>
          ),
        }}
      />
      <View style={styles.bonplansContainer}>
        <Text style={{fontSize: 15}}>Mes bons plans</Text>
      </View>

      
    </>
  );
}
  

export default BonPlans;

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  iconButton: {},
  iconHeaderLeft: {
    backgroundColor: Colors.white,
    padding: 5,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: 100,
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    borderRadius: 10,
    gap: 5,
  },
  sectionHeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10, // Espacement horizontal entre les cartes
    marginBottom: 20, // Espacement vertical entre les cartes
    borderRadius: 10,  
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '45%', // Ajuster la largeur pour deux éléments par ligne
  },
  image: {
    width: '70%', 
    height: 130,   // Garder la hauteur de l'image
    borderRadius: 10, 
    marginBottom: 10,  // Un petit espace sous l'image
    marginTop:10
  },
  nameItem: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  PriceModeleItem: {
    marginTop: 5,
    gap: 5,
  },
  shareIcon: {
    marginTop: 20,
    
  },
  bonplansContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
