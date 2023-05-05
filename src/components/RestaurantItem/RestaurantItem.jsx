import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const RestaurantItem = ({ restaurant }) => {
	const navigation = useNavigation();

	const DEFAULT_IMAGE =
		'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg';

	const onPress = () => {
		navigation.navigate('Restaurant', { id: restaurant.id });
	};

	return (
		<Pressable onPress={onPress} style={styles.restaurantContainer}>
			<Image
				source={{
					url: restaurant.image.startsWith('http')
						? restaurant.image
						: DEFAULT_IMAGE,
				}}
				style={styles.image}
			/>
			<View style={styles.row}>
				<View>
					<Text style={styles.title}>{restaurant.name}</Text>
					<Text style={styles.subtitle}>
						${restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliveryTime}-
						{restaurant.maxDeliveryTime} minutes
					</Text>
				</View>
				<View style={styles.rating}>
					<Text>{restaurant.rating.toFixed(1)}</Text>
				</View>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		aspectRatio: 5 / 3,
		marginBottom: 5,
	},
	restaurantContainer: {
		width: '100%',
		marginVertical: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
		marginVertical: 5,
	},
	subtitle: {
		color: 'grey',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	rating: {
		backgroundColor: 'lightgrey',
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
	},
});
