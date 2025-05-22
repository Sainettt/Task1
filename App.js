import React from 'react'
import { ProductProvider } from './context/ProductContext'
import { AuthProvider } from './context/AuthContext'
import {RootNavigator} from './navigators/RootNavigator'


export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <RootNavigator />
      </ProductProvider>
    </AuthProvider>
  )
}
