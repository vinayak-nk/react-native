// @refresh reset

import React, { useState } from 'react'
import {
  View, TextInput, Button, StyleSheet,
} from 'react-native'


const GoalInput = (props) => {
  const { onAddGoal } = props
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputBox}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={ () => onAddGoal(enteredGoal)} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    marginRight: 4,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    paddingLeft: 8,
    paddingRight: 8,
    width: '80%',
  },
})