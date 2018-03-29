import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Header } from '../common';

const { width, height } = Dimensions.get('window');

class Profile extends Component {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
	}

	onLogout() {
		this.props.navigation.navigate('Auth');
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<Header />
				<View style={styles.viewProfile}>
					<TouchableOpacity
						onPress={() => {}}
					>
						<Image
							source={require('../../assets/images/kaka.png')}
							style={styles.imageProfile}
							resizeMode="contain"
						/>
					</TouchableOpacity>
					<Text style={styles.textProfile}>
						M. Kaloka El Razi
					</Text>
				</View>
				<View style={styles.triangleUp} />
				<LinearGradient
					style={styles.profileDetailView}
					colors={['red', '#AF1607', '#681007']}
					start={{ x: 0.0, y: 0.0 }} end={{ x: 1, y: 0.0 }}
				>
					<Text style={styles.text}>Sekolah : SDIT Al Kamil</Text>
					<Text style={styles.text}>Tingkat : 5</Text>
					<Text style={styles.text}>Kelas : Damaskus</Text>
					<Text style={styles.text}>Wali Kelas : Pak Mustakim</Text>
				</LinearGradient>
				<TouchableOpacity
					style={styles.logoutButton}
					onPress={this.onLogout}
				>
					<Text style={styles.logoutText}>Logout</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	viewProfile: {
		backgroundColor: 'transparent',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		padding: 10,
		marginHorizontal: 20,
		marginTop: - (width / 8)
	},
	imageProfile: {
		width: width / 4,
		height: width / 4
	},
	textProfile: {
		color: 'black',
		textDecorationLine: 'underline',
		fontSize: 20,
		paddingBottom: 10,
		paddingLeft: 10
	},
	triangleUp: {
		marginLeft: 50,
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 5,
		borderRightWidth: 25,
		borderBottomWidth: 30,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'red'
	},
	profileDetailView: {
		marginHorizontal: 10,
		padding: 10,
		paddingLeft: width / 4,
		paddingBottom: 20,
		backgroundColor: 'red',
		borderTopRightRadius: 20,
		elevation: 5
	},
	text: {
		color: 'white',
		paddingTop: 10
	},
	logoutButton: {
		marginHorizontal: 10,
		marginVertical: 20,
		borderWidth: 1,
		borderColor: 'red',
		padding: 10
	},
	logoutText: {
		color: 'red',
		textAlign: 'center'
	}
});

export default Profile;
