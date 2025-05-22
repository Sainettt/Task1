import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }) {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(email, password);
      alert("Rejestracja zakończona sukcesem! Możesz się zalogować.");
      navigation.navigate("Login");
    } catch (error) {
      alert("Błąd rejestracji: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rejestracja</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Hasło"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleRegister} />
      <View style={{ marginTop: 10}}>
        <Button title="Sign In" color="grey" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}
