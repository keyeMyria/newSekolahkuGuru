import React, { Component } from 'react';
import {
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

import FaIcon from 'react-native-vector-icons/FontAwesome';

class Raport extends Component {
	static navigationOptions = {
		title: 'Raport',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <FaIcon name='file-text-o' size={30} style={{ color: '#fff', marginRight: 20 }} />
	};

	constructor(props) {
		super(props);

		this.onSemesterClicked = this.onSemesterClicked.bind(this);
	}

	onSemesterClicked() {
		this.props.navigation.navigate('RaportDetail');
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<TouchableOpacity
					style={[styles.cardSection, { marginTop: 10 }]}
					onPress={this.onSemesterClicked}
				>
					<Text style={styles.text}>Semester 1 2017-2018</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.cardSection}>
					<Text style={styles.text}>Semester 2 2017-2018</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	cardSection: {
		marginVertical: 5,
		marginHorizontal: 10,
		backgroundColor: '#7B0D8C',
		elevation: 5,
		padding: 15,
		paddingLeft: 25,
		borderRadius: 10
	},
	text: {
		color: '#fff'
	}
});

export default Raport;
