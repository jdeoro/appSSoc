import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from "react-native";

import { router } from "expo-router";
import { Image } from "expo-image";
import ThemedButton from "@/components/ThemedButton";
import ThemedLink from "@/components/ThemedLink";
import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useAuthStore } from "@/core/auth/store/useAuthStore";
import { authCheckStatus } from "@/core/auth/actions/auth-actions";

const LoginScreen = () => {
  const { estado,login, token ,checkStatus } = useAuthStore();

  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, "background");

 
  // se utiliza para que una vez que llama al login, deja 'disable' el boton ingresar.
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

    
  const onLogin = async () => {
    const { email, password } = form;

    if (email.length === 0 || password.length === 0) {
      return;
    }

    setIsPosting(true);
    const wasSuccessful = await login(email, password);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace("/(tabs)");
      return;
    } else {
      console.warn(email, token);

      Alert.alert("Error", "Usuario o contraseña no son correctos");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View style={style.ViewHeader}>
        <Image
          source={require("@/assets/images/os/moya.png")}
          style={{ flex: 1, backgroundColor: "transparent" }}
          contentFit="fill"
          transition={1000}
          contentPosition={{ top: 0, left: 0 }}
        />
      </View>

      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.15,
          }}
        >
          <ThemedText type="title">Ingresar</ThemedText>
          <ThemedText style={{ color: "grey" }}>
            Por favor ingrese su correo y contraseña
          </ThemedText>
        </View>

        {/* Email y Password */}
        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={form.email}
            onChangeText={value => setForm({ ...form, email: value })}
          />

          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={value => setForm({ ...form, password: value })}
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Botón */}
        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onLogin}
          disabled={isPosting}
        >
          Ingresar
        </ThemedButton>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />
        <View>{isPosting && <ActivityIndicator />}</View>

        {/* Spacer */}
        <View style={{ marginTop: 50 }} />

        {/* Enlace a registro */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemedText>¿No tienes cuenta?</ThemedText>

          <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
            {"Crear cuenta"}
          </ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  ContainerBackgroundImage: {
    flex: 1,
    backgroundColor: "green",
  },
  ViewHeader: {
    flex: 1,
    margin: 0,
    padding: 0,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  ViewBody: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-start",
    gap: 1,
    padding: 5,
  },
  imagen: {
    backgroundColor: "transparent",
    display: "flex",
    resizeMode: "contain",
    justifyContent: "center",
    width: "70%",
    height: "70%",
  },
});

export default LoginScreen;
