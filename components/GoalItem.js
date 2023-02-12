import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = ({ itemData, onDeleteGoal }) => {
  const { value, key } = itemData.item
  return (
    <View style={styles.goalItem}>
      <Pressable 
        onPress={() => onDeleteGoal(key)} 
        android_ripple={{ color: 'red' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{value}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.3,
    // backgroundColor: 'green'
  }
});