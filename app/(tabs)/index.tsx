import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet, ImageBackground, Pressable, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'
import { navigate, push } from 'expo-router/build/global-state/routing'
import { router } from 'expo-router'
import Gremiales from '@/app/gremiales'
import BotonActions from '@/components/BotonActions'

//backgroundColor: "#008100"
//source={image}

const index = () => {
  const { height, width } = useWindowDimensions();
  const image = {uri: 'https://js.desarrollosweb.net.ar/img/elevated-view-abstract-paper-background.jpg'}
  
  const imageGremial = Platform.OS !== 'ios' ? {uri: '@/assets/images/os/man_woman.png'} : "@/assets/images/os/man_woman.png"
  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        style={style.ContainerBackgroundImage}
      >
        {/* Header  */}
        <View style={style.ViewHeader}>
          <Image
            source={require("@/assets/images/os/moya.png")}
            style={{ flex: 1, backgroundColor: "rgba(0,0,0.03" }}
            contentFit="fill"
            transition={1000}
            contentPosition={{ top: 0, left: 0 }}
          />
        </View>

        {/* Boton Gremiales */}
        <View style={style.ViewBody}>

        <Pressable onPress={() => router.navigate('/gremiales')} style={style.Card}  >
            <Image
              source={require("@/assets/images/os/man_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>GREMIALES</Text>
          </Pressable>

          {/* Boton Beneficios */}
          {/* <Pressable onPress={() => router.navigate('/gremiales')} style={style.Card}  >
            <Image
              source={require("@/assets/images/os/salud_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>BENEFICIOS</Text>
          </Pressable> */}

          <BotonActions action ={() => router.navigate('/gremiales')} href = {"salud_woman.png"} title='BENEFICIOS' />

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

//background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../img/fondo.jpg")
//    backgroundColor: 'green',

const style = StyleSheet.create({

  ContainerBackgroundImage: {
    flex: 1,
    backgroundColor: 'green',    
  },  
  ViewHeader : {
    flex: 1,
     margin:0,
     padding:0,
     borderBottomWidth:2,
     borderBottomColor:'white',
  },
  ViewBody : {
    flex: 4,
    flexDirection:'row',
    backgroundColor: 'transparent',
    alignItems:'flex-start',
    gap: 1,
    padding:5,
  },
  Card : {
     backgroundColor:'transparent',
     flex: 1,
     height: '30%',
     flexDirection:'column',
     borderRadius: 10,
     alignItems:'center',
     justifyContent: 'center',
     paddingBottom:10, 
     marginTop:20,

  },
  imagen : {
    backgroundColor: 'transparent',
    display: "flex",
    resizeMode: "contain",
    justifyContent: "center",
    width: '50%',
    height: '50%',
    marginBottom:1,
  },
  texto : {
    marginTop:3,
    borderStyle: 'dotted',
    borderColor: 'white',
    borderTopWidth: 1,
    borderRightWidth: 0,  
    borderLeftWidth: 0,
    borderBottomWidth: 0, 
    color: 'white',
    letterSpacing:2,
    fontSize: 10,
   },
  ViewElements : {
    flex: 1,
     margin:0,
     padding:0,
  },
  ViewElements1 : {
    flex: 4,
     backgroundColor: 'transparent',
     alignItems:'flex-start',
      flexDirection:'row',
      gap: 10,
      padding:10,
  }
  
})

export default index