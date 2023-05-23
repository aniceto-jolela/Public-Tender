import React from "react";
import { View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Picker,
  Section,
  SectionContent,
  RadioButton,
  Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [pickerValue, setPickerValue] = React.useState(null);
  const [checkBox, setCheckbox] = React.useState(false);

  const items = [
    { label: "Front-end Developer", value: "FED" },
    { label: "Back-end Developer", value: "BED" },
    { label: "Full-stack Developer", value: "FSD" },
  ];

  return (
    <Layout>
      <TopNav
        middleContent="Create Q&A"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />

      <View>
        <Section
          style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 30 }}
        >
          <SectionContent>
            <View>
              <Text style={{ marginBottom: 10 }}>Empresas</Text>
              <Picker
                items={items}
                value={pickerValue}
                placeholder="Choose your role"
                onValueChange={(val) => setPickerValue(val)}
              />
            </View>
          </SectionContent>
        </Section>

        <Section>
          <Text
            fontWeight="medium"
            style={{ textAlign: "center", marginBottom: 15, marginTop: 10 }}
          >
            Questions:
          </Text>

          <Text style={{ backgroundColor: "#F0F6F6", textAlign: "center" }}>
            This is QA This is QA This is QAThis is QA This is QAThis is QAThis
            is QA This is QAThis This is QA This is QA v vThis is QAThis is
            QAThis is QA This is QA 
            QA This is QAThis is QA This is QAThis is QAThis
            is QA This is QAThis This is QA This is QA v vThis is QAThis is
            QAThis is QA This is QA
          </Text>

          <Text
            fontWeight="medium"
            style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}
          >
            Answers:
          </Text>

          <View style={{ marginLeft: 5 }}>
            <View style={{ flexDirection: "row", alignItems: "center" ,marginBottom:15}}>
              <Text style={{ fontSize: 20 }}>A</Text>
              <RadioButton
                value={checkBox}
                onValueChange={(val) => setCheckbox(val)}
              />
              <Text
                size="md"
                style={{ marginLeft: 10, color: "gray", marginRight: -10 }}
              >
                I agree with the Terms & Conditions
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>B</Text>
              <RadioButton
                value={checkBox}
                onValueChange={(val) => setCheckbox(val)}
              />
              <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                I agree with the Terms & Conditions
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>C</Text>
              <RadioButton
                value={checkBox}
                onValueChange={(val) => setCheckbox(val)}
              />
              <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                I agree with the Terms & Conditions
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>D</Text>
              <RadioButton
                value={checkBox}
                onValueChange={(val) => setCheckbox(val)}
              />
              <Text size="md" style={{ marginLeft: 10, color: "gray" }}>
                I agree with the Terms & Conditions
              </Text>
            </View>
          </View>
        </Section>
        <Button
          text="Create"
          onPress={() => {
            navigation.navigate("CreateQA");
          }}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </Layout>
  );
}
