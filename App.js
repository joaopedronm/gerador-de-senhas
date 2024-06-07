import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

import ModalPassword from './src/components/Modal';


export default function App() {

  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ""
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0)) }
         />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  slider: {
    height: 50,
  },
  button: {
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 14
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }

});
