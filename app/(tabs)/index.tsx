import React from 'react';
import { ImageBackground, Text, Image, TouchableOpacity, View, ScrollView, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import PhotoAndShoesScreen from '@/components/PhotoAndShoesScrenn';
import HomeImageBackground from '@/components/HomeImageBackground';



const Page = () => {
  return ( 
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/images/Rectangle 1.png')} // Remplace par ton image
        resizeMode="cover" // Assure que l'image couvre toute la zone
      >
        {/* Le composant Stack.Screen configure l'entête de l'écran. Il fait partie d'une navigation, probablement de React Navigation. */}
        <Stack.Screen
          options={{
            headerTransparent: true, // L'entête de l'écran est transparente
            headerTitle: '', // Pas de titre dans l'entête
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
                <Image
                  source={require("../../assets/images/Pour la Loterie Americaine.jpeg")} // Avatar utilisateur (image aléatoire)
                  style={{ width: 40, height: 40, borderRadius: 10 }} // Style de l'image de l'avatar (cercle)
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: 20,
                  backgroundColor: Colors.white,
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: '#171717',
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Ionicons name="notifications" size={20} color={Colors.black} />
              </TouchableOpacity>
            ),
            headerTitle: () => (
              <Image
                source={require('../../assets/images/logo_santaLucia.png')} // Assurez-vous que le chemin d'image est correct
                style={{ width: 200, height:130 , marginTop: 65 }} // Ajuste la taille du logo
              />
            ),
          }}
        />
        
        {/* ScrollView avec contenu */}
        <View>
          
        </View>
          <View style={styles.headerText}>
            {/* <Text style={styles.headingText}>Explorez nos différents produits !</Text> */}
          </View>
       </ImageBackground>
       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={18} style={{ marginRight: 10, color: Colors.black }} />
              <TextInput placeholder="Recherche un produit" />
            </View>

            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="options" size={20} style={styles.filterButton} />
            </TouchableOpacity>
          </View> 
        <HomeImageBackground />
       <PhotoAndShoesScreen /> 

      
     </ScrollView>
      
    
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permet à la ScrollView de s'étendre au maximum sans se restreindre à la taille du contenu
    paddingBottom: 10, // Pour éviter que le bas de la page soit collé au bord de l'écran
  },
  headerText: {
    padding: 10,
    marginTop: 100,
    backgroundColor: '#fff2f2', // Couleur de fond pour le contenu
  },
  headingText: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.black, // Assure que le texte est visible
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    gap: 20,
    marginHorizontal: 10,
    alignItems: 'center'
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 20,
    alignItems:'center'
  },
  filterButton: {
    backgroundColor: Colors.rose,
    padding: 16,
    borderRadius: 10,
    color: Colors.white,
  },
  
});

export default Page;
