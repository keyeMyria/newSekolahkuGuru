import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ScrollView
} from 'react-native';

const { width } = Dimensions.get('window');

import FoundIcon from 'react-native-vector-icons/Foundation';

class Pengumuman extends Component {
	static navigationOptions = {
		title: 'Pengumuman',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <FoundIcon name='sound' size={30} style={{ color: 'white', marginRight: 20 }} />
	};

	constructor(props) {
		super(props);

		this.pengumumanDetail = this.pengumumanDetail.bind(this);
	}

	pengumumanDetail() {
		this.props.navigation.navigate('PengumumanDetail');
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<ScrollView style={styles.topContainer}>
					<TouchableOpacity
						style={[styles.cardSection, { marginTop: 4 }]}
						onPress={this.pengumumanDetail}
					>
						<View style={[styles.categoryView, { backgroundColor: 'rgba(176,21,19,1)' }]}>
							<Text style={styles.categoryText}>S</Text>
						</View>
						<View style={styles.contentView}>
							<View style={[styles.itemView, { borderBottomWidth: 1, borderColor: 'rgba(176,21,19,1)' }]}>
								<Text style={styles.contentText}>28 Mar 2018</Text>
							</View>
							<View style={styles.itemView}>
								<Text style={styles.contentText} numberOfLines={1}>
									Minggu depan diadakan EFT. Mohon agar dapat dipersiapkan segala sesuatunya. bila saja tes lebih dari 2 line
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardSection}>
						<View style={[styles.categoryView, { backgroundColor: 'rgba(176,21,19,1)' }]}>
							<Text style={styles.categoryText}>P</Text>
						</View>
						<View style={styles.contentView}>
							<View style={[styles.itemView, { borderBottomWidth: 1, borderColor: 'rgba(176,21,19,1)' }]}>
								<Text style={styles.contentText}>1 Apr 2018</Text>
							</View>
							<View style={styles.itemView}>
								<Text style={styles.contentText} numberOfLines={1}>
									Ada tunggakan pembayaran
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardSection}>
						<View style={[styles.categoryView, { backgroundColor: 'black' }]}>
							<Text style={styles.categoryText}>K</Text>
						</View>
						<View style={styles.contentView}>
							<View style={[styles.itemView, { borderBottomWidth: 1, borderColor: 'black' }]}>
								<Text style={styles.contentText}>1 Mar 2018</Text>
							</View>
							<View style={styles.itemView}>
								<Text style={styles.contentText} numberOfLines={1}>
									Hari Kamis ini sekolah diliburkan
								</Text>
							</View>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.cardSection, { marginBottom: 50 }]}>
						<View style={[styles.categoryView, { backgroundColor: 'black' }]}>
							<Text style={styles.categoryText}>K</Text>
						</View>
						<View style={styles.contentView}>
							<View style={[styles.itemView, { borderBottomWidth: 1, borderColor: 'black' }]}>
								<Text style={styles.contentText}>1 Mar 2018</Text>
							</View>
							<View style={styles.itemView}>
								<Text style={styles.contentText} numberOfLines={1}>
									Hari Kamis ini sekolah diliburkan
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				</ScrollView>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>S:Sekolah  K:Kelas  P:Personal</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	cardSection: {
		marginVertical: 2,
		flexDirection: 'row',
		backgroundColor: '#C0C0C0'
	},
	categoryView: {
		width: width / 6,
		alignItems: 'center',
		justifyContent: 'center'
	},
	categoryText: {
		color: 'white',
		fontSize: 30
	},
	contentView: {
		flex: 1
	},
	itemView: {
		padding: 10
	},
	contentText: {
		color: 'black'
	},
	footerView: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: width,
		padding: 10,
		backgroundColor: 'red'
	},
	footerText: {
		color: 'white',
		textAlign: 'center'
	}
});

export default Pengumuman;
