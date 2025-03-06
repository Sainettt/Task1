import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { styles } from '../styles/styles';
import { View, Text, TextInput, Button } from 'react-native';
import { filterByPrice, sortProducts } from '../components/FilterUtils';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductStore, setNewProductStore] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Фильтрация срабатывает автоматически при изменении значений
  useEffect(() => {
    if (minPrice || maxPrice) {
      setFilteredProducts(sortProducts(filterByPrice(products, minPrice, maxPrice)));
    } else {
      setFilteredProducts(sortProducts(products)); // Если поля пустые — показываем весь список
    }
  }, [minPrice, maxPrice, products]);

  const addProduct = () => {
    if (!newProductName || !newProductPrice || !newProductStore) {
      alert('Wszystkie pola muszą być wypełnione!');
      return;
    }

    const newProduct = {
      name: newProductName,
      price: parseFloat(newProductPrice),
      store: newProductStore,
      purchased: false,
    };

    const updatedProducts = products.length > 0 ? [
      {
        title: 'Zakupy',
        data: sortProducts([{ ...products[0], data: [newProduct, ...products[0].data] }])[0].data,
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

      {/* Фильтр по цене (без кнопки "Resetuj") */}
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Minimalna cena"
          value={minPrice}
          keyboardType="numeric"
          onChangeText={setMinPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Maksymalna cena"
          value={maxPrice}
          keyboardType="numeric"
          onChangeText={setMaxPrice}
        />
      </View>

      <ProductList products={filteredProducts} setProducts={setProducts} />

      <View style={styles.addButtonContainer}>
        <Button title="Dodaj Produkt" onPress={addProduct} />
      </View>
    </View>
  );
}
