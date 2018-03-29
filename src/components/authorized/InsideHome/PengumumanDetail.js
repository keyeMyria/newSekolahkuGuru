import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	Dimensions
} from 'react-native';

import LightBox from 'react-native-lightbox';
import FoundIcon from 'react-native-vector-icons/Foundation';

const { width, height } = Dimensions.get('window');

class PengumumanDetail extends Component {
	static navigationOptions = {
		title: 'Pengumuman',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <FoundIcon name='sound' size={30} style={{ color: 'white', marginRight: 20 }} />
	};

	renderLightBox() {
		return (
			<View>
				<View style={styles.thumbnailClick}>
					<LightBox
						underlayColor="white"
						activeProps={{ style: { width, height, resizeMode: 'contain' } }}
					>
						<Image
							source={require('../../../assets/images/piccarousel1.jpg')}
							style={styles.thumbnail}
						/>
					</LightBox>
				</View>
				<View style={styles.thumbnailClick}>
					<LightBox
						underlayColor="white"
						activeProps={{ style: { width, height, resizeMode: 'contain' } }}
					>
						<Image
							source={require('../../../assets/images/piccarousel3.jpg')}
							style={styles.thumbnail}
						/>
					</LightBox>
				</View>
			</View>
		);
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.headerView}>
					<Text style={styles.headerText}>Sekolah</Text>
				</View>
				<View style={styles.titleView}>
					<View style={[styles.titleContentView, { borderBottomWidth: 1, borderBottomColor: 'white' }]}>
						<View style={styles.leftView}>
							<Text style={styles.titleText}>Tanggal :</Text>
						</View>
						<View style={styles.rightView}>
							<Text style={styles.titleText}>28 Mar 2018</Text>
						</View>
					</View>
					<View style={styles.titleContentView}>
						<View style={styles.leftView}>
							<Text style={styles.titleText}>Perihal :</Text>
						</View>
						<View style={styles.rightView}>
							<Text style={styles.titleText}>
								Minggu depan diadakan EFT. Mohon agar dapat dipersiapkan segala sesuatunya. bila saja tes lebih dari 2 line
							</Text>
						</View>
					</View>
				</View>
				<ImageBackground
					source={require('../../../assets/images/clipImage.png')}
					style={styles.imageBackground}
					resizeMode="contain"
				>
					<Text style={styles.contentText}>
						Minggu depan diadakan EFT. Mohon agar dapat dipersiapkan segala sesuatunya.
						 Diantara yang perlu untuk diperhatikan adalah belajar.
						{'\n\n'}Sehingga bila ada yang dibutuhkan, dapat segera diselesaikan.
					</Text>
				</ImageBackground>
				{this.renderLightBox()}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	headerView: {
		marginHorizontal: 20,
		marginVertical: 10,
		padding: 10,
		backgroundColor: 'rgba(176,21,19,1)',
		elevation: 5
	},
	headerText: {
		color: 'white',
		textAlign: 'center'
	},
	titleView: {
		backgroundColor: 'rgba(176,21,19,1)',
		elevation: 5
	},
	titleContentView: {
		flexDirection: 'row'
	},
	titleText: {
		color: 'white'
	},
	leftView: {
		padding: 10,
		justifyContent: 'center'
	},
	rightView: {
		padding: 10,
		flex: 1
	},
	imageBackground: {
		marginHorizontal: 20,
		width: width - 40,
		height: height / 2,
		paddingTop: 80,
		paddingLeft: 10,
		marginBottom: 10
	},
	contentText: {
		color: 'black'
	},
	thumbnailClick: {
		marginVertical: 5,
		marginHorizontal: 20
	},
	thumbnail: {
		resizeMode: 'cover',
		height: 100
	}
});

export default PengumumanDetail;
