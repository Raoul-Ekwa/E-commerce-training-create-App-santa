import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { router, Stack } from 'expo-router';
import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
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
  const [activeTab, setActiveTab] = useState('Aperçu'); // Onglet actif par défaut

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

  // Affichage du contenu en fonction de l'onglet sélectionné
  const renderContent = () => {
    if (activeTab === 'Aperçu') {
      return;
    }
    if (activeTab === 'Description détaillée') {
      return (
        <View>
          <Text style={styles.descriptionTitle}>Description de l'article</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis possimus voluptates quas porro doloremque ut nostrum! Optio minima suscipit expedita illum saepe asperiores, maiores in accusamus velit, esse praesentium.
          </Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} >
              <View style={styles.iconHeaderLeft}>
                <Feather name="arrow-left" size={30} />
                <Text style={styles.headerText}>Détailssssss du produit</Text>
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

      {/* Onglets de sélection */}
      <View style={styles.tabsContainer}>
        <TextWithUnderline
          isActive={activeTab === 'Aperçu'}
          onPress={() => {
            setActiveTab('Aperçu');
            slideTo(0);
          }}
        >
          Aperçu
        </TextWithUnderline>
        <TextWithUnderline
          isActive={activeTab === 'Description détaillée'}
          onPress={() => {
            setActiveTab('Description détaillée');
            slideTo(1);
          }}
        >
          Description détaillée
        </TextWithUnderline>
      </View>

      {/* Tiret animé */}
      <Animated.View style={[styles.indicator, { transform: [{ translateX: slideAnim }] }]} />

      {/* Contenu dynamique en fonction de l'onglet sélectionné */}
      <View style={styles.contentContainer}>
        {renderContent()}
      </View>

      {/* Affichage des images et des boutons uniquement si l'onglet actif est "Aperçu" */}
      {activeTab === 'Aperçu' && (
        <>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.modele}>{item.modele || 'Modèle indisponible'}</Text>

            {/* Boutons d'achat */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buyButton} onPress={() => {}}>
                <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 'bold' }}>Acheter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.priceButton} onPress={() => {}}>
                <Text style={{ color: Colors.white, fontSize: 15, fontWeight: 'bold' }}>
                  {item.prix} FCFA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

// Composant pour afficher le texte avec soulignement
const TextWithUnderline = ({ children, isActive, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.textContainer}>
      <Text style={[styles.text, isActive && styles.activeText]}>{children}</Text>
      {isActive && <View style={styles.underline} />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.bgColor,
    flex: 1,
  },
  iconHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginLeft: 5,
  },
  iconButton: {
    marginLeft:20
  },
  headerText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  activeText: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  underline: {
    height: 2,
    width: '100%',
    backgroundColor: '#A1DBF5',
  },
  indicator: {
    position: 'absolute',
    bottom: -5,
    height: 4,
    width: width / 2 - 40,
    backgroundColor: Colors.rose,
    left: 25,
  },
  contentContainer: {
    paddingTop: 10,
  },
  contentText: {
  
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
  modele: {
    fontSize: 20,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 70,
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  buyButton: {
    backgroundColor: Colors.rose,
    padding: 20,
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  priceButton: {
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
  },
});

export default DetailsScreen;
