import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, HeaderText, TransactionCard, QuickActionBtn, } from '../../components';

export default function Transactions() {

	function renderItem({ item }) {
		return (
			<TransactionCard />
		)
	}
	return (
		<Container>
			<HeaderText title="Transactions" />
			<View style={{ flexDirection: 'row', marginTop: 25, marginBottom: 10 }}>
				<QuickActionBtn title="All" />
				<Button
					containerStyle={{ marginHorizontal: 5 }}
					titleStyle={{ fontSize: 12, }}
					buttonStyle={{ width: 75, height: 20 }}
					title="Credits"
					type="outline"
				/>
				<Button
					containerStyle={{ marginHorizontal: 5 }}
					titleStyle={{ fontSize: 12, }}
					buttonStyle={{ width: 75, height: 20 }}
					title="Debits"
					type="outline"
				/>
			</View>
			<FlatList
				data={[0, 1, 2, 3, 4, 5]}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}