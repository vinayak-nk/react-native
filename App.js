import React, { useState } from 'react'
import {
  StyleSheet, ImageBackground, SafeAreaView, StatusBar,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import { StatusBar } from 'expo-status-bar'
import constants from './utils/constants'

import { GameStart, GameScreen, GameOver } from './screens'

export default function App() {
  const [confirmedNumber, setConfirmedNum] = useState()
  const [gameOver, setGameOver] = useState(true)

  const setUserNumber = (enteredNum) => {
    setConfirmedNum(enteredNum)
    setGameOver(false)
  }

  let screen = <GameStart onNumberConfirm={setUserNumber} />
  if (confirmedNumber) {
    screen = (
      <GameScreen
        userNumber={confirmedNumber}
        onGameOver={setGameOver}
      />
    )
    // const LazyComponent = lazy(() => import('./screens/GameScreen'))
    // const LoadingCmp = <Text>Loading....</Text>
    // screen = (
    //   <Suspense fallback={() => <LoadingCmp />}>
    //     <LazyComponent />
    //   </Suspense>
    // )
  }
  if (gameOver && confirmedNumber) {
    console.log('confirmedNumber', confirmedNumber)
    screen = <GameOver />
  }
  return (
    <LinearGradient colors={['#4e0329', constants.Colors.accent500]} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/goal.png')}
        resizeMode="contain"
        style={styles.appContainer}
        imageStyle={styles.backgoundImage}
      >
        <SafeAreaView style={styles.safeArea}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  backgoundImage: {
    opacity: 0.15,
  },
})
