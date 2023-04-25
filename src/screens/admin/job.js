import React from 'react';
import { View, StyleSheet,ScrollView,Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Layout,Button,Picker, Text,Section,SectionContent } from 'react-native-rapi-ui';

export default function Job() {
	const [pickerValue, setPickerValue] = React.useState(null);
    const items = [
        { label: 'Front-end Developer', value: 'FED' },
        { label: 'Back-end Developer', value: 'BED' },
        { label: 'Full-stack Developer', value: 'FSD' },
    ];

  return (
	<Layout>

		<View style={{ alignItems: "flex-end"}}>
		<Image
              resizeMode="contain"
              style={{
                height: 100,
                width: 100,
              }}
              source={require("../../../assets/adaptive-icon.png")}
            />
		</View>

		<Section style={{ marginHorizontal: 20, marginTop: 20 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>Companies</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="Choose your role"
                        onValueChange={(val) => setPickerValue(val)}
                    />
                </View>
            </SectionContent>
        </Section>

		<View style={{ alignItems: "flex-end", marginTop: 50,marginRight:20 }}>
                <Button
                  text="Add"
                  size="sm"
                  
                  color="#997B60"
                  style={{ height: 25, paddingTop: 2 }}
                />
              </View>
    <View style={styles.container}>
			  <Section>
			  <SectionContent>
		  <ScrollView horizontal={true}>
      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.text}>Ṇº</DataTable.Title>
          <DataTable.Title textStyle={styles.text}>Companies</DataTable.Title>
		  <DataTable.Title textStyle={styles.text}>Pergunta</DataTable.Title>
		  <DataTable.Title textStyle={styles.text}>A</DataTable.Title>
		  <DataTable.Title textStyle={styles.text}>B</DataTable.Title>
          <DataTable.Title textStyle={styles.text}>C</DataTable.Title>
		  <DataTable.Title textStyle={styles.text}>D</DataTable.Title>
          <DataTable.Title textStyle={styles.text} numeric>Age</DataTable.Title>
        </DataTable.Header>

		<ScrollView style={styles.dataWrapper}>
        <DataTable.Row >
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
		  <DataTable.Cell>John</DataTable.Cell>
		  <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
		  <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.row}>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
		  <DataTable.Cell>Bob</DataTable.Cell>
		  <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
		  <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
          <DataTable.Cell numeric>105</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
		  <DataTable.Cell>Mei</DataTable.Cell>
		  <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
		  <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
        </DataTable.Row>

		</ScrollView>

      </DataTable>
	  </ScrollView>
	</SectionContent>
	</Section>
    </View>
	</Layout>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1, 
    padding: 16, 
    paddingTop: 30,
	
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
	
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  },
  text: { 
    fontWeight: '900' 
  },
});