import { TextInput, View, Text, StyleSheet } from 'react-native'

import { PrimaryButton } from '../components'

const StartGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#4e0329',

    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 40,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer : {
    flexDirection: 'row',
  }
})

export default StartGame
