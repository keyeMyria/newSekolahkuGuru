import React from 'react';
import { Text, ImageBackground, View, StyleSheet } from 'react-native';

const CarouselItem = (props) => {
	const {
		source,
		style,
		titleText,
		titleTextStyle,
		subtitleText,
		subtitleTextStyle
	} = props;

	return (
		<ImageBackground
			source={source}
			style={style}
			resizeMode="cover"
		>
			<View style={[style, styles.viewContainer]}>
				<Text style={titleTextStyle}>
					{titleText}
				</Text>
				<Text style={subtitleTextStyle}>
					{subtitleText}
				</Text>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	viewContainer: {
		backgroundColor: 'rgba(0,0,0,0.3)'
	}
});

export { CarouselItem };
