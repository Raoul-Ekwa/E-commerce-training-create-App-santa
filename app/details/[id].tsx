
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';  // Utilisation de useRoute pour récupérer l'ID

import photoData from '@/datas/photos.json';
import shoesData from '@/datas/shoes.json';
import { router, Stack } from 'expo-router';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';


const {width} = Dimensions.get('window')
const IMG_HEIGHT = 300

// Typing de l'ID récupéré
type RouteParams = {
  id: string; // Déclare un type `RouteParams` pour spécifier que l'objet de paramètres de la route contiendra une clé `id` de type `string`.
};

const DetailsScreen = () => {
  const route = useRoute();  // Utilise le hook `useRoute` de React Navigation pour accéder aux paramètres de la route courante.
  
  // Extraire l'ID de la route à partir des paramètres passés à cette route.
  const { id } = route.params as RouteParams; 

   {/*  Utilisation de la déstructuration pour extraire l'ID des paramètres de la route. 
   On précise que `route.params` a un type `RouteParams` pour garantir que l'ID est bien 
   une chaîne (`string`). */}

  const itemId = parseInt(id, 10);  // Convertit l'ID de type `string` en entier avec `parseInt()`. Le deuxième argument `10` spécifie que l'on travaille en base 10.

  // Recherche de l'élément correspondant dans les tableaux `photoData` et `shoesData` à partir de l'ID
  const item = [...photoData, ...shoesData].find(item => item.id === itemId);  
  // Utilise la méthode `.find()` pour parcourir les tableaux combinés `photoData` et `shoesData` et trouver l'élément dont l'ID correspond à `itemId`.
  // On utilise l'opérateur spread `...` pour combiner les deux tableaux en un seul avant d'effectuer la recherche.

  // Si aucun élément n'est trouvé (si `item` est `undefined` ou `null`), afficher un message d'erreur.
  if (!item) {  
    return (
      <View style={styles.container}>  // Retourne une vue avec un message d'erreur, si l'élément n'a pas été trouvé.
        <Text style={styles.errorText}>Élément non trouvé</Text>  // Affiche le texte "Élément non trouvé" dans un `Text` pour informer l'utilisateur.
      </View>
    );
  }

  return (
   
      <SafeAreaView style={{flex:1, backgroundColor: '#f8cbdb' }}>
         <Stack.Screen options={{
        headerTitle: '',  // Retire le titre de l'entête.
        headerTransparent: true,  // Rend l'entête transparente.
        headerLeft: () => (
          // Bouton à gauche dans l'entête, pour revenir à la page précédente.
          <TouchableOpacity 
            onPress={() => router.back()}  // Navigue vers la page précédente en utilisant `router.back()`.
            style={{
              //backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fond semi-transparent.
              borderRadius: 10,  
              padding: 4,  
            }}
          >
            <View style={styles.iconHeaderLeft}>
              <Feather name="arrow-left" size={30} />  {/* Icône de flèche pour revenir à la page précédente. */}
              <Text style={{color: Colors.black, fontSize: 18, fontWeight:'bold'}}> Details du produit</Text>

            </View>
          </TouchableOpacity>
        ),
        // headerTitle: () =>  (
        // ),
        headerRight: () => (
          <>
           <TouchableOpacity 
             
              onPress={() => {}}  
              style={{
                //backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fond semi-transparent.
                borderRadius: 10,  
                padding: 4, 
                
              }}
          >
              <View style={styles.iconHeaderRight}>
              <AntDesign name="sharealt" size={24} color={Colors.black} /> 
              </View>
             
           </TouchableOpacity>

          <TouchableOpacity 
                      
            onPress={() => {}}  
            style={{
              //backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fond semi-transparent.
              borderRadius: 10,  
              padding: 4, 
              
            }}
          >
            <View style={styles.iconHeaderRight}>
            <AntDesign name="message1" size={24} color="black" />
            </View>

          </TouchableOpacity>
          </>
         
          
        ),
      }} />
        <View style={styles.imageContainer}>
        <Image
            source={{ uri: item.image }} 
            style={styles.image} 
        />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={styles.modele}>{item.modele || item.modele}</Text>
            <Text style={styles.price}>{item.prix} FCFA</Text>
          </View>

          <View style={styles.description}>
            <Text>Description de l'article</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis possimus voluptates quas porro doloremque ut nostrum! Optio minima suscipit expedita illum saepe asperiores, maiores in accusamus velit, esse praesentium.</Text>
          </View>
        </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8cbdb',
    padding: 20,
  },
  iconHeaderLeft: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  iconHeaderRight: {
    flexDirection: 'row',
    gap: 20,
    padding: 10,
  },
  image: {
    width: 400,
    height: 300,
    borderRadius:10,

  },
  imageContainer: {
    marginTop: 30,
    marginHorizontal: 15,

  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  modele: {
    fontSize: 20,
    color: '#777',
    //marginVertical: 10,
  },
  price: {
    fontSize: 22,
    color: 'blue',
    fontWeight: '500',
    //marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;