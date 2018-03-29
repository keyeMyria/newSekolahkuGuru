import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';

import FaIcon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

class RaportDetail extends Component {
	static navigationOptions = {
		title: 'Raport',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <FaIcon name='file-text-o' size={30} style={{ color: '#fff', marginRight: 20 }} />
	};

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.title}>
					<Text style={styles.titleText}>Semester 1 2017-2018</Text>
				</View>
				<View style={styles.layout}>
					<View style={styles.header}>
						<View>
							<Text style={styles.headerText}>Sekolah : SDIT Al Kamil</Text>
							<Text style={styles.headerText}>Wali Kelas : Pak Mustakim</Text>
						</View>
						<View>
							<Text style={styles.headerText}>Kelas : 5 SD</Text>
						</View>
					</View>
					<View style={styles.tableHeader}>
						<View style={styles.leftSide}>
							<Text style={styles.headerText}>Mata Pelajaran</Text>
						</View>
						<View style={[styles.middleSide, { borderColor: '#fff' }]}>
							<Text style={styles.headerText}>Nilai</Text>
						</View>
						<View style={styles.rightSide}>
							<Text style={styles.headerText}>KKM</Text>
						</View>
					</View>
					<View style={styles.tableContent}>
						<View style={styles.leftSide}>
							<Text style={styles.contentText}>Matematika</Text>
						</View>
						<View style={styles.middleSide}>
							<Text style={styles.contentText}>80</Text>
						</View>
						<View style={styles.rightSide}>
							<Text style={styles.contentText}>70</Text>
						</View>
					</View>
					<View style={styles.tableContent}>
						<View style={styles.leftSide}>
							<Text style={styles.contentText}>IPA</Text>
						</View>
						<View style={styles.middleSide}>
							<Text style={styles.contentText}>90</Text>
						</View>
						<View style={styles.rightSide}>
							<Text style={styles.contentText}>70</Text>
						</View>
					</View>
					<View style={styles.tableContent}>
						<View style={styles.leftSide}>
							<Text style={styles.contentText}>Bhs Indonesia</Text>
						</View>
						<View style={styles.middleSide}>
							<Text style={styles.contentText}>85</Text>
						</View>
						<View style={styles.rightSide}>
							<Text style={styles.contentText}>75</Text>
						</View>
					</View>
					<View style={styles.catatan}>
						<Text style={styles.contentText}>Catatan :</Text>
						<Text style={[styles.contentText, { paddingTop: 5 }]}>
						Ananda cukup bisa mengikuti pelajaran Matematika dan IPA.
						 Ananda perlu di-stimulus untuk lebih sering membaca tulisan-tulisan bermanfaat.
						 </Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	title: {
		marginVertical: 10,
		marginHorizontal: 20,
		backgroundColor: '#9C0D16',
		padding: 10
	},
	titleText: {
		color: '#fff',
		textAlign: 'center'
	},
	layout: {
		marginBottom: 10
	},
	header: {
		backgroundColor: '#9C0D16',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 5,
		alignItems: 'flex-end'
	},
	headerText: {
		color: '#fff'
	},
	tableHeader: {
		backgroundColor: '#9C0D16',
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: '#fff'
	},
	leftSide: {
		paddingVertical: 10,
		paddingLeft: 20,
		width: width / 2
	},
	middleSide: {
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: '#ddd',
		paddingLeft: 20,
		paddingVertical: 10,
		width: width / 4
	},
	rightSide: {
		paddingVertical: 10,
		paddingLeft: 20
	},
	tableContent: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#ddd'
	},
	contentText: {
		color: '#000'
	},
	catatan: {
		borderBottomWidth: 1,
		borderColor: '#ddd',
		paddingHorizontal: 20,
		paddingVertical: 10
	}
});

export default RaportDetail;
