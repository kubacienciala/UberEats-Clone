import { View, Text, StyleSheet, FlatList } from 'react-native';
import { OrderDetailsHeader } from './OrderDetailsHeader';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import { BasketDishItem } from '../../components/BasketDishItem/BasketDishItem';

export const OrderDetails = () => {
	return (
		<FlatList
			ListHeaderComponent={OrderDetailsHeader}
			data={restaurants[0].dishes}
			renderItem={({ item }) => <BasketDishItem basketDish={item} />}
		/>
	);
};
