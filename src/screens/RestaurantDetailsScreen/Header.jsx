import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = ({restaurant}) => {
	return (
		<View style={styles.container}>
			<Image source={{ url: restaurant.image }} style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.title}>{restaurant.name}</Text>
				<Text style={styles.subtitle}>
					${restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliveryTime}-
					{restaurant.maxDeliveryTime} minutes
				</Text>
                <Text style={styles.menuTitle}>Menu</Text>
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
