import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, TextInput, Text } from 'react-native';

export default function App() {
  const [height, setHeight] = useState("") // altura
  const [weight, setWeight] = useState("") // Peso

  const calcMMC = () => {
    const heightCalc = height/100;
    const result = (weight/(heightCalc*heightCalc));
    alert("Seu IMC é de " + Math.floor(result))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput style={styles.Input} value={height} keyboardType="numeric" onChangeText={text => setHeight(text)} placeholder="Entre sua altura em cm" placeholderTextColor="#000"/>
      <TextInput style={styles.Input} value={weight}  keyboardType="numeric" onChangeText={text => setWeight(text)} placeholder="Entre seu peso" placeholderTextColor="#000"/>
      <TouchableOpacity style={styles.button} onPress={() => {calcMMC()}}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    borderColor: "black",
    width: "90%",
    margin: 5,
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
  }, 
  button: {
    backgroundColor: '#c3c3c3',
    width: "90%",
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 23,
    color: '#000'
  }
});
