import { View, Text } from 'react-native'
import React from 'react'
import HomeController from './HomeController'
import Logo from 'components/Logo'
import { createStyles } from './styles'
import TextInput from 'components/TextInput'
import { StatusBar } from 'expo-status-bar'
import Button from 'components/Button'


//Criando input de texto 
const HomeView = () => {

  const controller = HomeController()
  const styles = createStyles()

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}> 
        <Text style={styles.text}>BAT PASS GENERATE</Text>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <TextInput value={controller.password} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text='Gerar Senha' onPress={controller.handleGeneratePassButton} />
        <Button text='Copiar' onPress={controller.handleSetClipboard} />
      </View>
      <StatusBar style='light' />
    </View>
  )
}

export default HomeView