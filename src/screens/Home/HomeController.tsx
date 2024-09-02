
import { useState } from 'react'
import * as Clipboard from 'expo-clipboard';

import generatePassword from 'services/generatePassword'

const HomeController = () => {

  const [password, setPassword] = useState<string>('')

  const handleGeneratePassButton = () => {
    let generateToken = generatePassword()
    setPassword(generateToken)
  }

  const handleSetClipboard = async () => {
    await Clipboard.setStringAsync(password)
  }

  return {password, handleGeneratePassButton, handleSetClipboard}
}

export default HomeController