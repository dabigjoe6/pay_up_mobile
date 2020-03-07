import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function TransactionCard() {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
			<View style={{ flexDirection: 'row' }}>
				<Avatar rounded icon={{ name: 'home' }} />
				<View style={{ marginLeft: 10 }}>
					<Text style={{ marginBottom: 5, fontSize: 17, fontWeight: 'bold', color: '#2886FF' }}>Bank Transfer</Text>
					<Text style={{ color: '#C3C9CC' }}>Date created</Text>
				</View>
			</View>
			<View>
				<Text style={{ fontWeight: "bold", color: '#2886FF' }}>₦30,000</Text>
				<Text style={{ color: '#C3C9CC' }}>2 days ago</Text>
			</View>
		</View>
	)
}