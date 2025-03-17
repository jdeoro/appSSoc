import { Image } from 'expo-image'
import { View, StyleSheet } from 'react-native'
import React from 'react'

export const imageMap: { [key: string]: any } = {
    "@/assets/images/os/marcha-con-globo.png": require("@/assets/images/os/marcha-con-globo.png"),
    // Puedes agregar más rutas aquí
  };

const HeaderconGlobo = ( {imgPath } : { imgPath : string }   )  => {


  return (
      <View style={{ backgroundColor: "transparent", flex: 4,height:200 , marginBottom:40 }}>
        <Image
          source={imageMap[imgPath]}
          style={style.imagenHeader}
          contentFit="cover"
          contentPosition={{ top: 0, left: 0 }}
        />
      </View>
  )
}

const style = StyleSheet.create({
    imagenHeader: {
      backgroundColor: "transparent",
      display: "flex",
      resizeMode: "contain",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      marginBottom: 1,
    },
  });
  

export default HeaderconGlobo