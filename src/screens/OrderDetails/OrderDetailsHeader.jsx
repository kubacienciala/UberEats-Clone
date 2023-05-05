import { View, Text, StyleSheet, Image } from 'react-native';
import orders from '../../../assets/data/orders.json';

const order = orders[0];

export const OrderDetailsHeader = () => {
	return (
		<View>
			<View style={styles.container}>
				<Image source={{ url: order.Restaurant.image }} style={styles.image} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>{order.Restaurant.name}</Text>
					<Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
					<Text style={styles.menuTitle}></Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textContainer: {
		margin: 10,
	},
	iconContainer: {
		position: 'absolute',
		top: 50,
		left: 10,
	},
	image: {
		width: '100%',
		aspectRatio: 5 / 3,
	},
	menuTitle: {
		marginTop: 10,
		fontSize: 16,
		letterSpacing: 0.7,
	},
	title: {
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 10,
	},
	subtitle: {
		color: 'grey',
		fontSize: 16,
	},
});
