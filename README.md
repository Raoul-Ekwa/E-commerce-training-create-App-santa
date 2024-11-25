#  Structure des fichiers
Tu as déjà une bonne organisation de base, mais voici quelques ajustements pour t'assurer que tout fonctionne bien avec expo-router.

/app
  /_layout.tsx                <-- Ce fichier gère la mise en page globale de ton app
  /(tabs)
    /_layout.tsx              <-- Ce fichier gère la mise en page des onglets
    /index.tsx                <-- Page d'accueil avec la FlatList (PhotoAndShoesScreen)
    /details/[id].tsx         <-- Page de détails avec l'ID dynamique
/components
  /PhotoAndShoesScreen.tsx    <-- Composant affichant la FlatList
  /DetailsScreen.tsx          <-- Composant affichant les détails de l'élément sélectionné


# route dynamique

Dans Expo Router, la création de routes dynamiques se fait d'une manière similaire à celle des autres
 frameworks de navigation dans React, mais avec une approche plus centrée sur les fichiers. Le concept
  de routes dynamiques permet de créer des URLs flexibles qui incluent des paramètres comme un id, 
  une clé ou tout autre type de variable.

Pourquoi créer une route dynamique comme app/detail/[id].tsx dans Expo Router ?
Dans Expo Router, les fichiers et répertoires eux-mêmes servent de définitions de routes. 
L'utilisation de crochets ([]) autour d'un nom de fichier ou de répertoire permet de créer
 des routes dynamiques, c'est-à-dire des routes qui peuvent accepter des valeurs variables dans l'URL.

Explication détaillée :
Structure des Routes Dynamiques : Lorsque vous créez un fichier avec un nom de répertoire ou de 
fichier qui contient des crochets ([ ]), cela signifie que ce fichier va agir comme un template pour 
toutes les routes qui ont une valeur variable dans cette partie de l'URL.

Par exemple :

app/detail/[id].tsx signifie que l'URL pour cette page peut ressembler à detail/1, detail/2, 
detail/abc, etc.
id est un paramètre dynamique, et id peut être n'importe quelle valeur que vous passez dans l'URL.
Création d'une Route Dynamique : Dans Expo Router, pour créer une route dynamique, vous créez un
 fichier dont le nom inclut des crochets. Par exemple :

app/detail/[id].tsx
Cela signifie que id sera un paramètre dynamique dans l'URL.

Exemple d'URL dynamique : myapp/detail/123

Dans cet exemple, 123 serait la valeur dynamique de l'ID.

Utilisation du Paramètre dans la Page : Pour récupérer et utiliser ce paramètre dynamique dans votre
 page, vous utilisez le hook useRouter fourni par expo-router.

Exemple d'utilisation dans app/detail/[id].tsx :

tsx
Copier le code
import { useRouter } from 'expo-router';  // Importation du hook pour accéder aux paramètres de 
la route

const DetailScreen = () => {
  const router = useRouter();  // Récupération des informations de navigation
  const { id } = router.query;  // Extraction du paramètre dynamique 'id' à partir de l'URL

  return (
    <View>
      <Text>Details pour l'élément avec l'ID : {id}</Text>
    </View>
  );
};

export default DetailScreen;
Dans ce code :

router.query contient les paramètres de l'URL, et ici id correspond à la valeur dynamique de l'URL. Si l'URL est detail/123, alors id vaudra "123"

# Structure des données :
 Vous avez souhaité une liste de 10 objets JSON représentant des personnes, avec les informations suivantes pour chaque élément :

id : Un identifiant unique, compris entre 0 et 9 (inclus).
name : name ramplace photographer.
image : remplace la sous clé "large" de "src"
price : Une valeur numérique représentant un prix, avec des valeurs aléatoires, avec une valeur minimale de 100 000.
modele : Un modèle fictif de produit ou de voiture de luxe, avec des noms aléatoires associés à chaque entrée.