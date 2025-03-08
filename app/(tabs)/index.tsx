import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'

//backgroundColor: "#008100"
//source={image}

const index = () => {
  const { height, width } = useWindowDimensions();
  const image = {uri: 'https://js.desarrollosweb.net.ar/img/elevated-view-abstract-paper-background.jpg'}
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

        <Pressable onPress={() => console.log("Gremiales")} style={style.Card}  >
          <View  style={style.Card} >
            <Image
              source={require("@/assets/images/os/man_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>GREMIALES</Text>

          </View>
          </Pressable>


          {/* Boton Beneficios */}
          <Pressable onPress={() => console.log("Beneficios")} style={style.Card}  >
          <View  style={style.Card} >
            <Image
              source={require("@/assets/images/os/salud_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>BENEFICIOS</Text>

          </View>
          </Pressable>

          {/* <View style={{ flex: 1, flexDirection: "column" }}>
            <Image
              source={require("@/assets/images/os/man_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>GREMIALES</Text>
            </View>

          <Image
            source={require("@/assets/images/os/salud_woman.png")}
            style={style.imagen}
            contentFit="contain"
            transition={1000}
          /> */}
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
    padding:10,
  },
  Card : {
     backgroundColor:'transparent',
     flex: 1,
     height: '15%',
     flexDirection:'column',
     borderRadius: 10,
     alignItems:'center',
     justifyContent: 'center',

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
  },
  imagen : {
    backgroundColor: 'transparent',
    display: "flex",
    resizeMode: "contain",
    justifyContent: "center",
    width: '65%',
    height: '65%',
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
    letterSpacing:4,
   }
  
})

export default index