import { Image } from 'expo-image'
import { Text, Pressable, PressableProps, StyleSheet , Alert, Modal, View, Button} from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { useState } from 'react';
import * as MailComposer from 'expo-mail-composer';
import { useDataStore } from '@/core/auth/store/useDataStore';

interface Props extends PressableProps {
  children: string;
  img?: { imgPath : string };
  reg: {
    img: string;
    titulo: string;
    email : string;
    interno: string;
    descrip1: string;
    descrip2: string;
    descrip3: string;
    descrip4: string;
    descrip5: string;
    descrip6: string;
    descrip7: string;

  };
}

 
export enum EmailStatus  {
  CANCELLED = "cancelado",
  SAVED="guardado",
  SENT= "Enviado",
  UNDETERMINED="indefinido"
}

const BrowserButton = ({ children, img, reg, ...rest }: Props) => {

  const [modalVisible , setModalVisible] = useState(false)
  const externaluri = useDataStore( state => state.externalUri) 

  const pathImg =externaluri+reg.img
  
  const primaryColor = useThemeColor({}, 'primary');
  
  const bullet = '✅'

  const Onpress = (reg: { img: string; titulo: string; interno: string; email: string;  }  ) => {
    setModalVisible(true);
    console.info(`se ha presionado en el boton ${reg.titulo}`)
  }

  async function sendEmailAsync() {

    let result = await MailComposer.composeAsync({
      recipients: [`${reg.email}`],
      subject: 'Email subject!!!!',
      body: 'Escribir el contenido del body ✅',
    });
  }


  return (
    <>
      {/* Boton del Browser */}
      <Pressable style={styles.button} onPress={() => Onpress(reg)} {...rest}>
        {img && (
          <Image
            source={{ uri: pathImg }}
            style={styles.img}
            contentFit="contain"
            contentPosition={{ top: 0, left: 0 }}
          />
        )}
        <Text style={styles.texto}>{children}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {/* TITULO */}
        <View style={styles.ViewHeaderTitulo}>
          <Text style={styles.ViewHeaderText}>
            {reg.titulo}
          </Text>
        </View>

        {/* HEADER IMAGEN CON GLOBO */}
        <View style={styles.ViewHeader}>
          <Image
            source={{
              uri: "https://js.desarrollosweb.net.ar/img/ambulancia-con-globo-medio3.png",
            }}
            style={{ display:'flex', flex:1,backgroundColor:'white' }}
            contentFit="cover"
            contentPosition={{ top: 0, left: 0, bottom:0 }}
          />
        </View>

        {/* BODY DEL MODAL     */}
        <View  style={{ display:'flex' , flex:2 ,marginTop:0,position:'relative'}}>
          <Text style={{ fontWeight: "700", fontSize: 13,marginHorizontal:10, textTransform:'capitalize' }}> {reg.titulo}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip1.startsWith("1") ? bullet+" "+ reg.descrip1.substring(1): reg.descrip1.substring(0)}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip2.startsWith("1") ? bullet+" "+ reg.descrip2.substring(1): reg.descrip2.substring(0)}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip3.startsWith("1") ? bullet+" "+ reg.descrip3.substring(1): reg.descrip3.substring(0)}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip4.startsWith("1") ? bullet+" "+ reg.descrip4.substring(1): reg.descrip4.substring(0)}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip5.startsWith("1") ? bullet+" "+ reg.descrip5.substring(1): reg.descrip5.substring(0)}</Text>
          <Text style={{ fontWeight: "500", fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip6.startsWith("1") ? bullet+" "+ reg.descrip6.substring(1): reg.descrip6.substring(0)}</Text>
          <Text style={{ fontWeight: "500" , fontSize: 9,marginHorizontal:10, textTransform:'capitalize' }}>{reg.descrip7.startsWith("1") ? bullet+" "+ reg.descrip7.substring(1): reg.descrip7.substring(0)}</Text>

        </View>      



        {/* BOTON SALIR     */}
        <Pressable style={ styles.btnSalir} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={ styles.txtBtnSalir}>
            Salir
          </Text>
        </Pressable>
      </Modal>
    </>
  );
};
export default BrowserButton;



const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    height: 90,
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#aaaaaa",
  },
  btnSalir : {
    display: "flex",
    justifyContent: "flex-end",
    flex: 3,
    alignContent: "center",
    alignItems: "center",
  },
  txtBtnSalir : {
    fontWeight: "300",
    fontSize: 24,
    textDecorationLine: "underline",
    color: "blue",
  },
  img: {
    backgroundColor: "transparent",
    height: "60%",
    width:'35%',
    marginBottom: 1,
  },
  imgbtnBrowser: {
    fontSize:12,
    backgroundColor: "transparent",
    height: "40%",
    width:'35%',
    marginBottom: 1,

  },
  texto: {
    flex:1,    
    display:'flex',
    fontSize:10,
    color:'green',
    
  },
  modalView: {
    display:'flex',
    flex:1,
    margin: 0,
    backgroundColor: "red",
    borderRadius: 0,
    padding: 1,
    alignItems: "flex-start",
  },  
  ViewHeader : {
    backgroundColor: "white",
    flex: 2,
     margin:0,
     padding:0,
     borderBottomWidth:2,
     borderBottomColor:'white',
     marginBottom:30,
  },
  ViewHeaderTitulo : {
    height: 45,
    backgroundColor: "#36976A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ViewHeaderText : {
    color: "white",
    textTransform: "capitalize",
    fontSize: 10,
    fontWeight: "700",

  }
});
