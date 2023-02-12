import React, { useState } from 'react'
import {
  View, TextInput, Button, StyleSheet, Modal,
} from 'react-native'


const GoalInput = (props) => {
  const { onAddGoal, visible, handleModalVisibity } = props
  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={ () => onAddGoal(enteredGoal)} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => handleModalVisibity(false)} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});