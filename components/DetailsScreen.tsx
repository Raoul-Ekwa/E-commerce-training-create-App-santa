import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params; // Récupérer l'item passé en paramètre

  if (!item) {
    return (
      <View style={styles.container}>
        <Text>No item found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.modèle}</Text>
      <Text>{item.prix} FCFA</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default DetailsScreen;
