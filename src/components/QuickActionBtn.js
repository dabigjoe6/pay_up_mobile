import React from 'react';
import { Button, Icon } from 'react-native-elements';

export default function QuickActionBtn(props) {
	return (
		<Button
			containerStyle={{ marginHorizontal: 5 }}
			titleStyle={{ fontSize: 12, }}
			buttonStyle={{ width: 75, height: 20 }}
			icon={props.icon}
			title={props.title}
		/>
	)
}