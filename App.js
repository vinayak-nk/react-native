import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
// import { StatusBar } from 'expo-status-bar'

import { StartGame } from './screens'

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.appContainer}>
      <StartGame />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
})
