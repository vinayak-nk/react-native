import { StyleSheet, Text } from 'react-native'

const GoalItem = ({ goal }) => <Text style={styles.item}>{goal}</Text>  

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