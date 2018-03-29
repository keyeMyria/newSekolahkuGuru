import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import { CarouselItem } from './';

const { width, height } = Dimensions.get('window');

const Header = () => {
	return (
		<View style={styles.headerStyle}>
			<View style={styles.headerView}>
				<Image
					source={require('../../assets/images/sekolahku-top.png')}
					style={styles.headerImage}
					resizeMode="contain"
				/>
			</View>
			<Carousel
				style={styles.carouselStyle}
				bullets
				autoplay
				delay={7000}
				bulletStyle={styles.bulletCarouselStyle}
				chosenBulletStyle={styles.bulletCarouselStyle}
			>
				<CarouselItem
					source={require('../../assets/images/alkamil1.jpg')}
					style={styles.carouselStyle}
				/>
				<CarouselItem
					source={require('../../assets/images/alkamil2.jpg')}
					style={styles.carouselStyle}
				/>
				<CarouselItem
					source={require('../../assets/images/alkamil3.jpg')}
					style={styles.carouselStyle}
				/>
				<CarouselItem
					source={require('../../assets/images/alkamil4.jpg')}
					style={styles.carouselStyle}
				/>
			</Carousel>
		</View>
	);
};

const styles = {
	headerStyle: {
		flex: 1
	},
	headerView: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 40,
		width,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 10
	},
	headerImage: {
		marginTop: 10,
		height: 40
	},
	headerText: {
		color: 'white',
		marginLeft: -2
	},
	carouselStyle: {
		width: width,
		height: height / 4
	},
	bulletCarouselStyle: {
		marginBottom: 20
	}
};

export { Header };
