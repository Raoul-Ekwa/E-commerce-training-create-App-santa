import { View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarBadgeStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarActiveTintColor: Colors.black, // Couleur de l'icône active
        tabBarInactiveTintColor: '#999', // Couleur des icônes inactives
      }}
    >
      {/* Onglet "Acceuil" */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={30} color={color} />,
          tabBarLabelStyle: { fontSize:12 },
        }}
      />

      {/* Onglet "Bon Plans" */}
      <Tabs.Screen
        name="Bon Plans"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="pricetag-outline" size={30} color={color} />,
          tabBarLabelStyle: { fontSize:12 },
        }}
      />

      {/* Onglet "Scanner" sans label */}
      <Tabs.Screen
        name="Scanner"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.rose,
                paddingHorizontal: 14,
                paddingVertical: 12,
                borderRadius: 20,
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MaterialCommunityIcons name="data-matrix-scan" size={30} color={Colors.white} />
            </View>
          ),
          tabBarLabelStyle: { color: Colors.white, fontSize:12 },
        }}
      />

      {/* Onglet "Promotions" */}
      <Tabs.Screen
        name="Promotions"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="gift-sharp" size={30} color={color} />,
          tabBarLabelStyle: { fontSize:12 },
        }}
      />


      {/* Onglet "Plus" */}
      <Tabs.Screen
        name="Plus"
        options={{
          tabBarIcon: ({ color }) => <Entypo name="dots-three-horizontal" size={30} color="black" />,
          tabBarLabelStyle: { fontSize:12 },
        }}
      />

    </Tabs>
  );
}
