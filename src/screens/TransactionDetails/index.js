import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, HeaderText } from '../../components';

export default function TransactionDetails() {
	return (
		<Container>
			<HeaderText title="Transaction Details" />
			<View style={{ marginTop: 60 }}>
				<View style={styles.row}>
					<Text style={styles.detailText}>Reference No</Text>
					<Text style={styles.detailItem}>1506AF7</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.detailText}>Date</Text>
					<Text style={styles.detailItem}>12th October, 2020</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.detailText}>Time</Text>
					<Text style={styles.detailItem}>3:05 PM</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.detailText}>Recipient ID</Text>
					<Text style={styles.detailItem}>55563B</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.detailText}>Amount</Text>
					<Text style={styles.detailItem}>₦50,000</Text>
				</View>
			</View>
			<Button
				title="Report Transaction"
				buttonStyle={{ backgroundColor: 'red' }}
				containerStyle={{ position: 'absolute', bottom: 20, alignSelf: 'center', width: '100%' }}
			/>
		</Container>
	)
}

const styles = {
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 20
	},
	detailText: {
		fontWeight: '700',
		fontSize: 17,
		color: '#C3C9CC'
	},
	detailItem: {
		color: '#2886FF',
		fontWeight: '700',
		fontSize: 17
	}
}