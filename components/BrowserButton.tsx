import { Image } from 'expo-image'
import { Text, Pressable, PressableProps, StyleSheet , Alert, Modal, View, Button} from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import BrowserButtoModal from './BrowserButtoModal';
import { useState } from 'react';

interface Props extends PressableProps {
  children: string;
  img?: { imgPath : string };
  reg: {
    img: string;
    titulo: string;
    interno: string;
    email: string;
};
}

export const imageMap: { [key: string]: any } = {
    "1030": require(`@/assets/images/os/bebidas.png`),
    "1031": require("@/assets/images/os/caudales.png"),
    "1032": require("@/assets/images/os/combustibles.png"),
    "1033": require("@/assets/images/os/corralones.png"),
    "1034": require("@/assets/images/os/avatar-email.png"),
    "1035": require("@/assets/images/os/kiosco.png"),
    "1036": require("@/assets/images/os/expressos-mudanzas.png"),
    "1037": require("@/assets/images/os/lacteos.png"),
    "1038": require("@/assets/images/os/lacteos.png"),
    "1039": require("@/assets/images/os/larga-distancia.png"),
    "1040": require("@/assets/images/os/lavaderos-industriales.png"),
    "1041": require("@/assets/images/os/logistica.png"),
    "1042": require("@/assets/images/os/transporte-pesado.png"),
    "1043": require("@/assets/images/os/productos-refrigerados.png"),
    "1044": require("@/assets/images/os/recoleccion-basura.png"),
    "1045": require("@/assets/images/os/residuos-industriales.png"),

    // Puedes agregar más rutas aquí
  };

  export const modalWindow: { [key: string]: any } = {

  };

const BrowserButton = ({ children, img, reg, ...rest }: Props) => {

  const [modalVisible , setModalVisible] = useState(false)

  const primaryColor = useThemeColor({}, 'primary');
//   console.log(img ? imageMap[img.imgPath] : 'No image provided')

  const Onpress = (reg: { img: string; titulo: string; interno: string; email: string; }  ) => {
    setModalVisible(true);
    console.info(`se ha presionado en el boton ${reg.titulo}`)
  }
  return (
    <>
      <Pressable style={styles.button} onPress={() => Onpress(reg)} {...rest}>
        {img && (
          <Image
            source={imageMap[img.imgPath]}
            style={styles.img}
            contentFit="contain"
            contentPosition={{ top: 0, left: 0 }}
          />
        )}

        <Text style={styles.texto}>{children}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Image
            source={imageMap[reg.interno]}
            style={styles.imgbtnBrowser}
            contentFit="contain"
            contentPosition={{ top: 0, left: 0 }}
          />
          <Text style={{ fontWeight: "500", fontSize: 24 }}>{reg.titulo}</Text>
          <View style={{ display:'flex', alignItems:'flex-start', marginBottom:40 }}>
            <Text style={{ fontWeight: "300", fontSize: 12 }}>
              interno {reg.interno}
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 10 }}>
              Email {reg.email}
            </Text>
          </View>

          <Button
            title="Close"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </>
  );
};
export default BrowserButton;



const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    height: 140,
    marginTop: 50,
    marginHorizontal: 40,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#aaaaaa",
  },
  img: {
    backgroundColor: "transparent",
    height: "60%",
    width:'35%',
    marginBottom: 1,
  },
  imgbtnBrowser: {
    backgroundColor: "transparent",
    height: "40%",
    width:'35%',
    marginBottom: 1,
  },
  texto: {
    flex:1,    
    display:'flex',
    fontSize:11,
    color:'green',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});
