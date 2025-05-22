import React, { useState, useContext } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from '../styles/styles'
import { ProductContext } from '../context/ProductContext'
import { AuthContext } from '../context/AuthContext'
import {supabase} from '../db'

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('')
  const { user } = useContext(AuthContext)
  const [price, setPrice] = useState('')
  const [store, setStore] = useState('')
  const [description, setDescription] = useState('')
  const { products, setProducts } = useContext(ProductContext)

  const addProduct = async () => {
    if (!name || !price || !store) {
      alert('Wszystkie pola muszą być wypełnione!')
      return
    }
    if (isNaN(parseFloat(price))) {
      alert('Cena musi być liczbą!')
      return
    }

    const newProduct = {
      name,
      price: parseFloat(price),
      store,
      purchased: false,
      description: description || 'Brak opisu',
      user_id : user.id
    }

    const { error } = await supabase.from('products').insert([newProduct])

    const updated = products.length
      ? [
          {
            title: 'Zakupy',
            data: [newProduct, ...products[0].data],
          },
        ]
      : [
          {
            title: 'Zakupy',
            data: [newProduct],
          },
        ]

    setProducts(updated)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nazwa produktu"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Cena"
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Sklep"
        value={store}
        onChangeText={setStore}
      />
      <TextInput
        style={styles.input}
        placeholder="Opis"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Dodaj" onPress={addProduct} />
    </View>
  )
}
