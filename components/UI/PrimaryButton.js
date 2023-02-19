import React from 'react'
import {
  View, Text, StyleSheet, Pressable,
} from 'react-native'
import constants from '../../utils/constants'

function PrimaryButton({ children, onPressHandler }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: constants.Colors.primary600 }} // anroid
        style={({ pressed }) => (pressed
          ? [styles.pressed, styles.buttonInnerContainer]
          : styles.buttonInnerContainer)}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: constants.Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  // IOS
  pressed: {
    opacity: 0.75,
  },
})
