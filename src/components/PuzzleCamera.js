import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PuzzleCamera extends Component {


	render() {
		return (
			<View style={{alignItems: 'center', justifyContent: 'center', height: 500}}>
				<Text> Here you'd take/select photos </Text>
			</View>
		);
	}
}

export default PuzzleCamera;
