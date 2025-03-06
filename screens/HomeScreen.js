import React, { useState } from 'react';
import ProductList from '../components/ProductList';  // Компонент для списка продуктов
import { styles } from '../styles/styles';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductStore, setNewProductStore] = useState('');

  // Функция добавления нового продукта
  const addProduct = () => {
    if (!newProductName || !newProductPrice || !newProductStore) {
      alert('Wszystkie pola muszą być wypełnione!');
      return;
    }

    const newProduct = {
      name: newProductName,
      price: newProductPrice,
      store: newProductStore,
      purchased: false,  // Продукт по умолчанию не куплен
    };

    const updatedProducts = products.length > 0 ? [
      {
        title: 'Zakupy',
        data: [newProduct, ...products[0].data], // Добавляем новый продукт в первую секцию
      },
    ] : [{
      title: 'Zakupy',
      data: [newProduct],
    }];

    setProducts(updatedProducts);
    setNewProductName('');
    setNewProductPrice('');
    setNewProductStore('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Zakupów</Text>

      {/* Форма добавления продукта */}
      <View style={styles.addProduct}>
        <TextInput
          style={styles.input}
          placeholder="Nazwa produktu"
          value={newProductName}
          onChangeText={setNewProductName}
        />
        <TextInput
          style={styles.input}
          placeholder="Cena produktu"
          value={newProductPrice}
          keyboardType="numeric"
          onChangeText={setNewProductPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Sklep"
          value={newProductStore}
          onChangeText={setNewProductStore}
        />
      </View>

      {/* Отображаем список продуктов */}
      <ProductList products={products} setProducts={setProducts} />

      {/* Кнопка добавления продукта внизу */}
      <View style={styles.addButtonContainer}>
        <Button title="Dodaj Produkt" onPress={addProduct} />
      </View>
    </View>
  );
}
