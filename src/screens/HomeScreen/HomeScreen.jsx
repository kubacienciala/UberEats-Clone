import { FlatList, StyleSheet, View } from 'react-native';
import { RestaurantItem } from '../../components/RestaurantItem/RestaurantItem';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify/';
import { Restaurant } from '../../models';

export const HomeScreen = () => {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		DataStore.query(Restaurant).then(setRestaurants);
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				data={restaurants}
				renderItem={({ item }) => <RestaurantItem restaurant={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
