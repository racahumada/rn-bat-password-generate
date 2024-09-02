import { View, Text, Image } from 'react-native'
import React from 'react'

import BatLogo from 'assets/bat-logo.png'
import { createStyles } from './styles'

const LogoView = () => {

  const styles = createStyles()

  return (
    <View style={styles.container}>
      <Image source={BatLogo} style={styles.image}/>
    </View>
  )
}

export default LogoView