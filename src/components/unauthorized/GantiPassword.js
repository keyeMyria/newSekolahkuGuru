import React, { Component } from 'react';
import {
	View, 
	Text, 
	StyleSheet,
	KeyboardAvoidingView, 
	TouchableOpacity,
	TextInput,
	Platform,
	UIManager,
	LayoutAnimation,
	ImageBackground,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-easy-toast';

import { passwordChanged, tokenChanged, gantiPassword, submitTokenPassword, cancelReplace } from '../../actions';
import { Spinner } from '../common';

const { width, height } = Dimensions.get('window');

class GantiPassword extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: ''
		};
	}

	componentWillUpdate() {
		// To enable animation on Android as well
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.error !== this.state.error) {
			this.setState({ error: nextProps.error });
			if (nextProps.error !== '') {
				this.refs.toast.show(nextProps.error);
			}
		}
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onTokenChange(text) {
		this.props.tokenChanged(text);
	}

	onButtonPress() {
		const { username, password } = this.props;
		this.props.gantiPassword({ username, password });
	}

	onTokenButtonPress() {
		const { username, password, token } = this.props;
		this.props.submitTokenPassword({ username, password, token });
	}

	onCancelButtonPress() {
		this.props.cancelReplace();
	}

	cancelButton() {
		return (
			<TouchableOpacity
				onPress={this.onCancelButtonPress.bind(this)}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Cancel</Text>
			</TouchableOpacity>
		);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		if (this.props.tokenRec) {
			return (
				<View>
					<TouchableOpacity
						onPress={this.onTokenButtonPress.bind(this)}
						style={styles.button}
					>
						<Text style={styles.buttonText}>Submit Token</Text>
					</TouchableOpacity>
					{this.cancelButton()}
				</View>
			);
		}
		return (
			<View>
				<TouchableOpacity
					onPress={this.onButtonPress.bind(this)}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Submit New Password</Text>
				</TouchableOpacity>
				{this.cancelButton()}
			</View>
		);
	}

	renderInput() {
		return (
			<View>
				<TextInput
					placeholder="Username"
					placeholderTextColor="rgba(255,255,255,0.6)"
					style={styles.input}
					autoCapitalize="none"
					autoCorrect={false}
					underlineColorAndroid="transparent"
					editable={false}
					value={this.props.username}
				/>
				<TextInput
					placeholder="Password Baru"
					placeholderTextColor="rgba(255,255,255,0.6)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					underlineColorAndroid="transparent"
					onChangeText={this.onPasswordChange.bind(this)}
					value={this.props.password}
					editable={this.props.tokenRec ? false : true}
				/>
				{
					(this.props.tokenRec) &&
					<TextInput
						placeholder="Isi Token"
						placeholderTextColor="rgba(255,255,255,0.6)"
						keyboardType="numeric"
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						onChangeText={this.onTokenChange.bind(this)}
						value={this.props.token}
					/>
				}
				{this.renderButton()}
				<View style={styles.footerNote}>
					<Text style={styles.buttonText}>
						"Password minimal 8 karakter"
					</Text>
				</View>
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
			<ImageBackground
				style={styles.topContainer}
				resizeMode="cover"
				source={require('../../assets/images/changepwd.jpg')}
			>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						Ganti Password
					</Text>	
				</View>
				{this.renderInputBox()}
				<Toast
					ref="toast"
					position='bottom'
					opacity={0.8}
				/>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
		width,
		height
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
		borderWidth: 3,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: '700'
	},
	footerNote: {
		height: 40,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		borderWidth: 0
	},
	keyboardContainer: {
		padding: 20,
		position: 'absolute',
		left: 30,
		right: 30,
		bottom: 30
	},
	titleContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		left: 30,
		right: 30,
		top: 90		
	},
	titleText: {
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 25	
	}
});

const mapStateToProps = ({ auth }) => {
	const { username, password, token, error, loading, tokenRec } = auth;

	return { username, password, token, error, loading, tokenRec };
};

export default connect(mapStateToProps, {
	passwordChanged, tokenChanged, gantiPassword, submitTokenPassword, cancelReplace
})(GantiPassword);
