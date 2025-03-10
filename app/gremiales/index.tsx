import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Gremiales = () => {

  const salir = () => {
    router.replace('/(tabs)')
  }  
   
  return (
    <SafeAreaView>
      {/* Botón */}
      <Pressable style={style.button} onPress={salir}>
        <Ionicons
          name="arrow-back"
          size={14}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
        <Text style={style.texto}>Gremiales</Text>

      </Pressable>


    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50,

  },
    button: {
      backgroundColor: 'green',
      paddingHorizontal: 10,
      paddingVertical: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    texto : {
      color: 'white',
      marginLeft: 15,
    }
})

export default Gremiales