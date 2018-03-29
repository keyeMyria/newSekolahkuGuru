import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	Image,
	Dimensions,
	ImageBackground
} from 'react-native';

import { Header } from '../common';

const { width, height } = Dimensions.get('window');

class GantiAkun extends Component {
	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<Header />
				<TouchableOpacity
					style={[styles.cardSection, { marginTop: 10 }]}
					onPress={() => {}}
				>
					<Image
						source={require('../../assets/images/kaka.png')}
						style={styles.imageProfile}
						resizeMode="contain"
					/>
					<View style={styles.cardView}>
						<View style={[styles.topText, { backgroundColor: 'red' }]}>
							<Text style={styles.text}>
								M. Kaloka El Razi
							</Text>
						</View>
						<View style={[styles.bottomText, { backgroundColor: 'red' }]}>
							<Text style={styles.text}>
								SDIT Al Kamil
							</Text>
							<View style={styles.activeView}>
								<Text style={styles.activeText}>
									Aktif
								</Text>
							</View>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.cardSection}
					onPress={() => {}}
				>
					<Image
						source={require('../../assets/images/emir.png')}
						style={styles.imageProfile}
						resizeMode="contain"
					/>
					<View style={styles.cardView}>
						<View style={styles.topText}>
							<Text style={styles.text}>
								M. Emir Javas Al khair
							</Text>
						</View>
						<View style={styles.bottomText}>
							<Text style={styles.text}>
								SDIT Al Kamil
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.cardSection}
					onPress={() => {}}
				>
					<Image
						source={require('../../assets/images/akun.png')}
						style={styles.imageProfile}
						resizeMode="contain"
					/>
					<View style={styles.cardView}>
						<View style={styles.topText}>
							<Text style={styles.text}>
								Kenan A Ramadhan
							</Text>
						</View>
						<View style={styles.bottomText}>
							<Text style={styles.text}>
								SDIT Al Kamil
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	cardSection: {
		marginVertical: 5,
		flexDirection: 'row',
		height: width / 4
	},
	cardView: {
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	imageProfile: {
		width: width / 4,
		height: width / 4,
		zIndex: 10,
		position: 'absolute',
		top: 0,
		left: 0
	},
	topText: {
		width,
		height: width / 11,
		backgroundColor: '#8A8987',
		paddingLeft: width / 4 + 15,
		paddingBottom: 7,
		justifyContent: 'flex-end',
		borderBottomWidth: 1,
		borderColor: '#fff'
	},
	bottomText: {
		width,
		height: width / 11,
		backgroundColor: '#8A8987',
		paddingLeft: width / 4 + 15,
		paddingTop: 7,
	},
	text: {
		color: 'white',
		fontSize: 12
	},
	activeView: {
		position: 'absolute',
		bottom: 5,
		right: 10
	},
	activeText: {
		color: 'white',
		fontSize: 12
	}
});

export default GantiAkun;
