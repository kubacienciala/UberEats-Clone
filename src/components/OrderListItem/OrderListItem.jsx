import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const OrderListItem = ({ order }) => {
	const navigation = useNavigation();
	const onPress = () => {
		navigation.navigate('Order', { id: order?.id });
	};
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Image source={{ url: order.Restaurant.image }} style={styles.image} />
			<View>
				<Text style={styles.name}>{order.Restaurant.name}</Text>
				<Text style={styles.price}>3 items &#8226; $38.45</Text>
				<Text>2 days ago &#8226; {order.status}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 75,
		height: 75,
		marginRight: 10,
	},
	container: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center',
	},
	name: {
		fontWeight: '600',
		fontSize: 16,
	},
	price: {
		marginVertical: 5,
	},
});
