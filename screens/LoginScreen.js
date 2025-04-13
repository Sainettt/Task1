import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { styles } from '../styles/styles'

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.replace('Home')
    } else {
      alert('Nieprawidłowe dane logowania!')
    }
  }

  const handleGuestAccess = () => {
    navigation.replace('Home') // можно заменить на push, если хочешь оставить возможность вернуться
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logowanie</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Zaloguj się" onPress={handleLogin} />
      <View style={{ marginTop: 10 }} />
      <Button title="Wejdź bez logowania" onPress={handleGuestAccess} />
    </View>
  )
}

