
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';  // Utilisation de useRoute pour récupérer l'ID

import photoData from '@/datas/photos.json';
import shoesData from '@/datas/shoes.json';

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.modele}>{item.modele || item.modele}</Text>
        <Text style={styles.price}>{item.prix} FCFA</Text>
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
