import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';

type Produto = {
  id: string;
  nome: string;
  status: boolean;
};

export default function App() {
  const [produto, setProduto] = useState<string>('');
  const [lista, setLista] = useState<Produto[]>([
    { id: '1', nome: 'Maça', status: true },
    { id: '2', nome: 'Banana', status: true },
    { id: '3', nome: 'Melancia', status: true },
  ]);

  const renderItem: ListRenderItem<Produto> = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <AntDesign name="checkcircle" size={24} color="black" />
      <Text style={styles.itemText}>{item.nome}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista do Jorge</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o Produto"
          placeholderTextColor="#aac"
          value={produto}
          onChangeText={setProduto}
        />
        <TouchableOpacity style={styles.Button}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={lista}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
