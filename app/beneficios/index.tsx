import { View, Text, StyleSheet, Pressable } from 'react-native'
import React  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import data from '@/data/beneficios.json'
import BrowserButton from '@/components/BrowserButton'

const Beneficios = () => {

  const salir = () => {
    router.replace('/(tabs)')
  }  
   
  return (

    <SafeAreaView style={style.Container}>

      {/* BOTON back */}
      <Pressable style={style.button} onPress={salir}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
        <Text style={style.texto}>Beneficios</Text>
      </Pressable>


      <ScrollView>


        {/* TEXTO */}
        <View style={{ backgroundColor: "white", flex: 2 }}>
          {/* LISTADO DE LOS SERVICIOS  */}
           {
             data.registros.map( (reg ) => (
              <BrowserButton key={reg.interno} children={reg.titulo} img={{ imgPath: reg.interno }}  reg={reg } />
             ))
           }     
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  Container : {
    flex:1,
    backgroundColor: "white" ,
  },
  button: {
    backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  texto: {
    color: "white",
    marginLeft: 15,
  },  
  ViewHeader : {
    flex: 1,
     margin:0,
     padding:0,
  },  
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: 50,
  },
  imagenTel: {
    backgroundColor: "transparent",
    height: "60%",
    width:'35%',
    marginBottom: 1,
  },
  imagenHeader: {
    backgroundColor: "red",
    display: "flex",
    resizeMode: "contain",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginBottom: 1,
  },
  imagenCtral: {
    backgroundColor: "red",
    display: "flex",
    position:'absolute',
    margin: "auto",    
    top:210,
    resizeMode: "contain",
    justifyContent: "center",
    width: "40%",
    height: "70%",
    marginBottom: 1,
  },  
});

export default Beneficios