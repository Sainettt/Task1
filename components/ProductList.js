import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { styles } from '../styles/styles'
import Product from './Product'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../db'

export default function ProductList({ products, setProducts }) {
  const navigation = useNavigation()

  const deleteProduct = async (sectionIndex, productIndex) => {
    const productToDelete = products[sectionIndex]?.data?.[productIndex]
    if (!productToDelete) return

    const { id } = productToDelete

    const { error } = await supabase.from('products').delete().eq('id', id)

    if (error) {
      console.error('Błąd podczas usuwania z bazy:', error)
      Alert.alert('Błąd', 'Nie udało się usunąć produktu z bazy danych.')
      return
    }

    let updatedProducts = [...products]
    updatedProducts[sectionIndex].data.splice(productIndex, 1)
    setProducts(updatedProducts)
  }

  const markAsPurchased = async (sectionIndex, productIndex) => {
    if (!products[sectionIndex] || !products[sectionIndex].data) return

    let updatedProducts = [...products]
    let section = updatedProducts[sectionIndex]
    const product = section.data[productIndex]

    const newPurchasedStatus = !product.purchased

    const { error } = await supabase
      .from('products')
      .update({ purchased: newPurchasedStatus })
      .eq('id', product.id)

    if (error) {
      console.error('Błąd podczas aktualizacji w bazie:', error)
      Alert.alert(
        'Błąd',
        'Nie udało się zaktualizować produktu w bazie danych.'
      )
      return
    }

    product.purchased = newPurchasedStatus
    section.data.splice(productIndex, 1)

    if (product.purchased) {
      section.data.push(product)
    } else {
      section.data.unshift(product)
    }

    setProducts(updatedProducts)
  }

  return (
    <View style={styles.container}>
      {products && products.length > 0 ? (
        <SectionList
          sections={products}
          renderItem={({ item, index, section }) => (
            <Product
              product={item}
              onMarkAsPurchased={() =>
                markAsPurchased(products.indexOf(section), index)
              }
              onDelete={() => deleteProduct(products.indexOf(section), index)}
              onPress={() =>
                navigation.navigate('ProductDetails', { product: item })
              }
            />
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.emptyListText}>Brak produktów na liście.</Text>
      )}
    </View>
  )
}
