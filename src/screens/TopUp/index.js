import React, { useRef } from 'react';
import { View, Text, Dimensions, ImageBackground, TextInput } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { Container, HeaderText, QuickActionBtn } from '../../components';
import Carousel from 'react-native-snap-carousel';

let sliderWidth = Dimensions.get('window').width;

export default function TopUp() {

	const _carousel = useRef();

	let _renderItem = ({ item, index }) => {
		return (
			<View style={{ height: 180, width: 300 }}>
				<ImageBackground source={require('../../res/credit_card.jpg')} style={{ height: '100%', width: '100%', }}>
					<View style={{ height: '100%', width: '100%', position: 'relative' }}>
						<Text style={{ position: 'absolute', top: 65, right: 40, fontSize: 28, letterSpacing: 1 }}>*** **** ****</Text>
						<Text style={{ position: 'absolute', bottom: 30, left: 40, fontSize: 18 }}>{item.title}</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}

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
			<View>
				<Carousel
					// ref={(c) => { _carousel = c; }}
					data={[{ title: 'OHINOYI SULEIMAN' }, { title: "OGBEGBO IFERE JASON" }]}
					renderItem={_renderItem}
					sliderWidth={sliderWidth}
					itemWidth={300}
					containerCustomStyle={{ width: '100%', alignSelf: 'center' }}
				/>
			</View>
			<Text style={styles.section_text}>Quick Actions</Text>
			<View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
				<Text style={{ fontWeight: '600', alignSelf: 'flex-start' }}>₦</Text>
				<TextInput
					keyboardType="number-pad"
					autoFocus
					underlineColorAndroid='#2886FF'
					style={{ alignSelf: 'center', width: '80%', paddingHorizontal: 20, marginHorizontal: 10 }}

				/>
				<Text style={{ fontWeight: '600', alignSelf: 'flex-end' }}> (only)</Text>
			</View>
			<Button
				containerStyle={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}
				title="Next"
				titleStyle={{ marginRight: 10 }}
				buttonStyle={{ width: '90%' }}
				iconRight={true}
				icon={
					<Icon
						name="arrow-right"
						type="material-community"
						color="white"
						size={18}
					/>
				}
			/>
		</Container>
	)
}

const styles = {
	section_text: {
		marginTop: 30,
		color: '#C3C9CC',
		marginBottom: 20

	}
}