// app/(tabs)/details/[id].tsx

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useSearchParams } from 'expo-router'; // Permet de récupérer les paramètres dynamiques de l'URL
import photoData from '@/datas/photos.json';  // Données des photos
import shoesData from '@/datas/shoes.json';  // Données des chaussures

// Cette page reçoit l'ID dans l'URL et l'utilise pour trouver l'élément dans les données
const DetailsScreen = () => {
  const { id } = useSearchParams(); // Récupère l'ID depuis l'URL
  const itemId = parseInt(id!); // Convertir l'ID en nombre entier

  // Trouve l'élément correspondant dans les données
  const item = [...photoData, ...shoesData].find((item) => item.id === itemId);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Élément non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.modele}>{item.modele || item.modèle}</Text>
        <Text style={styles.price}>{item.prix} FCFA</Text>
        <Text style={styles.description}>{item.description || 'Aucune description disponible.'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  modele: {
    fontSize: 18,
    color: '#555',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'blue',
    fontWeight: '500',
    marginBottom: 10,
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
});

export default DetailsScreen;
