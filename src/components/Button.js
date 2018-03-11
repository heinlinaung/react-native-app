import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
	const {
		buttonStyle,
		buttonTextStyle
	} = styles;
	return(
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={buttonTextStyle}>Click Me!</Text>
		</TouchableOpacity>
	)
}

const styles = {
	buttonTextStyle : {
		alignSelf : 'center',
		color : '#007aff',
		fontSize : 16,
		fontWeight : '700',
		paddingTop : 10,
		paddingBottom : 10
	},
	buttonStyle : {
		flex : 1,
		alignSelf : 'stretch',
		backgroundColor : '#fff',
		borderRadius : 5,
		borderWidth : 1,
		borderColor : '#007aff',
		marginLeft : 5,
		marginRight : 5
	}
}

export default Button;