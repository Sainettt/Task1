import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from '../styles/styles'
import { sortProducts } from '../components/FilterUtils'

export default function AddProduct({ setProducts, products }) {
  const [newProductName, setNewProductName] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [newProductStore, setNewProductStore] = useState('')

  const addProduct = () => {
    if (!newProductName || !newProductPrice || !newProductStore) {
      alert('Wszystkie pola muszą być wypełnione!')
      return
    }

    const newProduct = {
      name: newProductName,
      price: parseFloat(newProductPrice),
      store: newProductStore,
      purchased: false,
    }

    const updatedProducts =
      products.length > 0
        ? [
            {
              title: 'Zakupy',
              data: sortProducts([
                { ...products[0], data: [newProduct, ...products[0].data] },
              ])[0].data,
            },
          ]
        : [
            {
              title: 'Zakupy',
              data: [newProduct],
            },
          ]

    setProducts(updatedProducts)
    setNewProductName('')
    setNewProductPrice('')
    setNewProductStore('')
  }

  return (
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
      <Button title="Dodaj Produkt" onPress={addProduct} />
    </View>
  )
}
