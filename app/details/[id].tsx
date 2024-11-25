import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { router, Stack } from 'expo-router';
import { AntDesign, Feather } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import photoData from '@/datas/photos.json';
import shoesData from '@/datas/shoes.json';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

// Typing de l'ID récupéré
type RouteParams = {
  id: string;
};

const DetailsScreen = () => {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  // Convertir l'ID en nombre entier
  const itemId = parseInt(id, 10);

  // Recherche de l'élément correspondant dans les tableaux `photoData` et `shoesData`
  const item = [...photoData, ...shoesData].find((item) => item.id === itemId);

  // Si aucun élément n'est trouvé, afficher un message d'erreur
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Élément non trouvé</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
              <View style={styles.iconHeaderLeft}>
                <Feather name="arrow-left" size={30} />
                <Text style={styles.headerText}>Détails du produit</Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <>
              <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                <AntDesign name="sharealt" size={24} color={Colors.black} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                <AntDesign name="message1" size={24} color={Colors.black} />
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.subInfoContainer}>
          <Text style={styles.modele}>{item.modele || 'Modèle indisponible'}</Text>
          {/* <Text style={styles.price}>{item.prix} FCFA</Text> */}
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description de l'article</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis possimus voluptates quas porro doloremque ut nostrum! Optio minima suscipit expedita illum saepe asperiores, maiores in accusamus velit, esse praesentium.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton}onPress={() => {}}>
            <Text style={{color: Colors.white, fontSize: 15, fontWeight: 'bold'}}> Acheter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.priceButton} onPress={() => {}}>
            <Text style={{color: Colors.white, fontSize: 15, fontWeight: 'bold'}}>{item.prix} FCFA</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8cbdb',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  iconButton: {
    borderRadius: 10,
    padding: 4,
  },
  iconHeaderLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    padding: 10,
  },
  headerText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconHeaderRight: {
    flexDirection: 'row',
    gap: 20,
    padding: 10,
  },
  imageContainer: {
    marginTop: 30,
    marginHorizontal: 15,
  },
  image: {
    width: '100%',
    height: IMG_HEIGHT,
    borderRadius: 10,
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
  subInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modele: {
    fontSize: 20,
    color: '#777',
  },
  price: {
    fontSize: 22,
    color: 'blue',
    fontWeight: '500',
  },
  description: {
    marginTop: 20,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 15,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 15,
    letterSpacing: 0.7,
    lineHeight: 30,
  },
  buttonContainer:{
     flexDirection: 'row',
     marginTop: 70,
     justifyContent: 'space-between',
     marginHorizontal: 25,
  },
  buyButton: {
   backgroundColor: Colors.rose,
   padding: 20,
   borderRadius: 10,
   paddingHorizontal : 50
  },
  priceButton: {
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
  }
});

export default DetailsScreen;
