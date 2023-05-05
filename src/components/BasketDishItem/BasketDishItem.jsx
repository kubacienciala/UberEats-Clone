import { View, Text, StyleSheet } from 'react-native';

export const BasketDishItem = ({ basketDish }) => {
	return (
		<View style={styles.row}>
			<View style={styles.quantityContainer}>
				<Text>1</Text>
			</View>
			<Text style={styles.nameText}>{basketDish.name}</Text>
			<Text style={styles.priceText}>${basketDish.price.toFixed(2)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15,
	},
	priceText: {
		marginLeft: 'auto',
	},
	nameText: {
		fontWeight: '600',
	},
	quantityContainer: {
		backgroundColor: 'lightgrey',
		borderRadius: 3,
		paddingHorizontal: 5,
		paddingVertical: 2,
		marginRight: 5,
	},
});
