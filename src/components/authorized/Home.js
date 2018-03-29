import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import EntIcon from 'react-native-vector-icons/Entypo';
import FoundIcon from 'react-native-vector-icons/Foundation';

import { Header } from '../common';

const { width, height } = Dimensions.get('window');

class Home extends Component {
	constructor(props) {
		super(props);

		this.onPengumumanClicked = this.onPengumumanClicked.bind(this);
		this.onAbsensiClicked = this.onAbsensiClicked.bind(this);
		this.onJadwalMapelClicked = this.onJadwalMapelClicked.bind(this);
		this.onNilaiClicked = this.onNilaiClicked.bind(this);
		this.onRaportClicked = this.onRaportClicked.bind(this);
	}

	onPengumumanClicked() {
		this.props.navigation.navigate('Pengumuman');
	}

	onAbsensiClicked() {
		this.props.navigation.navigate('Absensi');
	}

	onJadwalMapelClicked() {
		this.props.navigation.navigate('JadwalMapel');
	}

	onNilaiClicked() {
		this.props.navigation.navigate('Nilai');
	}

	onRaportClicked() {
		this.props.navigation.navigate('Raport');
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<Header />
				<View style={styles.sections}>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: '#19BB0D' }]}
						onPress={this.onPengumumanClicked}
					>
						<FoundIcon name='sound' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>Pengumuman</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: '#E97E3C' }]}
						onPress={this.onAbsensiClicked}
					>
						<MatComIcon name='alarm-check' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>Absensi</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.sections}>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: '#7B0D8C' }]}
						onPress={this.onJadwalMapelClicked}
					>
						<MatComIcon name='calendar-clock' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>Jadwal Pelajaran</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: '#05A9C5' }]}
						onPress={this.onNilaiClicked}
					>
						<EntIcon name='bar-graph' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>Nilai</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.sections}>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: '#0F0C83' }]}
						onPress={this.onRaportClicked}
					>
						<FaIcon name='file-text-o' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>Raport</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.sectionItem, { backgroundColor: 'rgba(214, 74, 41, 0.3)' }]}
						disabled
					>
						<SimpleLineIcon name='note' size={40} style={{ color: '#fff' }} />
						<Text style={styles.sectionItemText}>eNotes</Text>
					</TouchableOpacity>
				</View>
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
		justifyContent: 'space-between',
		marginTop: 20,
		marginHorizontal: width / 6
	},
	sectionItem: {
		width: width / 4,
		height: width / 4,
		borderRadius: 10,
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingVertical: 10
	},
	sectionItemText: {
		textAlign: 'center',
		fontSize: 10,
		color: 'white'
	}
});

export default Home;
