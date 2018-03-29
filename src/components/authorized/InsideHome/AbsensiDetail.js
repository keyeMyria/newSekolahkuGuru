import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';

import { Calendar, LocaleConfig } from 'react-native-calendars';

import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

LocaleConfig.locales['id'] = {
  monthNames: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
  monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agust','Sept','Okt','Nov','Des'],
  dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
  dayNamesShort: ['Ming','Sen','Sel','Rab','Kam','Jum','Sab']
};

LocaleConfig.defaultLocale = 'id';

class AbsensiDetail extends Component {
	static navigationOptions = {
		title: 'Detail Absensi',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <MatComIcon name='alarm-check' size={30} style={{ color: 'white', marginRight: 20 }} />
	};

	render() {
		return (
			<View style={styles.topContainer}>
				<Calendar
					markedDates={{
						'2018-03-01': {selected: true, selectedColor: '#D1A314'},
						'2018-03-07': {selected: true, selectedColor: '#0D6A9C'},
						'2018-03-02': {selected: true, selectedColor: '#19BB0D'},
						'2018-03-05': {selected: true, selectedColor: '#19BB0D'},
						'2018-03-06': {selected: true, selectedColor: '#19BB0D'},
						'2018-03-08': {selected: true, selectedColor: '#19BB0D'},
						'2018-03-09': {selected: true, selectedColor: '#D64A29'},
						'2018-03-12': {selected: true, selectedColor: '#D1A314'}
					}}
				/>
				<View style={[styles.legendView, { marginTop: 30 }]}>
					<View style={styles.leftView}>
						<View style={[styles.circle, { backgroundColor: '#19BB0D' }]} />
						<Text style={styles.legendText}>Masuk</Text>
					</View>
					<View style={styles.rightView}>
						<View style={[styles.circle, { backgroundColor: '#D1A314' }]} />
						<Text style={styles.legendText}>Ijin</Text>
					</View>
				</View>
				<View style={styles.legendView}>
					<View style={styles.leftView}>
						<View style={[styles.circle, { backgroundColor: '#0D6A9C' }]} />
						<Text style={styles.legendText}>Sakit</Text>
					</View>
					<View style={styles.rightView}>
						<View style={[styles.circle, { backgroundColor: '#9C0D16' }]} />
						<Text style={styles.legendText}>Alpa</Text>
					</View>
				</View>
				<View style={styles.legendView}>
					<View style={styles.leftView}>
						<View style={[styles.circle, { backgroundColor: '#D64A29' }]} />
						<Text style={styles.legendText}>Terlambat</Text>
					</View>
					<View style={styles.rightView}>
						<View style={[styles.circle, { backgroundColor: '#8F0D9C' }]} />
						<Text style={styles.legendText}>Pulang Lebih Cepat</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	legendView: {
		marginTop: 10,
		marginHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15
	},
	legendText: {
		color: '#000',
		fontSize: 12,
		marginLeft: 10
	},
	leftView: {
		flexDirection: 'row',
		alignItems: 'center',
		width: width / 3
	},
	rightView: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default AbsensiDetail;
