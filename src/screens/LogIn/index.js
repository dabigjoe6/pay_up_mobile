import React from 'react';
import { View, Text, TextInput, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { Container } from '../../components';

export default function LogIn() {
	return (
		<>
			<StatusBar backgroundColor="#2886FF" />
			<View style={{ flex: 1, backgroundColor: '#2886FF', padding: 20 }}>
				<View style={{ marginVertical: 20 }}>
					<Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white' }}>Log In.</Text>
					<Text style={{ color: 'white' }}>It's a good day to save</Text>
				</View>
				<View style={{ marginTop: 50 }}>
					<TextInput
						placeholder="Phone number"
						placeholderTextColor="white"
						underlineColorAndroid="#C3C9CC"
						style={{ marginVertical: 20 }} />
					<TextInput
						placeholder="PIN"
						placeholderTextColor="white"
						underlineColorAndroid="#C3C9CC"
						style={{ marginVertical: 20 }} />
				</View>
				<Button
					title="LOG IN"
					titleStyle={{ color: '#2886FF', fontWeight: 'bold', fontSize: 16 }}
					buttonStyle={{ backgroundColor: 'white' }}
					containerStyle={{ position: 'absolute', bottom: 20, alignSelf: 'center', width: '90%' }}
				/>
			</View>
		</>
	)
}
