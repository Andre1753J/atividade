import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabela } from './src/components';

export default function App() {
  const [item, setItem] = useState<string>();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Lista de Compras</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textInput} placeholder='Digite o produto' placeholderTextColor='#acc' value={item}></TextInput>
      <TouchableOpacity style={styles.pesquisa}>
      <AntDesign name="pluscircle" size={24} color="black"/>
      </TouchableOpacity>
      <Tabela produto={item}></Tabela>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: "black",
    color: "white",
    width: 300,
    marginRight: 90
  },
  h1: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
  },
  pesquisa: {
    alignItems: "center"
  }
});
