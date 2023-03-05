/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet, ImageBackground, SafeAreaView, StatusBar, View, Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
// import { StatusBar } from 'expo-status-bar'
// import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'
import constants from './utils/constants'

import { GameStart, GameScreen, GameOver } from './screens'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [confirmedNumber, setConfirmedNum] = useState()
  const [gameOver, setGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)
  // const [restartGame, setRestartGame] = useState(false)

  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          openRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
          openBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setTimeout(() => setAppIsReady(true), 5000)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return <Text>Loading ...</Text>
  }

  // const [fontsLoaded] = useFonts({
  //   openRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
  //   openBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  // })

  // if (!fontsLoaded) return <AppLoading />

  const setUserNumber = (enteredNum) => {
    setConfirmedNum(enteredNum)
    setGameOver(false)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true)
    setGuessRounds(numberOfRounds)
  }

  const onRestartGameHandler = () => {
    setConfirmedNum(null)
    setGuessRounds(0)
  }

  let screen = <GameStart onNumberConfirm={setUserNumber} />
  if (confirmedNumber) {
    screen = (
      <GameScreen
        userNumber={confirmedNumber}
        onGameOver={gameOverHandler}
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
    screen = (
      <GameOver
        onGameRestartHandler={onRestartGameHandler}
        rounds={guessRounds}
        userNumber={confirmedNumber}
      />
    )
  }
  // if (restartGame === true) screen = <GameStart onNumberConfirm={setUserNumber} />
  return (
    <LinearGradient colors={['#4e0329', constants.Colors.accent500]} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/goal.png')}
        resizeMode="contain"
        style={styles.appContainer}
        imageStyle={styles.backgoundImage}
      >
        <SafeAreaView style={styles.safeArea} onLayout={onLayoutRootView}>
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
