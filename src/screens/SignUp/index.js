import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container } from '../../components';
import { Button } from 'react-native-elements';

export default function SignUp() {
	return (
		<Container>
			<View style={{ flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Tell us about you</Text>
				<View style={{ flexDirection: 'row', marginVertical: 20 }}>
					<TextInput
						style={{ flex: 1 }}
						placeholder="Firstname"
						underlineColorAndroid="#C3C9CC"
					/>
					<TextInput
						style={{ flex: 1 }}
						placeholder="Lastname"
						underlineColorAndroid="#C3C9CC"
					/>
				</View>
				<View style={{ marginVertical: 20 }}>
					<TextInput placeholder="Phone number"
						underlineColorAndroid="#C3C9CC"
					/>
				</View>
				<View style={{ marginVertical: 20 }}>
					<TextInput placeholder="Bank Verification Number"
						underlineColorAndroid="#C3C9CC" />
				</View>
				<View style={{ marginVertical: 20 }}>
					<TextInput placeholder="Date of Birth"
						underlineColorAndroid="#C3C9CC" />
				</View>
				<Button
					title="CONTINUE"
					containerStyle={{ position: 'absolute', bottom: 20, alignSelf: 'center', width: '100%' }}
				/>
			</View>
		</Container>
	)
}