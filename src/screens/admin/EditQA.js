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
  TextInput
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [pickerValue, setPickerValue] = React.useState(null);
  const [checkBox, setCheckbox] = React.useState('A');
  const [text, setText] = React.useState('');
  const [textA, setTextA] = React.useState('');
  const [textB, setTextB] = React.useState('');
  const [textC, setTextC] = React.useState('');
  const [textD, setTextD] = React.useState('');

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

          <View style={{width:399,marginLeft:5}}>
            <TextInput
                placeholder="Enter your text"
                value={text}
                onChangeText={(val) => setText(val)}
            />
            </View>

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
                value={checkBox==='A'?true:false}
                onValueChange={(val) => setCheckbox('A')}
              />
            <View style={{width:330,marginLeft:10}}>
            <TextInput
                placeholder="Enter your text"
                value={textA}
                onChangeText={(val) => setTextA(val)}
            />
            </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>B</Text>
              <RadioButton
                value={checkBox==='B'?true:false}
                onValueChange={(val) => setCheckbox('B')}
              />
               <View style={{width:330,marginLeft:10}}>
            <TextInput
                placeholder="Enter your text"
                value={textB}
                onChangeText={(val) => setTextB(val)}
            />
            </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>C</Text>
              <RadioButton
                value={checkBox==='C'?true:false}
                onValueChange={(val) => setCheckbox('C')}
              />
               <View style={{width:330,marginLeft:10}}>
            <TextInput
                placeholder="Enter your text"
                value={textC}
                onChangeText={(val) => setTextC(val)}
            />
            </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center",marginBottom:15 }}>
              <Text style={{ fontSize: 20 }}>D</Text>
              <RadioButton
                value={checkBox==='D'?true:false}
                onValueChange={(val) => setCheckbox('D')}
              />
               <View style={{width:330,marginLeft:10}}>
            <TextInput
                placeholder="Enter your text"
                value={textD}
                onChangeText={(val) => setTextD(val)}
            />
            </View>
            </View>
          </View>
        </Section>
        <Button
          text="Edit"
          onPress={() => {
            navigation.navigate("Job");
          }}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </Layout>
  );
}
