import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export default function AddProduct({ newProduct, setNewProduct, addProduct }) {
  return (
    <View style={styles.addProduct}>
      <TextInput
        style={styles.input}
        placeholder="Dodaj produkt"
        value={newProduct}
        onChangeText={setNewProduct}
      />
      <Button title="Dodaj Produkt" onPress={() => addProduct(newProduct)} />
    </View>
  );
}
