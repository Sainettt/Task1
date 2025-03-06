import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export default function Product({ product, onMarkAsPurchased, onDelete }) {
  return (
    <View style={[styles.product, product.purchased && styles.purchasedBackground]}>
      <Text style={[styles.productText, product.purchased && styles.purchased]}>
        {product.name} - {product.price} PLN - {product.store}
      </Text>

      <TouchableOpacity onPress={onMarkAsPurchased}>
        <Text style={[styles.action, product.purchased && styles.disabled]}>
          {product.purchased ? 'Oznacz jako niekupione' : 'Kupione'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.action}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );
}
