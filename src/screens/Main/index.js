import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';
import { QuickActionBtn, TransactionCard, Container, HeaderText } from '../../components';

export default function Main() {

	function renderItem({ item }) {
		return (
			<View style={{ alignItems: 'center', marginTop: 10, height: 90, }}>
				<Button
					containerStyle={{ marginHorizontal: 5, }}
					titleStyle={{ fontSize: 12, }}
					buttonStyle={{ width: 75, height: 60 }}
					icon={
						<Avatar rounded title="Ms" />
					}
					type="outline"
				/>
				<Text style={{ color: '#2886FF' }}>Mavis</Text>
			</View>
		)
	}
	return (
		<Container>
			<HeaderText title="Wallet" />
			<View style={{ marginVertical: 5, }}>
				<Text style={{ fontSize: 30, fontWeight: '700', color: '#515E69' }}>Hi,</Text>
				<Text style={{ fontSize: 30, fontWeight: '700', color: '#515E69' }}>Joseph</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<Text style={styles.section_text}>Current IMSI: </Text>
				<Text style={[styles.section_text, { color: '#2886FF' }]}>12345567888899</Text>
			</View>
			<Text style={styles.section_text}>Balance</Text>
			<View style={{ marginVertical: 10, flexDirection: 'row', alignSelf: 'center', alignItems: 'flex-end' }}>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
					{/* Wallet Balance */}
					<Text style={{ fontWeight: '600', alignSelf: 'flex-start' }}>₦</Text>
					<Text style={{ fontSize: 50, fontWeight: '700' }}>230,000</Text>
					<Text style={{ fontWeight: '600', alignSelf: 'flex-end' }}>00</Text>
				</View>
				<Button
					containerStyle={{ marginHorizontal: 5 }}
					titleStyle={{ fontSize: 12, }}
					buttonStyle={{ width: 75, height: 20 }}
					icon={
						<Icon
							name="format-vertical-align-top"
							size={15}
							color="#2886FF"
							type="material-community"

						/>
					}
					title="Top up"
					type="outline"
				/>
			</View>
			<Text style={styles.section_text}>Quick Actions</Text>
			<View style={{ marginTop: 15, flexDirection: 'row', }}>
				<QuickActionBtn
					icon={<Icon
						name="arrow-top-right"
						size={15}
						color="white"
						type="material-community"
					/>}
					title="Transfer" />
				<QuickActionBtn
					icon={<Icon
						name="format-vertical-align-bottom"
						size={15}
						color="white"
						type="material-community"
					/>}
					title="Deposit"
				/>
			</View>
			<Text style={styles.section_text}>Send money to: </Text>
			<FlatList
				data={[0, 1, 2, 3, 4]}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ height: 90 }}
				horizontal
			/>
			<View>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
					<Text style={{ color: '#C3C9CC', fontSize: 22, fontWeight: '600' }}>Recent</Text>
					<Button
						title="VIEW ALL"
						type="clear"
						titleStyle={{ fontWeight: '800' }}
					/>
				</View>
				<View style={{}}>
					<TransactionCard />
					<TransactionCard />
				</View>
			</View>
		</Container>
	)
}

const styles = {
	section_text: {
		marginTop: 30,
		color: '#C3C9CC'
	}
}