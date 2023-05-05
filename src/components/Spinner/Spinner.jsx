import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = () => {
	return (
		<View style={styles.activityIndicator}>
			<ActivityIndicator size={'large'} color={'green'} />
		</View>
	);
};

const styles = StyleSheet.create({
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
