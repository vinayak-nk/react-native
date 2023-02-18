import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'


const PrimaryButton = ({ children, onClickHandler }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onClickHandler}
        android_ripple={{ color: 'blue' }} // anroid
        style={({ pressed }) => pressed ?
          [styles.pressed, styles.buttonInnerContainer] 
          : styles.buttonInnerContainer
        }
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
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 50,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'    
  },
  // IOS
  pressed: {
    opacity: 0.75
  }
});