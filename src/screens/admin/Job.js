import * as React from "react";
import { ScrollView, View, StyleSheet, Image, Alert } from "react-native";
import { DataTable } from "react-native-paper";
import { Layout, Picker, Text, Section, SectionContent,Button, themeColor } from "react-native-rapi-ui";

const optionsPerPage = [2, 3, 4];

const Job = ({ navigation }) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const [pickerValue, setPickerValue] = React.useState(null);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const items = [
      { label: 'Front-end Developer', value: 'FED' },
      { label: 'Back-end Developer', value: 'BED' },
      { label: 'Full-stack Developer', value: 'FSD' },
  ];

  function _alertIndex(index) {
    Alert.alert(`Questions  ${index}`);
  }

  return (
    <Layout>
      <View style={styles.img}>
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

      <View style={styles.container}>
      <Section>
        <SectionContent>
          <ScrollView horizontal={true}>
            <DataTable >
              <DataTable.Header style={styles.head}>
                <DataTable.Title ><Text>Nº</Text></DataTable.Title>
                <DataTable.Title ><Text>Empresas</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>Perguntas</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>A</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>B</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>C</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>D</Text></DataTable.Title>
                <DataTable.Title numeric ><Text>Acções </Text></DataTable.Title>
              </DataTable.Header>

              <DataTable.Row style={styles.dataWrapper}>
                <DataTable.Cell ><Text>1</Text></DataTable.Cell>
                <DataTable.Cell ><Text onPress={() => _alertIndex('Perguntas')}>Frozen yogurt</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:112}}><Text onPress={() => _alertIndex('Perguntas')}>Frozen yogurt</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:40}}><Text onPress={() => _alertIndex('PA')}>159 5837 5</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:43}}><Text onPress={() => _alertIndex('PB')}>6.45630</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:40}}><Text onPress={() => _alertIndex('PC')}>159</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:40}}><Text onPress={() => _alertIndex('PD')}>54</Text></DataTable.Cell>
                <DataTable.Cell numeric style={{width:90}}><View>
                <View >
                  <Button
                  text="Edit"
                  size="sm"
                  width={90}
                  color={themeColor.primary}
                  style={{ borderRadius: 20, height: 25, paddingTop: 2 }}
                  onPress={() => {
                    navigation.navigate("EditQA");
                  }}
                />
                 
                <Button
                  text="Delete"
                  size="sm"
                  width={90}
                  color={themeColor.danger}
                  style={{ borderRadius: 20, height: 25, paddingTop: 2 }}
                />
              </View>
                  </View>
                  </DataTable.Cell>
              </DataTable.Row>

  
 
              <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={"Rows per page"}
              />
            </DataTable>
          </ScrollView>
        </SectionContent>
      </Section>
      </View>
    </Layout>
  );
};

export default Job;


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
  },
  img:{
    alignItems:"flex-end"
  },
  head: { 
    backgroundColor: '#997B60',
  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200' 
  },
  dataWrapper: { 
   
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  }
});