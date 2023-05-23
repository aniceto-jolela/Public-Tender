import React from "react";
import { View, Image } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Section,
  SectionContent,
  TextInput,
  Button,

} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [text, setText] = React.useState("");
  return (
    <Layout>
    
     <TopNav
        middleContent="CreateCompany"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
    

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
              <Image
              resizeMode="contain"
              style={{
                height: 200,
                width: 200,
              }}
              source={require("../../../assets/1.png")}
            />


        <Section>
          <SectionContent style={{width:300}}>
            <Text style={{ marginBottom: 10 }}>Company</Text>
            <TextInput
              placeholder="Enter your text"
              value={text}
              onChangeText={(val) => setText(val)}
            />
            <Button
              text="Create"
              onPress={() => {
                navigation.navigate("CreateQA");
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
