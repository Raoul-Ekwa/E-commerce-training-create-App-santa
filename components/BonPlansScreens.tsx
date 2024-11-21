import { StyleSheet, Text, Image, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import photoData from '@/datas/photos.json'; 
import Colors from '@/constants/Colors';
import { PhotoType } from '@/types/PhotoType';
import { AntDesign } from '@expo/vector-icons';

const BonPlansScreens = () => {
    const [data, setData] = useState<PhotoType[]>([]);
    const [selectedItem, setSelectedItem] = useState<PhotoType | null>(null); // État pour l'élément sélectionné
  
    // Chargeons les données JSON dans l'état
    useEffect(() => {
      setData(photoData);
    }, []);
  
    // Fonction de gestion du clic
    const handlePress = (item: PhotoType) => {
      setSelectedItem(item); // Mettez à jour l'état avec l'élément sélectionné
      console.log('Élément cliqué:', item);
      // On peut ajouter une navigation ou toute autre logique ici
    };
  
    // Fonction pour afficher chaque item
    const renderItem = ({ item }: { item: PhotoType }) => (
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
          <Text numberOfLines={1} ellipsizeMode='tail'>{item.modele}</Text>
          <Text style={{color: 'blue', fontSize: 15, fontWeight: '500'}}>{item.prix} FCFA</Text>
        </View>
      </TouchableOpacity>
    );
  return (
    <>

        <View style={styles.container}>
            <View style={styles.PromotionsVoirPlus}>
                <Text style={{ fontSize: 18, color: Colors.black, fontWeight: 'bold' }}>Nos Bons Plans</Text>
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
    </>
  )
}

export default BonPlansScreens

// const styles = StyleSheet.create({
//     bonPlanContainer: {
//         padding: 10,
//     }
// })

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
    },
    bonPlanContainer: {
        padding: 10,
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
     // borderWidth: 2,
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
  