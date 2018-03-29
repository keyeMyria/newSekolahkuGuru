import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Platform,
	UIManager,
	LayoutAnimation
} from 'react-native';

import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const INITIAL_STATE = {
	senin: false,
	selasa: false,
	rabu: false,
	kamis: false,
	jumat: false
};

class JadwalMapel extends Component {
	static navigationOptions = {
		title: 'Jadwal Pelajaran',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <MatComIcon name='calendar-clock' size={30} style={{ color: '#fff', marginRight: 20 }} />
	};

	constructor(props) {
		super(props);

		this.state = INITIAL_STATE;

		this.openMapel = this.openMapel.bind(this);
	}

	componentWillUpdate() {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
	}

	openMapel(day) {
		const days = Object.assign({}, INITIAL_STATE);
		days[day] = true;

		this.setState(days);
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#19BB0D' }]}
						onPress={() => this.openMapel('senin')}
					>
						<Text style={styles.titleText}>Senin</Text>
					</TouchableOpacity>
					{
						(this.state.senin) &&
						<View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>08:00 - 10:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>IPA</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>10:00 - 12:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Matematika</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>12:00 - 13:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Istirahat</Text>
								</View>
							</View>
						</View>
					}
				</View>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#E97E3C' }]}
						onPress={() => this.openMapel('selasa')}
					>
						<Text style={styles.titleText}>Selasa</Text>
					</TouchableOpacity>
					{
						(this.state.selasa) &&
						<View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>08:00 - 10:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Baca Tulis dan Tahfiz Alquran</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>10:00 - 12:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Matematika</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>12:00 - 13:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Istirahat</Text>
								</View>
							</View>
						</View>
					}
				</View>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#7B0D8C' }]}
						onPress={() => this.openMapel('rabu')}
					>
						<Text style={styles.titleText}>Rabu</Text>
					</TouchableOpacity>
					{
						(this.state.rabu) &&
						<View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>08:00 - 10:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>IPA</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>10:00 - 12:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Matematika</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>12:00 - 13:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Istirahat</Text>
								</View>
							</View>
						</View>
					}
				</View>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#05A9C5' }]}
						onPress={() => this.openMapel('kamis')}
					>
						<Text style={styles.titleText}>Kamis</Text>
					</TouchableOpacity>
					{
						(this.state.kamis) &&
						<View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>08:00 - 10:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>IPA</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>10:00 - 12:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Matematika</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>12:00 - 13:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Istirahat</Text>
								</View>
							</View>
						</View>
					}
				</View>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#0F0C83' }]}
						onPress={() => this.openMapel('jumat')}
					>
						<Text style={styles.titleText}>Jumat</Text>
					</TouchableOpacity>
					{
						(this.state.jumat) &&
						<View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>08:00 - 10:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>IPA</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>10:00 - 12:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Matematika</Text>
								</View>
							</View>
							<View style={styles.contentView}>
								<View style={styles.leftView}>
									<Text style={styles.contentText}>12:00 - 13:00</Text>
								</View>
								<View style={styles.rightView}>
									<Text style={styles.contentText}>Istirahat</Text>
								</View>
							</View>
						</View>
					}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	cardSection: {
		width: width - 40,
		marginVertical: 10,
		marginHorizontal: 20,
		elevation: 5,
		borderRadius: 20,
		overflow: 'hidden',
		paddingBottom: 15
	},
	titleView: {
		padding: 10,
		elevation: 5,
		marginBottom: 5
	},
	titleText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16
	},
	contentView: {
		flexDirection: 'row',
		paddingTop: 10
	},
	leftView: {
		width: width / 3,
		paddingLeft: 20
	},
	rightView: {
		width: width - 40 - width / 3,
		paddingLeft: 10
	},
	contentText: {
		color: '#000'
	}
});

export default JadwalMapel;
