import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
// import { StatusBar } from 'expo-status-bar'

import { GameOver, StartGame, GameScreen } from './screens'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <StartGame />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
})
