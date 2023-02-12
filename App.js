import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView } from 'react-native';
import { GoalItem, GoalInput } from './components'

export default function App() {
  const [goals, AddGoal] = useState([])
  const [goal, onChangeHandler] = useState('')

  const onButtonClick = () => {
    AddGoal([
      ...goals,
      {goal, id: Math.random().toString()}
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.goalsContainer}>
        <GoalInput onButtonClick={onButtonClick} goal={goal} onChangeHandler={onChangeHandler} />
        <Text style={{ color: 'green', fontSize: 16 }}>List of goals</Text>
        <FlatList 
          data={goals}
          renderItem={(itemData) => <GoalItem goal={itemData.item.goal} />}
          keyExtractor={(item, index) => item.id}
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
  goalsContainer: {
    flex: 3,
  }
});
