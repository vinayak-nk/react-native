/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  TextInput, View, Text, StyleSheet, Alert,
  Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView,
} from 'react-native'

import {
  PrimaryButton, Title, Card, InstructionText,
} from '../components'
import constants from '../utils/constants'

function GameStart({ onNumberConfirm }) {
  const [inputNumber, setNum] = useState('')

  const { width, height } = useWindowDimensions()
  console.log('deviceHeight=', height)

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

  const marginTop = height < 400 ? 100 : 200

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title text="Guess my number" />
          <Card>
            <InstructionText text="Enter a number" />
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 20 : 200,
    alignItems: 'center',
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
