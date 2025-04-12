import { View, Text, ScrollView, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedTextInput from '@/components/ThemedTextInput';
import { ThemedText } from '@/components/ThemedText';
import { useAuthStore } from '@/core/auth/store/useAuthStore';


const Settingindex = () => {
  const apellido = useAuthStore( state => state.user?.data?.apellido );
  const  afiliado = useAuthStore( state => state.user?.data?.afiliado );
  const  user = useAuthStore( state => state.user?.data?.fullname );
  const id = useAuthStore( state => state.user?.data?.id );
  const codpos = useAuthStore( state => state.user?.data?.codpos );
  const domicilio = useAuthStore( state => state.user?.data?.domicilio ); 
  const descripcion = useAuthStore( state => state.user?.data?.descripcion );
  const estado = useAuthStore( state => state.user?.data?.estado );
  const fecnac = useAuthStore( state => state.user?.data?.fecnac );
  const localidad = useAuthStore( state => state.user?.data?.localidad );
  const nombre = useAuthStore( state => state.user?.data?.nombre );
  const nrodoc = useAuthStore( state => state.user?.data?.nrodoc );
  const sexo = useAuthStore( state => state.user?.data?.sexo );
  const tel = useAuthStore( state => state.user?.data?.tel );
  const descrip = useAuthStore( state => state.user?.data?.descrip );

  console.log(JSON.stringify(afiliado))
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <ThemedText type="subtitle" style={{ marginTop: 30,marginBottom: 20 }}>
          Datos Personales
        </ThemedText>
        <View>
          <ThemedText style={{ marginTop: 20, color: "gray", fontSize: 12 }}>
            Nº AFILIADO: <span style={{ fontWeight: "bold" }}>{afiliado}</span>
          </ThemedText>
          <ThemedText style={{ marginTop: 20, color: "gray", fontSize: 12 }}>
            NOMBRE Y APELLIDO:{" "}
            <span style={{ fontWeight: "bold" }}>
              {apellido} {nombre}
            </span>
          </ThemedText>
          <ThemedText style={{ marginTop: 20, color: "gray", fontSize: 12 }}>
            DIRECCION: <span style={{ fontWeight: "bold" }}>{domicilio} {localidad} {codpos}</span>
          </ThemedText>
          <ThemedText style={{ marginTop: 20, color: "gray", fontSize: 12 }}>
            DOCUMENTO: <span style={{ fontWeight: "bold" }}>{descrip} {nrodoc}</span>
          </ThemedText>

          <ThemedText style={{ marginTop: 20, color: "gray", fontSize: 12 }}>
            Tel.: <span style={{ fontWeight: "bold" }}>{tel} </span>
          </ThemedText>

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