import { TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { createStyles } from './styles'

interface TInputProps extends TextInputProps {}

const TextInputView = ({value} : TInputProps) => {

  const styles = createStyles()

  return (
      <TextInput  
        placeholder='Senha'
        placeholderTextColor='#fdff00'
        style={styles.input}
        value={value}
      />
  )
}

export default TextInputView