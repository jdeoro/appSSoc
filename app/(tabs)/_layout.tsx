import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (

    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='home-outline' color={color} />,
          // href:null se utiliza para indicar q' no muestre el icono como tab
        }}
      />

      <Tabs.Screen
        name="Aportes/index"
        options={{
          title: 'Mis aportes',
          tabBarIcon: ({ color }) => <Ionicons size={28} name='send-outline' color={color} />,
        }}
      />
      <Tabs.Screen
        name="Carnet/index"
        options={{
          title: 'Carnet',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="card-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Setting/index"
        options={{
          title: 'Configurar',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="settings-outline" color={color} />,
        }}
      />

    </Tabs>    
    

  );
}
