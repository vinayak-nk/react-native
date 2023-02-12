import { StyleSheet, TextInput, View, Text, Button } from 'react-native'

const GoalItem = ({ goal, onChangeHandler, onButtonClick }) => (
  <View style={styles.inputContainer}>
    <Text style={{ color: 'blue' }}>Enter the Goal</Text>
    <View style={styles.inputButton}>
      <TextInput style={styles.inputBox} value={goal} onChangeText={onChangeHandler} />
      <Button title='Submit' onPress={onButtonClick} />
    </View>
  </View>
)

export default GoalItem

const styles = StyleSheet.create({
  inputContainer: {
    // padding: 16,
    // marginBottom: 16,
    flex: 1,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
  inputButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputBox: {
    flex: 1,
    marginRight: 4,
    borderWidth: 1,
    padding: 4,
    borderColor: 'blue',
    paddingLeft: 8,
    paddingRight: 8,
  },
})