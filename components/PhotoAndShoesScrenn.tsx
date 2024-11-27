// components/PhotoAndShoesScreen.tsx
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Utilisation de useRouter
import photoData from '@/datas/photos.json';
import shoesData from '@/datas/shoes.json';
import { PhotoType } from '@/types/PhotoType';
import { ShoesType } from '@/types/ShoesType';
import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const PhotoAndShoesScreen = () => {
  const [photoDataState, setPhotoDataState] = useState<PhotoType[]>([]);
  const [shoesDataState, setShoesDataState] = useState<ShoesType[]>([]);
  const [selectedItem, setSelectedItem] = useState<PhotoType | ShoesType | null>(null); 
  const router = useRouter(); // Initialisation du hook router

  useEffect(() => {
    setPhotoDataState(photoData);
    setShoesDataState(shoesData);
  }, []);

  const handlePress = (item: PhotoType | ShoesType) => {
    setSelectedItem(item);
    console.log('Élément cliqué:', item);
    router.push(`/details/${item.id}`);
  };

  const renderPhotoItem = ({ item }: { item: PhotoType }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)} 
      style={[styles.card, item === selectedItem && styles.selectedCard]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.nameItem}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.PriceModeleItem}>
        <Text numberOfLines={1} ellipsizeMode="tail">{item.modele}</Text>
        <Text style={{ color: 'blue', fontSize: 15, fontWeight: '500' }}>{item.prix} FCFA</Text>
      </View>
    </TouchableOpacity>
  );

  const renderShoesItem = ({ item }: { item: ShoesType }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)} 
      style={[styles.card, item === selectedItem && styles.selectedCard]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.nameItem}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.PriceModeleItem}>
        <Text numberOfLines={1} ellipsizeMode="tail">{item.modele}</Text>
        <Text style={{ color: 'blue', fontSize: 15, fontWeight: '500' }}>{item.prix} FCFA</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Section Bons Plans */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Nos Bons Plans</Text>
        <TouchableOpacity style={styles.voirPlusButton} onPress={() => router.push('/Bon Plans')}>
          <Text>Voir plus</Text>
          <AntDesign name="right" size={10} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={photoDataState}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Section Promotions Chaussures */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Promotion en cours</Text>
        <TouchableOpacity style={styles.voirPlusButton} onPress={() => router.push('/Promotions')}>
          <Text>Voir plus</Text>
          <AntDesign name="right" size={10} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={shoesDataState}
        renderItem={renderShoesItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PhotoAndShoesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  sectionHeader: {
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  voirPlusButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  card: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  selectedCard: {
    //backgroundColor: Colors.rose, //color qui apparait lorsqu'un element est selectionné
  },
  image: {
    marginTop: 15,
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  nameItem: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  PriceModeleItem: {
    marginTop: 5,
    gap: 5,
    textAlign: 'center',
    alignItems: 'center',
  },
});
