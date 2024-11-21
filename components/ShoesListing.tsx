import { StyleSheet, Text, View, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ShoesType } from '@/types/ShoesType';
import shoesData from '@/datas/shoes.json'; 
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const ShoesListing = () => {
  const [data, setData] = useState<ShoesType[]>([]);
  const [selectedItem, setSelectedItem] = useState<ShoesType | null>(null); // État pour l'élément sélectionné

  // Chargeons les données JSON dans l'état
  useEffect(() => {
    setData(shoesData);
  }, []);

  // Fonction de gestion du clic
  const handlePress = (item: ShoesType) => {
    setSelectedItem(item); // Mettez à jour l'état avec l'élément sélectionné
    console.log('Élément cliqué:', item);
    // On peut ajouter une navigation ou toute autre logique ici
  };

  // Fonction pour afficher chaque item
  const renderItem = ({ item }: { item: ShoesType }) => (
    <TouchableOpacity 
      onPress={() => handlePress(item)} 
      style={[
        styles.card, 
        item === selectedItem && styles.selectedCard // Applique le style sélectionné si l'élément est le sélectionné
      ]}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.nameItem}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.PriceModeleItem}>
        <Text numberOfLines={1} ellipsizeMode='tail'>{item.modèle}</Text>
        <Text style={{color: 'blue', fontSize: 15, fontWeight: '500'}}>{item.prix} FCFA</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          }}
          style={styles.imageBackground}
        >
          <View style={{ position: 'absolute', top: 30, left: 20 }}>
            <Text style={{ color: Colors.white, fontSize: 15 }}>Complexe Santa Lucia</Text>
            <Text style={{ color: Colors.white, fontSize: 14 }}>A votre service 7j/7 24h/24</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.PromotionsVoirPlus}>
        <Text style={{ fontSize: 18, color: Colors.black, fontWeight: 'bold' }}>Promotion en cours</Text>
        <TouchableOpacity style={styles.voirPlusButton}>
          <Text>Voir plus</Text>
          <AntDesign name="right" size={10} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ShoesListing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',  // Centrer verticalement les éléments
    alignItems: 'center',      // Centrer horizontalement les éléments
    flexDirection: 'column',   // Disposer les éléments en colonne
  },
  selectedCard: {
    backgroundColor: Colors.rose, // Changer la couleur de fond quand l'élément est sélectionné
    //borderColor: 'blue', // Par exemple, ajouter une bordure bleue quand sélectionné
    //borderWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,  // Ajouter un espacement sous l'image
  },
  nameItem: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  // Centrer le texte horizontalement
  },
  PriceModeleItem: {
    marginTop: 5,
    gap: 5,
    textAlign: 'center',  // Centrer le texte horizontalement
    alignItems: 'center', // Centrer horizontalement les éléments
  },
  imageBackground: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  PromotionsVoirPlus: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voirPlusButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
