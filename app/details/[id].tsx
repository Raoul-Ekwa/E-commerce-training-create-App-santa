import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Button
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { router, Stack } from 'expo-router';
import { AntDesign, Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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
  
  // ce hook va gerer l'etat actif ou inatif de notre Text sur notre clic animation slide
  const [activeTab, setActiveTab] = useState(null);

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

  // Référence à la valeur animée pour le tiret
  const slideAnim = useRef(new Animated.Value(0)).current;

  // Fonction pour animer le tiret
  const slideTo = (index) => {
    Animated.timing(slideAnim, {
      toValue: index * (width / 2), // Ajustez la valeur selon la largeur de vos boutons
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} >
              <View style={styles.iconHeaderLeft} style={styles.iconLeftContainer}>
                <Feather name="arrow-left" size={30} />
                <Text style={styles.headerText}>Détails du produit</Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <>
              <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                <Entypo name="share" size={24} color={Colors.black} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
                 <MaterialCommunityIcons name="message" size={24} color={Colors.black} />
              </TouchableOpacity>
            </>
          ),
        }}
      />

      {/* Conteneur avec boutons pour changer de section */}
      <View style={{ marginLeft: 30 }}>
        <View style={styles. SliderClicAnimContainer}>
          <Text 
            style={[styles.SliderClicText, activeTab === 'Aperçu' && styles.activeText]}
            onPress={() => setActiveTab('Aperçu')}
          >
            Aperçu
          </Text>
          <Text
            style={[styles.text, activeTab === 'Description' && styles.activeText]}
            onPress={() => {
              setActiveTab('Description');
              router.push('screens/descriptionDetaillee/'); // Naviguer vers la page Description
            }}
        >
           Description détaillée
        </Text>
        </View>
      </View>

      {/* Tiret animé */}
      <Animated.View style={[styles.indicator, { transform: [{ translateX: slideAnim }] }]} />

      {/* Contenu des détails */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      {/* Section description */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.subInfoContainer}>
          <Text style={styles.modele}>{item.modele || 'Modèle indisponible'}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description de l'article</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis possimus voluptates quas porro doloremque ut nostrum! Optio minima suscipit expedita illum saepe asperiores, maiores in accusamus velit, esse praesentium.
          </Text>
        </View>

        {/* Boutons d'achat */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
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
    backgroundColor: Colors.bgColor,
    flex: 1,
  },
  iconLeftContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 30,
  },
  SliderClicAnimContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  SliderClicText: {
    fontSize: 15,
    padding: 10,
    color: 'gray'
  },
  activeText: {
    color: Colors.black,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
    fontSize: 18,
  },
  apercuDetailsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 25,
    gap: 40
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  iconButton: {
    borderRadius: 10,
    marginRight: 20,
  },
  iconHeaderLeft: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginLeft: 5,
    backgroundColor: 'orange'
  },
  headerText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  // Style pour le tiret
  indicator: {
    position: 'absolute',
    bottom: -5, // Positionnez-le juste en dessous des boutons
    height: 4, // Hauteur du tiret
    width: width / 2 - 40, // Largeur du tiret (ajuster selon vos besoins)
    backgroundColor: Colors.rose, // Couleur du tiret
    left: 25, // Positionnez-le sous le premier bouton (Aperçu)
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
  subInfoContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  modele:{
    fontSize :20,
    color : '#777'
  },
  description:{
    marginTop :20,
    backgroundColor : Colors.white,
    marginHorizontal :10,
    padding :20,
    borderRadius :15
  },
  descriptionTitle:{
    fontSize :18,
    fontWeight : 'bold',
    marginBottom :5
  },
  descriptionText:{
    fontSize :15,
    letterSpacing :0.7,
    lineHeight :30
  },
  buttonContainer:{
    flexDirection : 'row',
    marginTop :70,
    justifyContent : 'space-between',
    marginHorizontal :25
  },
  buyButton:{
    backgroundColor : Colors.rose,
    padding :20,
    borderRadius :10,
    paddingHorizontal :50
  },
  priceButton:{
    backgroundColor : Colors.black,
    padding :20,
    borderRadius :10
  }
});

export default DetailsScreen;
