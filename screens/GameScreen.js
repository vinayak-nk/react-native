/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {
  Text, View, StyleSheet, Alert,
} from 'react-native'
import {
  Title, NumberContainer, PrimaryButton, Card, InstructionText,
} from '../components'

const generateRandomNumber = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) {
    return generateRandomNumber(min, max, exclude)
  }
  return randomNum
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(true)
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber)
      || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Wrong suggestion', 'You have clicked wrong button...', [{ text: 'sorry', style: 'cancel' }])
    } else {
      if (direction === 'lower') maxBoundary = currentGuess
      else minBoundary = currentGuess
      const newRandomNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newRandomNum)
    }
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponents Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText text="Higher or lower" style={styles.instructionsObj} />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'lower')}>
            <Text>-</Text>
          </PrimaryButton>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'higher')}>
            <Text>+</Text>
          </PrimaryButton>
        </View>
      </Card>
      {/* <View>Log ROUND</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instructionsObj: {
    marginBottom: 16,
  },
})

export default GameScreen
