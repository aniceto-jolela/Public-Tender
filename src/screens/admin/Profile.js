import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
  TextInput,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState("");
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.img}>
          <Image
            resizeMode="contain"
            style={{
              height: 250,
              width: 250,
            }}
            source={require("../../../assets/perfil.png")}
          />
        </View>

        <Section >
          <SectionContent style={styles.sectionAll}>
            <View style={styles.details}>
			<Text fontWeight="bold" style={{ textAlign: "center" }}>
             Aniceto JJ
            </Text>
			<Text fontWeight="bold" style={{ textAlign: "center" }}>
			competitors : 0
            </Text>

			</View>


			<View >

			<Text style={{ marginBottom: 10 }}>Name:</Text>
            <TextInput
              placeholder="Enter your text"
              value={text}
              onChangeText={(val) => setText(val)}
            />
            <Button
              text="Edit"
              onPress={() => {
                navigation.navigate("CreateCompany");
              }}
              style={{
                marginTop: 10,
              }}
            />
			</View>

           
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    alignItems: "center",
	marginTop:80
  },
  sectionAll: {
	width: 410,
	marginBottom:20
  },
  details:{
	marginBottom:200
  }
});
