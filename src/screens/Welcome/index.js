import React from 'react';
import { View, Image, Text } from 'react-native';
import { Container } from '../../components';
import { Button } from 'react-native-elements'; ``

export default function Welcome() {
	return (
		<Container>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image source={{ uri: "https://via.placeholder.com/50x50" }} style={{ width: 50, height: 50, marginBottom: 30 }} />
				<Text style={{ fontWeight: 'bold', fontSize: 22 }}>Welcome to Figo</Text>
				<Text style={{ textAlign: 'center' }}>We help you invest your money to achieve your financial goals.</Text>
				<View style={{ position: 'absolute', bottom: 20, width: '100%' }}>
					<Button
						title="SIGN UP"
						containerStyle={{ marginVertical: 20 }}
						type="outline"
					/>

					<Button
						title="LOG IN"
					/>
				</View>
			</View>
		</Container>
	)
}