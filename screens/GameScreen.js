/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import {
  View, StyleSheet, Alert, FlatList,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import {
  Title, NumberContainer, PrimaryButton, Card, InstructionText, GuessLogItem,
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
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length)
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber)
      || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert('Wrong suggestion', 'You have clicked wrong button...', [{ text: 'sorry', style: 'cancel' }])
    } else {
      if (direction === 'lower') maxBoundary = currentGuess
      else minBoundary = currentGuess
      const newRandomNum = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
      setCurrentGuess(newRandomNum)
      setGuessRounds((prevGuessRounds) => [newRandomNum, ...prevGuessRounds])
    }
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponents Guess" />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText text="Higher or lower?" style={styles.instructionsObj} />
        <View style={styles.buttonContainer}>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPressHandler={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      {/* <View>Log ROUND</View> */}
      <View style={styles.flstlist}>
        {/* {guessRounds.map((guess) => <Text key={guess}>{guess}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item} />}
          // renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flexGrow: 1 }}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  instructionsObj: {
    marginBottom: 16,
  },
  flstlist: {
    height: '100%',
    padding: 16,
    flex: 1,
    flexGrow: 1,
  },
})

export default GameScreen
