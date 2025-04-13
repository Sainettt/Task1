import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AddProductScreen from './screens/AddProductScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import { ProductProvider } from './context/ProductContext'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddProduct" component={AddProductScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  )
}
