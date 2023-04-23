import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  //const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  /*
  async function login() {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password).catch(function (
      error
    ) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      setLoading(false);
      alert(errorMessage);
    });
  }

  */

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 22,
              marginBottom: -16,
              backgroundColor: isDarkmode ? "#242422" : "#d4bda7",
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 100,
                width: 100,
              }}
              source={require("../../assets/adaptive-icon.png")}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {isDarkmode ? "☀️ light theme" : "🌑 dark theme"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              borderTopLeftRadius: 20,
              borderTopEndRadius: 20,
              backgroundColor: isDarkmode ? themeColor.dark : "#C0A286",
            }}
          >
            <View style={{ paddingTop: 20 }}>
              <Text>Email</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter your email"
                value={email}
                borderRadius={15}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />

              <Text style={{ marginTop: 6 }}>Password</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter your password"
                value={password}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={{ alignItems: "flex-end", paddingTop: 6 }}>
                <Button
                  text="Criar"
                  size="sm"
                  width={90}
                  color="#997B60"
                  style={{ borderRadius: 20, height: 25, paddingTop: 2 }}
                />
              </View>

              <View
                style={{
                  marginBottom: 14,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#997B60",
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  OR
                </Text>
              </View>

              <Text>Telefone</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter your Telefone"
                value={""}
                borderRadius={15}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
              <View style={{ alignItems: "flex-end", paddingTop: 6 }}>
                <Button
                  text="Verificar"
                  size="sm"
                  width={90}
                  color="#997B60"
                  style={{ borderRadius: 20, height: 25, paddingTop: 2 }}
                />
              </View>

              <Text style={{ marginTop: -15 }}>Código</Text>
              <TextInput
                containerStyle={{ marginTop: 15, marginBottom: 60 }}
                placeholder="Enter your código"
                value={""}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <Button
              text={loading ? "Loading" : "Entrar"}
              onPress={() => {
                login();
              }}
              style={{
                marginTop: 20,
              }}
              color="#997B60"
              disabled={loading}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">&copy; 2023</Text>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
