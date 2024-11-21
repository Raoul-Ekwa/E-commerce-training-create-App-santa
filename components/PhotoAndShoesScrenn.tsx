import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import photoData from '@/datas/photos.json'; 
import shoesData from '@/datas/shoes.json'; 
import { PhotoType } from '@/types/PhotoType';
import { ShoesType } from '@/types/ShoesType';
import { GestureHandlerRootView } from 'react-native-gesture-handler' 


const PhotoAndShoesScreen = () => {
    const [photoDataState, setPhotoDataState] = useState<PhotoType[]>([]);
    const [shoesDataState, setShoesDataState] = useState<ShoesType[]>([]);
    const [selectedItem, setSelectedItem] = useState<PhotoType | ShoesType | null>(null);
  
    // Charge les données pour les photos et les chaussures
    useEffect(() => {
      setPhotoDataState(photoData);
      setShoesDataState(shoesData);
    }, []);
  
    // Fonction de gestion du clic pour les deux types d'éléments
    const handlePress = (item: PhotoType | ShoesType) => {
      setSelectedItem(item);
      console.log('Élément cliqué:', item);
    };
  
    // Fonction pour afficher les items photo
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
  
    // Fonction pour afficher les items chaussures
    const renderShoesItem = ({ item }: { item: ShoesType }) => (
      <TouchableOpacity 
        onPress={() => handlePress(item)} 
        style={[styles.card, item === selectedItem && styles.selectedCard]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.nameItem}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.PriceModeleItem}>
          <Text numberOfLines={1} ellipsizeMode="tail">{item.modèle}</Text>
          <Text style={{ color: 'blue', fontSize: 15, fontWeight: '500' }}>{item.prix} FCFA</Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
        // Envelopper tout dans GestureHandlerRootView
          <View style={styles.container}>
            {/* Section Bons Plans */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Nos Bons Plans</Text>
              <TouchableOpacity style={styles.voirPlusButton}>
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
              <TouchableOpacity style={styles.voirPlusButton}>
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
      backgroundColor: Colors.rose,
    },
    image: {
      marginTop:15,
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