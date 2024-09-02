import { StyleSheet } from "react-native"

export const createStyles = () => {
  return StyleSheet.create({
    button: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 3,
      backgroundColor: '#242424'
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#fff'
    }
  })
}