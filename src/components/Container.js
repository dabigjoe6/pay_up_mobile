import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function Container(props) {
	return (
		<>
			<StatusBar backgroundColor="white" />
			<View style={{ flex: 1, padding: 20 }}>
				{props.children}
			</View>
		</>
	)
}