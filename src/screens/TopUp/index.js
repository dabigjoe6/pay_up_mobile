import React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { Container, HeaderText, QuickActionBtn } from '../../components';

export default function TopUp() {
	return (
		<Container>
			<HeaderText title="Top Up Wallet" />
			<View style={{ width: '100%', alignItems: 'flex-end', marginVertical: 30 }}>
				<Button
					title="Add Card"
					icon={<Icon
						name="credit-card-plus"
						type="material-community"
						color="white"
					/>}
					buttonStyle={{ width: 150 }}
				/>
			</View>
		</Container>
	)
}