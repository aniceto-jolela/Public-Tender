import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import api from './config/api';

export default function Dados() {
    api.get("/companiesReaded").then(i=>{
        console.log(i.data)
    }).catch(error=>console.log(error))
  return (
    <View>
      <Text>DADOS:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
