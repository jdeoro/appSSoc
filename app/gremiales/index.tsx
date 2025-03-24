import { Image } from 'expo-image'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedButton from '@/components/ThemedButton'
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'
import { FlipInEasyX } from 'react-native-reanimated'
import data from '@/data/data.json'
import { Idata } from '@/interfaces/interfaz-data'
import HeaderconGlobo from '@/components/HeaderconGlobo'
import BrowserButtoModal from '@/components/BrowserButtoModal';


const Gremiales = () => {

//  useEffect(() => {
  
//   const readLines = () => {
//     data.registros.map( ( reg ) => (
//       console.log(reg)  
//     ))
//   }

//    readLines()

//  }, [])
 
  

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
        <Text style={style.texto}>Gremiales</Text>
      </Pressable>


      <ScrollView>

      {/* IMAGEN header */}
      <HeaderconGlobo imgPath={"@/assets/images/os/marcha-con-globo.png"} />

        {/* TEXTO */}
        <View style={{ backgroundColor: "white", flex: 2 }}>
          <Text
            style={{ marginHorizontal: 5, fontWeight: "900", fontSize: 10 }}
          >
            SECRETARIA GREMIAL E INTERIOR
          </Text>
          <View
            style={{
              marginHorizontal: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 10 }}>
              Teléfono:(011) 4378-1000 interno
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "900" }}> 1041</Text>
          </View>
          <View
            style={{ marginHorizontal: 10, display: "flex", marginTop: 10 }}
          >
            <Text style={{ fontSize: 10 }}>
              Email:sec.gremial@camioneros-ba.org.ar
            </Text>
          </View>


          {/* Telefono & mail */}
          <View style={{ marginTop: 30, display: "flex" }}>
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="call-sharp"
                  size={22}
                  color="green"
                  style={{ marginHorizontal: 5 }}
                />
                <Text style={{ color: "green", fontSize: 10 }}>LLAMAR</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Ionicons
                  name="mail-sharp"
                  size={22}
                  color="green"
                  style={{ marginHorizontal: 5 }}
                />
                <Text style={{ color: "green", fontSize: 10 }}>EMAIL</Text>
              </View>
            </View>
          </View>

          {/* SERVICIOS     */}

           {
             data.registros.map( (reg ) => (
              <BrowserButtoModal key={reg.interno} children={reg.titulo} img={{ imgPath: reg.interno }}  reg={reg } />
             ))
           }     


          {/* {
            <BrowserButton children='AGUAS Y GASEOSAS' img={{ imgPath: 'bebidas' }} />
          }       */}

          {/* AGUAS Y GASEOSAS       */}
            {/* <Pressable style={{height:140, marginTop:50, marginHorizontal:40  , display:'flex', flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:'#aaaaaa' }}
              onPress={() => {
                console.warn("presionado");
              }} 
            >
              <Image
                source={require("@/assets/images/os/bebidas.png")}
                style={style.imagenTel}
                contentFit="contain"
                contentPosition={{ top: 0, left: 0 }}
              />
              <Text style={{ fontSize:11,color:'green',display:'flex', flex:1}}>AGUAS Y GASEOSAS</Text>
            </Pressable> */}

          {/* CAUDALES       */}
            {/* <Pressable style={{height:140, marginTop:20, marginHorizontal:40  , display:'flex', flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:'#aaaaaa' }}
              onPress={() => {
                console.warn("presionado");
              }} 
            >
              <Image
                source={require("@/assets/images/os/caudales.png")}
                style={style.imagenTel}
                contentFit="contain"
                contentPosition={{ top: 0, left: 0 }}
              />
              <Text style={{ fontSize:11,color:'green',display:'flex', flex:1}}>CAUDALES</Text>
            </Pressable> */}

          {/* COMBUSTIBLES       */}

            {/* <Pressable style={{height:140, marginTop:20, marginHorizontal:40  , display:'flex', flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:'#aaaaaa' }}
              onPress={() => {
                console.warn("presionado");
              }} 
            >
              <Image
                source={require("@/assets/images/os/combustibles.png")}
                style={style.imagenTel}
                contentFit="contain"
                contentPosition={{ top: 0, left: 0 }}
              />
              <Text style={{ fontSize:11,color:'green',display:'flex', flex:1}}>COMBUSTIBLES</Text>
            </Pressable> */}

          {/* CORRALONES       */}
            {/* <Pressable style={{height:140, marginTop:20, marginHorizontal:40  , display:'flex', flexDirection:'row', alignItems:'center' ,justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:'#aaaaaa' }}
              onPress={() => {
                console.warn("presionado");
              }} 
            >
              <Image
                source={require("@/assets/images/os/corralones.png")}
                style={style.imagenTel}
                contentFit="contain"
                contentPosition={{ top: 0, left: 0 }}
              />
              <Text style={{ fontSize:11,color:'green',display:'flex', flex:1}}>CORRALONES</Text>
            </Pressable> */}


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

export default Gremiales