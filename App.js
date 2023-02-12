import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [goals, AddGoal] = useState([])
  const [goal, onChangeHandler] = useState('')

  const onButtonClick = () => {
    AddGoal([
      ...goals,
      goal,
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{ color: 'blue' }}>Enter the Goal</Text>
        <View style={styles.inputButton}>
          <TextInput style={styles.inputBox} value={goal} onChangeText={onChangeHandler} />
          <Button title='Submit' onPress={onButtonClick} />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={{ color: 'green', fontSize: 16 }}>List of goals</Text>
        <FlatList 
          data={goals}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    marginTop: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer: {
    padding: 16,
    marginBottom: 16,
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
  goalsContainer: {

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
