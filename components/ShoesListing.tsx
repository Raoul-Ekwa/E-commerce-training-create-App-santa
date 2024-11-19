import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ShoesType } from '@/types/shoesType' // Assurez-vous que ShoesType est correctement défini
import shoesData from '@/datas/shoes.json' // Chargez le fichier JSON en local

const ShoesListing = () => {
  const [data, setData] = useState<ShoesType[]>([]) // Assurez-vous que le type d'état est défini correctement

  // Chargeons les données JSON dans l'état
  useEffect(() => {
    setData(shoesData)
  }, [])

  // Fonction pour afficher chaque item
  const renderItem = ({ item }: { item: ShoesType }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.nameItem}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.PriceModeleItem}>
        <Text>{item.prix} FCFA</Text>
        <Text>{item.modèle}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default ShoesListing

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  nameItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  PriceModeleItem: {
    marginTop: 5,
  },
})
