import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import { StatusBar } from 'expo-status-bar'

import { GameStart } from './screens'

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.appContainer}>
      <ImageBackground
        source={require('./assets/images/goal.png')}
        resizeMode="contain"
        style={styles.appContainer}
        imageStyle={styles.backgoundImage}
      >
        <GameStart />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  backgoundImage: {
    opacity: 0.15,
  },
})
