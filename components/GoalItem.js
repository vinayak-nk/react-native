import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const GoalItem = ({ itemData, onDeleteGoal }) => {
  const { value, key } = itemData.item
  return (
    <TouchableOpacity onPress={() => onDeleteGoal(key)}>
        <Text style={styles.item}>
          {value}
        </Text>
    </TouchableOpacity>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 32,
  },
})