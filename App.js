import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);
		// console.log(enteredGoal);
	};

	const deleteItemHandler = (id) => {
		setCourseGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
	};

	return (
		<View style={styles.screen}>
			<GoalInput onAddGoal={addGoalHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemdata) => (
					<GoalItem 
					title={itemdata.item.value} 
					id={itemdata.item.id} 
					onDeleteItem={deleteItemHandler} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
