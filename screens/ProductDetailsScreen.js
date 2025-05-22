import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params

  return (
    <View style={styles.detailsContainer}>

      <Text style={styles.detailText}>
        <Text style={styles.detailLabel}>Użytkownik ID: </Text>
        <Text style={styles.detailValue}>{product.user_id}</Text>
      </Text>
      
      <Text style={styles.detailTitle}>{product.name}</Text>

      <Text style={styles.detailText}>
        <Text style={styles.detailLabel}>Cena: </Text>
        <Text style={styles.detailValue}>{product.price} PLN</Text>
      </Text>

      <Text style={styles.detailText}>
        <Text style={styles.detailLabel}>Sklep: </Text>
        <Text style={styles.detailValue}>{product.store}</Text>
      </Text>

      <Text style={styles.detailText}>
        <Text style={styles.detailLabel}>Opis: </Text>
        <Text style={styles.detailValue}>{product.description}</Text>
      </Text>

      {product.purchased && (
        <Text style={[styles.detailText, styles.purchased]}>
          Ten produkt został już kupiony.
        </Text>
      )}
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
