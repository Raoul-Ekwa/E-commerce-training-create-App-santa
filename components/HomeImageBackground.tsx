import React, { useState } from 'react'; 
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'; 
import Colors from '@/constants/Colors'; 

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 200;

const HomeImageBackground = () => {
  // Définition du tableau d'URLs des images à afficher dans le carrousel
  const images = [
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];

  // État pour suivre l'index actuel de l'image visible dans le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // État pour suivre la largeur des images, mesurée après leur rendu
  const [imageWidth, setImageWidth] = useState(0);

  // Fonction qui s'exécute lors du défilement des images (scrolling)
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x; // Récupère le décalage horizontal du défilement
    const index = Math.floor(contentOffsetX / imageWidth);  // Calcule l'index actuel en fonction de la largeur des images
    setCurrentIndex(index); // Met à jour l'index de l'image courante
  };

  // Fonction appelée pour mesurer la largeur des images après leur rendu
  const onLayoutImage = (event) => {
    const { width } = event.nativeEvent.layout; // Récupère la largeur de l'élément via l'événement onLayout
    setImageWidth(width);  // Enregistre la largeur de l'image dans l'état
  };

  return (
    <View style={{ padding: 10 }}>
      {/* Conteneur principal pour le carrousel d'images */}
      <View style={styles.carouselContainer}>
        {/* ScrollView horizontal pour faire défiler les images */}
        <ScrollView
          horizontal
          pagingEnabled // Active la pagination pour un défilement de type "page"
          showsHorizontalScrollIndicator={false} 
          onScroll={handleScroll} // Fonction appelée à chaque défilement pour mettre à jour l'index
          contentContainerStyle={styles.scrollContainer} // Applique des styles au conteneur du ScrollView
        >
          {/* Affichage de chaque image dans le carrousel */}
          {images.map((image, index) => (
            <ImageBackground
              key={index} // Utilisation de l'index comme clé unique pour chaque ImageBackground
              source={{ uri: image }} // L'URL de l'image à afficher
              style={styles.imageBackground} 
              onLayout={onLayoutImage} // Appel de la fonction pour mesurer la largeur de l'image
            >
              {/* Overlay pour assombrir l'image */}
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                {/* Titre de l'image */}
                <Text style={styles.title}>Complexe Santa Lucia</Text>
                {/* Sous-titre */}
                <Text style={styles.subtitle}>A votre service 7j/7 24h/24</Text>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>

        {/* Dots en bas pour indiquer la position actuelle */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            // Création des dots pour chaque image
            <View
              key={index} // Utilisation de l'index comme clé pour chaque dot
              style={[
                styles.dot, // Applique les styles de base des dots
                currentIndex === index && styles.activeDot // Ajoute un style actif si le dot correspond à l'image visible
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative', // Position relative pour pouvoir positionner les éléments enfants de manière absolue
  },
  scrollContainer: {
    flexDirection: 'row', 
  },
  imageBackground: {
    width: 380,  // Largeur de chaque image dans le carrousel
    height: 200, // Hauteur de chaque image dans le carrousel
    borderRadius: 10,  
    marginHorizontal: 5, // Espacement horizontal entre les images
    overflow: 'hidden', // Cache les parties de l'image qui dépassent du conteneur arrondi
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Remplit tout l'espace disponible au-dessus de l'image
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Crée un filtre sombre semi-transparent sur l'image
  },
  textContainer: {
    position: 'absolute', // Position absolue pour positionner le texte au-dessus de l'image
    top: 30,  // Positionnement du texte en haut de l'image
    left: 20,  // Positionnement du texte à gauche
  },
  title: {
    color: Colors.white, // Couleur du texte (blanc)
    fontSize: 15,  // Taille de la police du titre
    fontWeight: 'bold', // Police en gras pour le titre
  },
  subtitle: {
    color: Colors.white, // Couleur du texte (blanc)
    fontWeight: 'bold', // Police en gras pour le sous-titre
  },
  dotsContainer: {
    position: 'absolute', // Positionnement absolu pour placer les dots en bas de l'écran
    bottom: 10,  // Position des dots à 10 unités du bas du conteneur
    left: '15%',  // Centrer les dots horizontalement
    transform: [{ translateX: -50 }],  // Ajuste pour réellement centrer le conteneur
    flexDirection: 'row', // Aligne les dots horizontalement
  },
  dot: {
    width: 10,  
    height: 10, 
    margin: 5,  // Espacement entre chaque dot
    borderRadius: 5, 
    backgroundColor: '#ddd', // Couleur de fond des dots inactifs
  },
  activeDot: {
    backgroundColor: 'black', // Couleur des dots actifs
  },
});

export default HomeImageBackground;
