import { View, Text, ScrollView, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedTextInput from '@/components/ThemedTextInput';
import { ThemedText } from '@/components/ThemedText';
import { useAuthStore } from '@/core/auth/store/useAuthStore';


const Settingindex = () => {
  const  afiliado = useAuthStore( state => state.user?.data?.afiliado );
  const  user = useAuthStore( state => state.user?.data?.fullname );
  const id = useAuthStore( state => state.user?.data?.id );
  console.log(JSON.stringify(afiliado))
  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <ThemedText type='subtitle' style={{ marginTop: 30 }}>
          Datos Personales
        </ThemedText>
        <View>
        <Text style={{ marginTop: 20, fontSize: 12, fontWeight: 'bold' }}>
          id: {id}
        </Text>

        <Text style={{ marginTop: 20, fontSize: 12, fontWeight: 'bold' }}>
          Afiliado: {afiliado}
        </Text>
        <Text style={{ marginTop: 20, fontSize: 12, fontWeight: 'bold' }}>
          Usuario: {user}
        </Text>

        </View>

        {/* <TextInput id='nombre' style={styles.input} /> */}

      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  input : {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    
  }
})

export default Settingindex