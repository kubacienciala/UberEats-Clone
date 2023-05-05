import { View, FlatList, StyleSheet } from 'react-native';
import { OrderListItem } from '../../components/OrderListItem/OrderListItem';
import orders from '../../../assets/data/orders.json';
import { Separator } from '../../components/Separator/Separator';
export const OrdersScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={orders}
				renderItem={({ item }) => <OrderListItem order={item} />}
				ItemSeparatorComponent={<Separator />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});
