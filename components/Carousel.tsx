import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const {width} = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ProductData = [
    {
    "id": 15,
    "name": "FRANKYDEE",
    "image": "https://images.pexels.com/photos/776908/pexels-photo-776908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/776908/pexels-photo-776908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/776908/pexels-photo-776908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/776908/pexels-photo-776908.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Canon EOS 5D Mark IV",
    "prix": 135000
    },
    {
    "id": 16,
    "name": "Bruno Massao",
    "image": "https://images.pexels.com/photos/2378079/pexels-photo-2378079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/2378079/pexels-photo-2378079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2378079/pexels-photo-2378079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2378079/pexels-photo-2378079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Nikon D850",
    "prix": 145500
    },
    {
    "id": 17,
    "name": "Gül Işık",
    "image": "https://images.pexels.com/photos/2295393/pexels-photo-2295393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/2295393/pexels-photo-2295393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2295393/pexels-photo-2295393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2295393/pexels-photo-2295393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Sony Alpha A7 III",
    "prix": 120000
    },
    {
    "id": 18,
    "name": "Tima Miroshnichenko",
    "image": "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7205899/pexels-photo-7205899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Fujifilm X-T4",
    "prix": 125000
    },
    {
    "id": 19,
    "name": "Jill Burrow",
    "image": "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Olympus OM-D E-M1 Mark III",
    "prix": 110000
    },
    {
    "id": 20,
    "name": "Askar Abayev",
    "image": "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/5638701/pexels-photo-5638701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Panasonic Lumix GH5",
    "prix": 119000
    },
    {
    "id": 21,
    "name": "Tima Miroshnichenko",
    "image": "https://images.pexels.com/photos/7205937/pexels-photo-7205937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/7205937/pexels-photo-7205937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7205937/pexels-photo-7205937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7205937/pexels-photo-7205937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Leica M10",
    "prix": 180000
    },
    {
    "id": 22,
    "name": "Vlad Chețan",
    "image": "https://images.pexels.com/photos/7990475/pexels-photo-7990475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/7990475/pexels-photo-7990475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7990475/pexels-photo-7990475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/7990475/pexels-photo-7990475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Canon EOS R5",
    "prix": 195000
    },
    {
    "id": 23,
    "name": "Nina Uhlíková",
    "image": "https://images.pexels.com/photos/6617577/pexels-photo-6617577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/6617577/pexels-photo-6617577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/6617577/pexels-photo-6617577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/6617577/pexels-photo-6617577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Nikon Z7 II",
    "prix": 170000
    },
    {
    "id": 24,
    "name": "Humbert Jürgens",
    "image": "https://images.pexels.com/photos/2073622/pexels-photo-2073622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "images": [
    "https://images.pexels.com/photos/2073622/pexels-photo-2073622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2073622/pexels-photo-2073622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2073622/pexels-photo-2073622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    "modele": "Sony Cyber-shot RX100 VII",
    "prix": 105000
    }
];

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      {ProductData.map((product) => {
  console.log(product.images); // Log to check if images are defined
  return (
    <View key={product.id} style={styles.productContainer}>
      <Text style={styles.productTitle}>{product.name}</Text>
      <Carousel
        data={product.images || []}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.carouselImage} />
        )}
        sliderWidth={width}
        itemWidth={width - 60}
        loop={true}
        keyExtractor={(item, index) => `carousel-${index}`}
      />
      <Text style={styles.productModel}>{product.modele}</Text>
      <Text style={styles.productPrice}>{product.prix} FCFA</Text>
    </View>
  );
})}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  productContainer: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  carouselImage: {
    width: '100%',
    height: IMG_HEIGHT,
    borderRadius: 10,
    marginBottom: 10,
  },
  productModel: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Index;