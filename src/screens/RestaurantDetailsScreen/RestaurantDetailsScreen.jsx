import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DishListItem } from '../../components/DishListItem/DishListItem';
import { Header } from './Header';
import { Spinner } from '../../components/Spinner/Spinner';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant, Dish } from '../../models';

export const RestaurantDetailsScreen = () => {
	const [restaurant, setRestaurant] = useState(null);
	const [dishes, setDishes] = useState([]);
	const route = useRoute();
	const navigation = useNavigation();

	const id = route.params?.id;

	useEffect(() => {
		if (!id) {
			return;
		}
		DataStore.query(Restaurant, id).then(setRestaurant);

		DataStore.query(Dish, (dish) => dish.restaurantID.eq(id)).then(setDishes);
	}, [id]);

	if (!restaurant) {
		return <Spinner />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant} />}
				data={dishes}
				renderItem={({ item }) => <DishListItem dish={item} />}
			/>
			<Ionicons
				onPress={() => navigation.goBack()}
				name='arrow-back-circle'
				size={45}
				color='white'
				style={styles.iconContainer}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	iconContainer: {
		position: 'absolute',
		top: 50,
		left: 10,
	},
});
