import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { router, Stack } from 'expo-router';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { LuxeType } from '@/types/LuxeType';
import luxeData from '@/datas/luxe.json';

const Promotions = () => {
  const [luxuryItems, setLuxuryItems] = useState<LuxeType[]>([]); 
  const [selectedItem, setSelectedItem] = useState<LuxeType | null>(null); 
  const [numColumns, setNumColumns] = useState(2);  // Ajouter un état pour gérer le nombre de colonnes

  useEffect(() => {
    setLuxuryItems(luxeData);  // Remplir l'état avec les données de luxeData
  }, []);  // Le tableau vide [] signifie que cela ne sera exécuté qu'une seule fois lors du montage du composant

  const handlePress = (item: LuxeType) => {
    setSelectedItem(item);
    console.log("Item selected");
  };

  const renderLUXEItem = ({ item }: { item: LuxeType }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)} style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.nameItem}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.PriceModeleItem}>
          <Text numberOfLines={1} ellipsizeMode="tail">{item.modele}</Text>
          <Text style={{ color: 'blue', fontSize: 15, fontWeight: '500' }}>{item.price} FCFA</Text>
        </View>

        <View style={styles.shareIcon}>
          <AntDesign name="sharealt" size={20} color="black" />
        </View>

      </TouchableOpacity>
    );
  };

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
                <Text style={styles.headerText}>Promotions</Text>
              </View>
            </View>
          ),
        }}
      />
      <View style={styles.searchBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="search" size={18} style={{ marginRight: 10, color: Colors.black }} />
          <TextInput placeholder="Recherche un produit" />
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="data-matrix-scan" size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterTextInput}>
        <AntDesign name="filter" size={24} color="black" />
        <View style={{ flexDirection: 'row' }}>
          <TextInput placeholder='Filtre' />
          <TextInput placeholder='Tous les produits' />
          <View style={{ marginLeft: 60 }}>
            <TextInput placeholder='233 résultats' />
          </View>
        </View>
      </View>

      {/* Section Luxe */}
      <FlatList
        style={{ padding: 20 }}  // Espacement horizontal de la FlatList
        contentContainerStyle={{ paddingHorizontal: 5 }} // Ajouter un espacement entre les éléments de la FlatList
        key={numColumns}  // Forcer un nouveau rendu en fonction de la valeur de numColumns
        numColumns={numColumns} // Afficher 2 éléments par ligne
        showsHorizontalScrollIndicator={false}
        data={luxuryItems}  // Utiliser luxuryItems ici
        renderItem={renderLUXEItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default Promotions;

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
    
  }
});
