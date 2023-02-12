import React, { useState } from 'react'
import {
  View, TextInput, Button, StyleSheet, Modal, Image,
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
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={ () => onAddGoal(enteredGoal)} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => handleModalVisibity(false)} color="#f31282" />
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
    backgroundColor: '#311b6b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 32,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});