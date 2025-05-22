import React, { useContext, useState, useEffect } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../styles/styles'
import ProductList from '../components/ProductList'
import { ProductContext } from '../context/ProductContext'
import { filterByPrice, sortProducts } from '../components/FilterUtils'
import { supabase } from '../db'

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext)
  const { user } = useContext(AuthContext)
  const { products, setProducts } = useContext(ProductContext)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('user_id', user.id)

      if (error) {
        console.error(error)
        return
      }

      const formatted = [
        {
          title: 'Zakupy',
          data: data,
        },
      ]
      setProducts(formatted)
    }

    fetchProducts()
  }, [user])

  useEffect(() => {
    if (!products.length) return
    const sorted = sortProducts(
      minPrice || maxPrice
        ? filterByPrice(products, minPrice, maxPrice)
        : products
    )
    setFilteredProducts(sorted)
  }, [products, minPrice, maxPrice])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista Zakupów</Text>
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
      <Button
        title="Dodaj Produkt"
        style={styles.buttonAdd}
        onPress={() => navigation.navigate('AddProduct')}
      />
      <ProductList products={filteredProducts} setProducts={setProducts} />
      <Button title="Logout" onPress={logout} />
    </View>
  )
}
