import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

class Absensi extends Component {
	static navigationOptions = {
		title: 'Absensi',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <MatComIcon name='alarm-check' size={30} style={{ color: 'white', marginRight: 20 }} />
	};

	constructor(props) {
		super(props);

		this.ondetailButtonClicked = this.ondetailButtonClicked.bind(this);
	}

	ondetailButtonClicked() {
		this.props.navigation.navigate('AbsensiDetail');
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.sections}>
					<View style={[styles.sectionItem, { borderColor: '#19BB0D' }]}>
						<Text style={[styles.sectionItemText, { color: '#19BB0D' }]}>Masuk</Text>
						<Text style={[styles.sectionItemText, { color: '#19BB0D' }]}>20</Text>
					</View>
					<View style={[styles.sectionItem, { borderColor: '#D1A314' }]}>
						<Text style={[styles.sectionItemText, { color: '#D1A314' }]}>Ijin</Text>
						<Text style={[styles.sectionItemText, { color: '#D1A314' }]}>3</Text>
					</View>
				</View>
				<View style={styles.sections}>
					<View style={[styles.sectionItem, { borderColor: '#0D6A9C' }]}>
						<Text style={[styles.sectionItemText, { color: '#0D6A9C' }]}>Sakit</Text>
						<Text style={[styles.sectionItemText, { color: '#0D6A9C' }]}>1</Text>
					</View>
					<View style={[styles.sectionItem, { borderColor: '#9C0D16' }]}>
						<Text style={[styles.sectionItemText, { color: '#9C0D16' }]}>Alpa</Text>
						<Text style={[styles.sectionItemText, { color: '#9C0D16' }]}>0</Text>
					</View>
				</View>
				<View style={styles.sections}>
					<View style={[styles.sectionItem, { borderColor: '#D64A29' }]}>
						<Text style={[styles.sectionItemText, { color: '#D64A29' }]}>Terlambat</Text>
						<Text style={[styles.sectionItemText, { color: '#D64A29' }]}>1</Text>
					</View>
					<View style={[styles.sectionItem, { borderColor: '#8F0D9C' }]}>
						<Text style={[styles.sectionItemText, { color: '#8F0D9C' }]}>Pulang Lebih Cepat</Text>
						<Text style={[styles.sectionItemText, { color: '#8F0D9C' }]}>2</Text>
					</View>
				</View>
				<TouchableOpacity
					style={styles.detailButton}
					onPress={this.ondetailButtonClicked}
				>
					<Text style={styles.sectionItemText}>Detail Absensi</Text>
				</TouchableOpacity>
				<Text style={styles.noteText}>* Berlaku dalam 1 semester</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	sections: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		marginHorizontal: 20
	},
	sectionItem: {
		width: width / 4,
		height: width / 4,
		borderRadius: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1
	},
	sectionItemText: {
		textAlign: 'center',
		fontSize: 12,
		fontWeight: 'bold',
		color: 'white'
	},
	detailButton: {
		marginTop: 30,
		marginBottom: 10,
		paddingVertical: 10,
		paddingHorizontal: 40,
		alignSelf: 'center',
		backgroundColor: 'rgba(176,21,19,1)',
		borderRadius: 30,
		elevation: 5
	},
	noteText: {
		color: '#000',
		textAlign: 'center',
		fontSize: 12
	}
});

export default Absensi;
