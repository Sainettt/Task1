import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { styles } from '../styles/styles'
import Product from './Product' // Компонент одного продукта
import { useNavigation } from '@react-navigation/native'

export default function ProductList({ products, setProducts }) {
  const navigation = useNavigation()

  const deleteProduct = (sectionIndex, productIndex) => {
    if (!products[sectionIndex] || !products[sectionIndex].data) return

    let updatedProducts = [...products]
    updatedProducts[sectionIndex].data.splice(productIndex, 1)
    setProducts(updatedProducts)
  }

  const markAsPurchased = (sectionIndex, productIndex) => {
    if (!products[sectionIndex] || !products[sectionIndex].data) return

    let updatedProducts = [...products]
    let section = updatedProducts[sectionIndex]

    let toggledProduct = section.data[productIndex]
    toggledProduct.purchased = !toggledProduct.purchased

    // переместим продукт вниз или вверх списка в зависимости от состояния
    section.data.splice(productIndex, 1)

    if (toggledProduct.purchased) {
      section.data.push(toggledProduct) // в конец если куплен
    } else {
      section.data.unshift(toggledProduct) // в начало если не куплен
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
                navigation.navigate('ProductDetail', { product: item })
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
