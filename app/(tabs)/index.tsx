import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet, ImageBackground, Pressable, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'
import { navigate, push } from 'expo-router/build/global-state/routing'
import { router } from 'expo-router'
import Gremiales from '@/app/gremiales'
import BotonActions from '@/components/BotonActions'

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

        <View style={style.ViewBody}>
          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/man_woman.png")}
            title="GREMIALES"
          />

          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/salud_woman.png")}
            title="BENEFICIOS"
          />
        </View>

        <View style={style.ViewBody}>
          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/mis_aportes.png")}
            title="MIS APORTES"
          />

          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/contactos.png")}
            title="CONTACTOS"
          />
        </View>

        <View style={style.ViewBody}>
          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/carnet_sindical.png")}
            title="CARNET SINDICAL"
          />

          <BotonActions
            onPress={() => router.navigate("/gremiales")}
            href={require("@/assets/images/os/emergencias.png")}
            title="EMERGENCIAS"
          />
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

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
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'transparent',
    alignItems:'flex-start',
    gap: 1,
    padding:5,
  },
  
})

export default index