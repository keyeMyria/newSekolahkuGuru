import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	KeyboardAvoidingView,
	TouchableOpacity,
	TextInput
} from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-looped-carousel';
import EntIcon from 'react-native-vector-icons/Entypo';

import { Spinner, CarouselItem } from '../common';
import { usernameChanged, passwordChanged, loginUser } from '../../actions';

const { width, height } = Dimensions.get('window');

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onButtonPress = this.onButtonPress.bind(this);
	}

	onUsernameChange(text) {
		this.props.usernameChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { username, password } = this.props;
		this.props.loginUser({ username, password });
	}

	renderButton() {	
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return (
			<TouchableOpacity
				onPress={this.onButtonPress}
				style={styles.button}
			>
				<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
		);
	}

	renderErrorText() {
		if (this.props.error !== '') {
			return (
				<View style={styles.errorContainer}>
					<Text style={styles.errorTextStyle}>
						<EntIcon
							name='circle-with-cross'
							size={16}
							style={{ color: '#D8000C' }}
						/>
						{'  '}
						{this.props.error}
					</Text>
				</View>
			);
		}
		return;
	}

	renderInput() {
		return (
			<View>
				<TextInput
					placeholder="Username"
					placeholderTextColor="rgba(255,255,255,0.6)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					underlineColorAndroid="transparent"
					onChangeText={this.onUsernameChange}
					value={this.props.username}
				/>
				<TextInput
					placeholder="Password"
					placeholderTextColor="rgba(255,255,255,0.6)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					underlineColorAndroid="transparent"
					ref={(input) => this.passwordInput = input}
					onChangeText={this.onPasswordChange}
					value={this.props.password}
				/>
				{this.renderErrorText()}
				{this.renderButton()}
				<TouchableOpacity
					onPress={() => {this.props.navigation.navigate('gantiPassword')}}
					style={styles.buttonLupa}
				>
					<Text style={styles.buttonLupaText}>Ganti Password</Text>
				</TouchableOpacity>
			</View>
		);
	}

	renderInputBox() {
		return (
			<KeyboardAvoidingView style={styles.keyboardContainer}>
				{this.renderInput()}
			</KeyboardAvoidingView>
		);
	}

	render() {
		return (
			<View style={styles.topContainer}>
				<Carousel
					style={styles.carouselStyle}
					bullets
					autoplay
					delay={7000}
					bulletStyle={styles.bulletCarouselStyle}
					chosenBulletStyle={styles.bulletCarouselStyle}
				>
					<CarouselItem
						source={require('../../assets/images/piccarousel1.jpg')}
						style={styles.carouselStyle}
						titleText="Aplikasi Sekolahku"
						titleTextStyle={styles.titleText}
						subtitleText="Sarana tepat bagi Guru & Orang tua untuk berkolaborasi demi pendidikan anak"
						subtitleTextStyle={styles.subtitleText}
					/>
					<CarouselItem
						source={require('../../assets/images/piccarousel3.jpg')}
						style={styles.carouselStyle}
						titleText="Pengumuman Digital"
						titleTextStyle={styles.titleText}
						subtitleText="Tetap update dengan informasi dari sekolah dimana & kapan saja"
						subtitleTextStyle={styles.subtitleText}
					/>
					<CarouselItem
						source={require('../../assets/images/piccarousel4.jpg')}
						style={styles.carouselStyle}
						titleText="Absensi Digital"
						titleTextStyle={styles.titleText}
						subtitleText="Memonitor kehadiran anak anda di sekolah langsung dari smartphone anda"
						subtitleTextStyle={styles.subtitleText}
					/>
					<CarouselItem
						source={require('../../assets/images/piccarousel9.jpg')}
						style={styles.carouselStyle}
						titleText="Rekam Nilai Digital"
						titleTextStyle={styles.titleText}
						subtitleText="Mengetahui statistik nilai anak akan membantu mengetahui potensi anak sesungguhnya"
						subtitleTextStyle={styles.subtitleText}
					/>
				</Carousel>
				{this.renderInputBox()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	carouselStyle: {
		width: width,
		height: height
	},
	bulletCarouselStyle: {
		marginBottom: 20
	},
	titleText: {
		position: 'absolute',
		top: 20,
		left: 20,
		fontSize: 25,
		backgroundColor: 'transparent',
		color: '#fff',
		marginRight: 50
	},
	subtitleText: {
		position: 'absolute',
		top: 80,
		left: 20,
		fontSize: 20,
		backgroundColor: 'transparent',
		color: '#fff',
		marginRight: 50,
		textAlign: 'justify'
	},
	keyboardContainer: {
		padding: 20,
		position: 'absolute',
		left: 30,
		right: 30,
		bottom: 30
	},
	input: {
		height: 50,
		marginBottom: 10,
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 10,
		color: '#fff',
		borderRadius: 10,
		fontSize: 16,
		borderWidth: 3,
		borderColor: '#fff',
		textAlign: 'center'
	},
	button: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'rgba(176,21,19,0.8)',
		borderRadius: 10,
		borderColor: 'rgba(176,21,19,1)',
		borderWidth: 3
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700'
	},
	buttonLupa: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderWidth: 0
	},
	buttonLupaText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700'
	},
	errorContainer: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 10,
		borderRadius: 10
	},
	errorTextStyle: {
		fontSize: 16,
		fontWeight: '700',
		textAlign: 'justify',
		color: '#D8000C',
		paddingHorizontal: 20
	}
});

const mapStateToProps = ({ auth }) => {
	const { username, password, error, loading } = auth;

	return { username, password, error, loading };
};

export default connect(mapStateToProps, {
	usernameChanged, passwordChanged, loginUser
})(LoginForm);
