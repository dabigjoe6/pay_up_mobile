import React from 'react';
import { Text } from 'react-native';

export default function HeaderText(props) {
	return (
		<Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: "600", marginBottom: 5, color: '#C3C9CC' }}>{props.title}</Text>
	)
}