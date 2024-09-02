import { StyleSheet } from "react-native"

export const createStyles = () => {
  return StyleSheet.create({
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#282e3c',
      borderWidth: 1,
      borderColor: '#fdff00',
      color: '#fdff00',
      fontSize: 20, 
      borderRadius: 5,
      paddingHorizontal: 12,
      paddingVertical: 6,
      textAlign: 'center'
    }
  })
}