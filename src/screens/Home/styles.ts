import { StyleSheet } from "react-native"

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#505c7c',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    },
    headContainer: {
      alignItems: 'center'
    },    
    text: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fdff00'
    },
    inputContainer: {
      width: '80%',
    },
    buttonContainer: {
      width: '80%',
      gap: 8,
      alignItems: 'center'
    }
  })
}