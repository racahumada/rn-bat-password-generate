import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'
import ButtonController from './ButtonController'
import { createStyles } from './styles'

interface ButtonProps extends PressableProps { 
  text: string,
} 

const ButtonView = ({text, onPress} : ButtonProps) => {

  const controller = ButtonController()
  const styles = createStyles()

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>

  )
}

export default ButtonView