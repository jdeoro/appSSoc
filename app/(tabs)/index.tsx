import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1, backgroundColor: '#008100' }}>

      <Image
        source={require('@/assets/images/os/moya.png')}
        style = {style.StyleImagen}
      />
      <View
        style={style.Fondo}
      >
        <Text style={{ color: 'white', marginHorizontal:4 , fontSize:20}}>Institucional</Text>

      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  StyleImagen : {
    backgroundImage: '#008100',
    alignSelf: 'auto',
    resizeMode: 'cover',
  },
  Fondo : {
    display: 'flex',
    backgroundImage: 'repeating-linear-gradient(#008100, #000000a7 10%, green 20%)',
    paddingTop: 6,
  }

})

export default index