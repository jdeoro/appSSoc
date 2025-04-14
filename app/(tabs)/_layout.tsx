import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { Button, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
          // href:null se utiliza para indicar q' no muestre el icono como tab
        }}
      />

      <Tabs.Screen
        name="Aportes/index"
        options={{
          title: "Obra social",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="heart-circle-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Carnet/index"
        options={{
          title: "Credencial",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="card-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Datos/index"
        options={{
          title: "Mis datos",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Salir/index"
        options={{
          title: "Salir",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="exit-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
