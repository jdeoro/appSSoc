import { Image } from 'expo-image'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={{ display: "flex", flex: 1, backgroundColor: "#008100" }}
    >
      <View style={style.container}>
        <Image
          source={require("@/assets/images/os/moya.png")}
          style={style.image}
          contentFit='contain'
          transition={1000}
        />
      </View>

      <View style={style.Fondo}>
        <Text style={{ color: "white", marginHorizontal: 4, fontSize: 20 }}>
          Institucional
        </Text>
      </View>

    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },


  StyleImagen : {
    backgroundImage: '#008100',
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },  
  Fondo : {
    display: 'flex',
    flex:5,
    backgroundImage: 'repeating-linear-gradient(#008100, #000000a7 10%, green 20%)',
    paddingTop: 6,
  }

})

export default index