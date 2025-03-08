import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet, ImageBackground, Pressable, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'
import { navigate, NavigationOptions, push } from 'expo-router/build/global-state/routing'
import { Href, RelativePathString, router } from 'expo-router'

export interface Props extends NavigationOptions {
    action : (href: Href, options?: NavigationOptions) => void
    href : string
    title : string
}
//router.navigate('/gremiales')
//require("@/assets/images/os/salud_woman.png")

const BotonActions = ( { action,href,title} : Props ) => {
  return (
        <Pressable onPress={() => action} style={style.Card}  >
            <Image
              source={require("@/assets/images/os/salud_woman.png")}
              style={style.imagen}
              contentFit="contain"
              transition={1000}
            />
            <Text style={style.texto}>{title}</Text>
          </Pressable>
  )
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

export default BotonActions