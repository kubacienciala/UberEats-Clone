import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Spinner } from '../../components/Spinner/Spinner';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Dish } from '../../models';

export const DishDetailsScreen = () => {
	const [dish, setDish] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const navigation = useNavigation();
	const route = useRoute();

	const id = route.params?.id;

	useEffect(() => {
		if (id) {
			DataStore.query(Dish, id).then(setDish);
		}
	}, [id]);

	const onPress = () => {
		navigation.navigate('Basket');
	};
	const onMinus = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const onPlus = () => {
		setQuantity(quantity + 1);
	};

	const calculatePrice = () => {
		return (dish.price * quantity).toFixed(2);
	};

	if (!dish) {
		return <Spinner />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.name}>{dish.name}</Text>
			<Text style={styles.description}>{dish.description}</Text>
			<View style={styles.separator} />

			<View style={styles.row}>
				<AntDesign
					name='minuscircleo'
					size={60}
					color={'black'}
					onPress={onMinus}
				/>
				<Text style={styles.quantity}>{quantity}</Text>
				<AntDesign
					name='pluscircleo'
					size={60}
					color={'black'}
					onPress={onPlus}
				/>
			</View>
			<Pressable onPress={onPress} style={styles.button}>
				<Text style={styles.buttonText}>
					Add {quantity} to basket &#8226; ${calculatePrice()}
				</Text>
			</Pressable>
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
		fontSize: 30,
		fontWeight: '600',
		marginVertical: 10,
	},
	description: {
		color: 'grey',
	},
	separator: {
		height: 1,
		backgroundColor: 'lightgrey',
		marginVertical: 10,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
	},
	quantity: {
		fontSize: 25,
		marginHorizontal: 20,
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
