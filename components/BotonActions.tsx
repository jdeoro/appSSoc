import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet, ImageBackground, Pressable, Platform, PressableProps } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors'
import { navigate, NavigationOptions, push } from 'expo-router/build/global-state/routing'
import { Href, RelativePathString, router } from 'expo-router'

export interface Props extends PressableProps {
    href : string
    title : string
}

const BotonActions = ( { href,title, ...rest} : Props ) => {

  return (
    <Pressable style={style.Card} {...rest}>
      <Image
        source={href}
        style={style.imagen}
        contentFit="contain"
      />
      <Text style={style.texto}>{title}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
    Card : {
       backgroundColor:'transparent',
       flex: 1,
       height: '100%',
       flexDirection:'column',
       borderRadius: 10,
       alignItems:'center',
       justifyContent: 'center',
       paddingBottom:1, 
       marginTop:5,
  
    },
    imagen : {
      backgroundColor: 'transparent',
      display: "flex",
      resizeMode: "contain",
      justifyContent: "center",
      width: '70%',
      height: '70%',
      marginBottom:1,
    },
    texto : {
      flex: 1,
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
      justifyContent: 'center',
      textAlign: 'center',
      
     },

    
  })

export default BotonActions