import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { BasketDishItem } from '../../components/BasketDishItem/BasketDishItem';

const restaurant = restaurants[0];

export const BasketScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{restaurant.name}</Text>
			<Text style={styles.yourItems}>Your items</Text>
			<FlatList
				data={restaurant.dishes}
				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			/>
			<View style={styles.separator} />

			<View style={styles.button}>
				<Text style={styles.buttonText}>Create order</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingVertical: 30,
		padding: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 10,
	},
	yourItems: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 20,
	},
	separator: {
		height: 1,
		backgroundColor: 'lightgrey',
		marginVertical: 10,
	},
	button: {
		backgroundColor: 'black',
		marginTop: 'auto',
		padding: 20,
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 16,
	},
});
