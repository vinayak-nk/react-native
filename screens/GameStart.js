import { useState } from 'react'
import {
  TextInput, View, Text, StyleSheet, Alert,
} from 'react-native'

import { PrimaryButton } from '../components'
import constants from '../utils/constants'

function GameStart({ onNumberConfirm }) {
  const [inputNumber, setNum] = useState('')

  const onChangeTextHandler = (enteredText) => {
    setNum(parseInt(enteredText, 10))
  }

  const confirmInputHandler = () => {
    const numberEntered = parseInt(inputNumber, 10)
    if (Number.isNaN(numberEntered)) {
      Alert.alert(
        'Invalid number!...',
        'NUmber should be between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: setNum('') }],
      ) // title, msg, configure buttons
      return
    } if (numberEntered < 1 || numberEntered > 99) {
      Alert.alert(
        'Invalid number!...',
        'NUmber should be between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: setNum('') }],
      ) // title, msg, configure buttons
      return
    }
    onNumberConfirm(numberEntered)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={inputNumber}
        onChangeText={onChangeTextHandler}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPressHandler={() => setNum('')}>
          <Text>Reset</Text>
        </PrimaryButton>
        <PrimaryButton onPressHandler={confirmInputHandler}>
          <Text>Confirm</Text>
        </PrimaryButton>
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
    backgroundColor: constants.Colors.primary800,

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
    borderBottomColor: constants.Colors.accent500,
    borderBottomWidth: 2,
    color: constants.Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
})

export default GameStart
