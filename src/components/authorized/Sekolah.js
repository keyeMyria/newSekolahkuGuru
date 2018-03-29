import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

import { Header } from '../common';

class Sekolah extends Component {
	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<Header />
				<View style={styles.schoolSection}>
					<Text style={styles.schoolText}>
						SDIT Al Kamil
					</Text>
				</View>
				<View style={styles.cardWrapper}>
					<View style={styles.imageWrapper}>
						<Image
							source={require('../../assets/images/visi.png')}
							style={styles.imageIcon}
							resizeMode="contain"
						/>
					</View>
					<View style={styles.cardSection}>
						<Text style={styles.subTitle}>Visi</Text>
						<Text style={styles.text}>
							Terwujudnya peserta didik yang berakhlak mulia dan sadar lingkungan berdasarkan Iman & Taqwa
						</Text>
					</View>
				</View>
				<View style={styles.cardWrapper}>
					<View style={styles.imageWrapper}>
						<Image
							source={require('../../assets/images/misi.png')}
							style={styles.imageIcon}
							resizeMode="contain"
						/>
					</View>
					<View style={styles.cardSection}>
						<Text style={styles.subTitle}>Misi</Text>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>1.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Menciptakan lingkungan sekolah yang religius
								</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>2.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Mewujudkan kerjasama yang harmonis
								</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>3.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Meningkatkan kompetensi siswa
								</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>4.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Menciptakan siswa-siswa yang berkarakter ISLAMI
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.cardWrapper}>
					<View style={styles.imageWrapper}>
						<Image
							source={require('../../assets/images/facilitas.png')}
							style={styles.imageIcon}
							resizeMode="contain"
						/>
					</View>
					<View style={styles.cardSection}>
						<Text style={styles.subTitle}>Fasilitas</Text>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>1.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Ruang belajar AC
								</Text>
							</View>
						</View>
						<View style={styles.cardItem}>
							<View>
								<Text style={styles.text}>2.</Text>
							</View>
							<View style={styles.rightView}>
								<Text style={styles.text}>
									Lab. Komputer dan Bahasa
								</Text>
							</View>
						</View>
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
	schoolSection: {
		backgroundColor: 'rgba(176,21,19,1)',
		padding: 10,
		marginHorizontal: 20,
		marginTop: 10,
		marginBottom: 5,
		borderRadius: 25,
		elevation: 5
	},
	schoolText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold'
	},
	cardWrapper: {
		backgroundColor: 'transparent'
	},
	cardSection: {
		backgroundColor: 'rgba(176,21,19,1)',
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 10,
		padding: 10,
		paddingBottom: 15,
		elevation: 5
	},
	subTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingBottom: 15
	},
	text: {
		paddingTop: 5,
		color: '#fff',
		fontSize: 16,
		fontWeight: 'normal'		
	},
	cardItem: {
		flexDirection: 'row'
	},
	rightView: {
		marginHorizontal: 10
	},
	imageIcon: {
		width: 70,
		height: 70
	},
	imageWrapper: {
		width: 70,
		height: 70,
		position: 'absolute',
		left: 5,
		top: 0,
		elevation: 9,
		backgroundColor: 'transparent'
	}
});

export default Sekolah;
