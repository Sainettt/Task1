import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      alert("Błąd logowania: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Logowanie</Text>
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
      <Button title="Sign In" onPress={handleLogin} />
      <View style={{ marginTop: 10 }}> 
        <Button title="Sign up" color="grey" onPress={() => navigation.navigate("Register")} />
      </View>
    </View>
  );
}
