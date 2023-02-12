import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { GoalItem, GoalInput } from './components'

export default function App() {
  const [goalList, setGoalList] = useState([])

  const getRandomNumber = () => Math.ceil(Math.random() * (10 ** 16))

  const addGoalHandler = (goalTitle) => {
    setGoalList([...goalList, { key: getRandomNumber().toString(), value: goalTitle }])
  }

  const removeGoalHandler = (goalId) => {
    setGoalList(goalList.filter((goal) => goal.key !== goalId))
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem itemData={itemData} onDeleteGoal={removeGoalHandler} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50,
  },
})

// before breaking into components

// export default function App() {
//   const [enteredGoal, setEnteredGoal] = useState('')
//   const [goalList, setGoalList] = useState([])

//   const getRandomNumber = () => Math.ceil(Math.random() * (10 ** 16))

//   const goalInputHandler = (enteredText) => {
//     setEnteredGoal(enteredText)
//   }

//   // const addGoalHandler = () => {
//   //   setGoalList([...goalList, enteredGoal])
//   // }

//   // for flatlist
//   const addGoalHandler = () => {
//     setGoalList([...goalList, { key: getRandomNumber().toString(), value: enteredGoal }])
//   }

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Course Goal"
//           style={{
//             borderColor: 'blue', borderWidth: 1, padding: 10, width: '80%',
//           }}
//           onChangeText={goalInputHandler}
//           value={enteredGoal}
//         />
//         <Button title="ADD" onPress={addGoalHandler} />
//       </View>
//       <FlatList
//         data={goalList}
//         renderItem={(itemData) => (
//           <View style={styles.listItem}>
//             <Text>
//               {itemData.item.value}
//             </Text>
//           </View>
//         )}
//       />
//       {/* <ScrollView>
//         {goalList.map((goal) => (
//           <View key={goal} style={styles.listItem}>
//             <Text>
//               {goal}
//             </Text>
//           </View>
//         ))}
//       </ScrollView> */}
//     </View>
//   )
// }

// count example
// import React, { useState } from 'react'
// import { View, Text, Button, StyleSheet } from 'react-native'

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <View style={styles.container}>
//       <Text>You clicked {count} times</Text>
//       <Button
//         onPress={() => setCount(count + 1)}
//         title="Click me!"
//       />
//     </View>
//   )
// }

// // React Native Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// })

// export default App
