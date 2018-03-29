import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Platform,
	UIManager,
	LayoutAnimation
} from 'react-native';

import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLegend } from "victory-native";

import EntIcon from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

const data1 = [
  { x: 'UH1', y: 90 },
  { x: 'UH2', y: 80 },
  { x: 'UH3', y: 60 },
  { x: 'UTS', y: 90 }
];

const data2 = [
  { x: 'UH1', y: 70 },
  { x: 'UH2', y: 75 },
  { x: 'UH3', y: 75 },
  { x: 'UTS', y: 70 }
];

class Nilai extends Component {
	static navigationOptions = {
		title: 'Statistik Nilai',
		headerStyle: {
			backgroundColor: 'red'
		},
		headerTintColor: '#fff',
		headerRight: <EntIcon name='bar-graph' size={30} style={{ color: '#fff', marginRight: 20 }} />
	};

	constructor(props) {
		super(props);

		this.state = {
			openMapel1: false,
			openMapel2: false
		};

		this.openMapel1 = this.openMapel1.bind(this);
		this.openMapel2 = this.openMapel2.bind(this);
	}

	componentWillUpdate() {
		if (Platform.OS === 'android') {
			UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
		}
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
	}

	openMapel1() {
		this.setState({ openMapel1: true, openMapel2: false });
	}

	openMapel2() {
		this.setState({ openMapel1: false, openMapel2: true });
	}

	render() {
		return (
			<ScrollView style={styles.topContainer}>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#19BB0D' }]}
						onPress={this.openMapel1}
					>
						<Text style={styles.titleText}>Matematika</Text>
					</TouchableOpacity>
					{
						(this.state.openMapel1) &&
						<View>
							<View style={styles.scoreWrapper}>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Harian Terakhir :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>60</Text>
									</View>
								</View>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Tengah Semester (UTS) :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>90</Text>
									</View>
								</View>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Akhir Semester (UAS) :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>-</Text>
									</View>
								</View>
							</View>
							<View style={styles.graphContainer}>
								<VictoryChart
									width={350}
									domainPadding={{y: 20}}
									theme={VictoryTheme.material}
									domain={{y: [0, 100]}}
									style={{
										parent: {
											backgroundColor: '#403D35',
											borderRadius: 20
										}
									}}
									animate
								>
									<VictoryLegend
										x={70}
										y={0}
										titleOrientation="bottom"
										title="Nilai"
										centerTitle
										orientation="horizontal"
										gutter={50}
										style={{
											title: { fontSize: 20, fill: 'white' },
											labels: { fill: 'white' }
										}}
										data={[
										{ name: "Individu", symbol: { fill: "#FFF" } },
										{ name: "Kelas", symbol: { fill: "#F0A907" } }
										]}
									/>
									<VictoryAxis
										style={{
											tickLabels: { fontSize: 10, fill: '#928B8A' },
											axis: { stroke: '#928B8A' },
											grid: { stroke: '#928B8A', strokeWidth: 0.25 }
										}} dependentAxis
									/>
									<VictoryAxis
										style={{
											tickLabels: { fontSize: 10, fill: '#928B8A' },
											axis: { stroke: '#928B8A' },
											grid: { stroke: '#928B8A', strokeWidth: 0.25 }
										}}
									/>
									<VictoryLine data={data1} x="x" y="y" style={{ data: { stroke: '#FFF', strokeWidth: 2 } }} />
									<VictoryLine data={data2} x="x" y="y" style={{ data: { stroke: '#F0A907', strokeWidth: 2 } }} />
								</VictoryChart>
								<View style={styles.graphWrapper} />
							</View>
						</View>
					}
				</View>
				<View style={styles.cardSection}>
					<TouchableOpacity
						style={[styles.titleView, { backgroundColor: '#E97E3C' }]}
						onPress={this.openMapel2}
					>
						<Text style={styles.titleText}>IPA</Text>
					</TouchableOpacity>
					{
						(this.state.openMapel2) &&
						<View>
							<View style={styles.scoreWrapper}>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Harian Terakhir :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>60</Text>
									</View>
								</View>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Tengah Semester (UTS) :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>90</Text>
									</View>
								</View>
								<View style={styles.scoreView}>
									<View style={styles.leftSide}>
										<Text style={styles.scoreText}>Ulangan Akhir Semester (UAS) :</Text>
									</View>
									<View style={styles.rightSide}>
										<Text style={styles.scoreText}>-</Text>
									</View>
								</View>
							</View>
							<View style={styles.graphContainer}>
								<VictoryChart
									width={350}
									domainPadding={{y: 20}}
									theme={VictoryTheme.material}
									domain={{y: [0, 100]}}
									style={{
										parent: {
											backgroundColor: '#403D35',
											borderRadius: 20
										}
									}}
									animate
								>
									<VictoryLegend
										x={70}
										y={0}
										titleOrientation="bottom"
										title="Nilai"
										centerTitle
										orientation="horizontal"
										gutter={50}
										style={{
											title: { fontSize: 20, fill: 'white' },
											labels: { fill: 'white' }
										}}
										data={[
										{ name: "Individu", symbol: { fill: "#FFF" } },
										{ name: "Kelas", symbol: { fill: "#F0A907" } }
										]}
									/>
									<VictoryAxis
										style={{
											tickLabels: { fontSize: 10, fill: '#928B8A' },
											axis: { stroke: '#928B8A' },
											grid: { stroke: '#928B8A', strokeWidth: 0.25 }
										}} dependentAxis
									/>
									<VictoryAxis
										style={{
											tickLabels: { fontSize: 10, fill: '#928B8A' },
											axis: { stroke: '#928B8A' },
											grid: { stroke: '#928B8A', strokeWidth: 0.25 }
										}}
									/>
									<VictoryLine data={data1} x="x" y="y" style={{ data: { stroke: '#FFF', strokeWidth: 2 } }} />
									<VictoryLine data={data2} x="x" y="y" style={{ data: { stroke: '#F0A907', strokeWidth: 2 } }} />
								</VictoryChart>
								<View style={styles.graphWrapper} />
							</View>
						</View>
					}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1
	},
	cardSection: {
		width: width - 40,
		marginVertical: 10,
		marginHorizontal: 20,
		elevation: 5,
		borderRadius: 20,
		overflow: 'hidden',
		paddingBottom: 15
	},
	titleView: {
		padding: 10,
		elevation: 5,
		marginBottom: 5
	},
	titleText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16
	},
	graphContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "transparent",
		marginVertical: 10
	},
	graphWrapper: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: width - 40,
		height: height,
		backgroundColor: 'transparent'
	},
	scoreWrapper: {
		paddingBottom: 5
	},
	scoreView: {
		flexDirection: 'row'
	},
	leftSide: {
		width: (width - 40) * 3 / 4,
		paddingLeft: 20,
		paddingTop: 5
	},
	rightSide: {
		paddingLeft: 10,
		paddingTop: 5
	},
	scoreText: {
		color: '#000'
	}
});

export default Nilai;
