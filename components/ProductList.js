import React from 'react'
import { View, Text, SectionList, TouchableOpacity } from 'react-native'
import Product from './Product'
import { styles } from '../styles/styles'

export default function ProductList({ products, setProducts }) {
  // Wycofanie produktu z listy
  const deleteProduct = (sectionIndex, productIndex) => {
    if (!products[sectionIndex] || !products[sectionIndex].data) return

    let updatedProducts = [...products]
    updatedProducts[sectionIndex].data.splice(productIndex, 1)
    setProducts(updatedProducts)
  }

  // Oznaka produktu jako kupiony
  const markAsPurchased = (sectionIndex, productIndex) => {
    if (!products[sectionIndex] || !products[sectionIndex].data) return

    let updatedProducts = [...products]
    let section = updatedProducts[sectionIndex]

    let purchasedProduct = section.data.splice(productIndex, 1)[0]
    purchasedProduct.purchased = true

    section.data.push(purchasedProduct)

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
