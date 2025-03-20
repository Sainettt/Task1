import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'
import { styles } from '../styles/styles'
import { View, Text, TextInput } from 'react-native'
import { filterByPrice, sortProducts } from '../components/FilterUtils'

export default function HomeScreen() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  useEffect(() => {
    if (minPrice || maxPrice) {
      setFilteredProducts(
        sortProducts(filterByPrice(products, minPrice, maxPrice))
      )
    } else {
      setFilteredProducts(sortProducts(products))
    }
  }, [minPrice, maxPrice, products])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Zakupów</Text>

      <AddProduct setProducts={setProducts} products={products} />

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
    </View>
  )
}
