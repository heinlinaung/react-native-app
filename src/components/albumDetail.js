import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image } = album
	const { 
		thumbnailStyle, 
		headerContentStyle, 
		thumbnailContainerStyle,
		headerTextStyle,
		albumImageStyle
	} = styles
	return(
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						source={{ uri : thumbnail_image }} 
						style={thumbnailStyle} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			
			<CardSection>
				<View>
					<Image source={{ uri : image }} style={albumImageStyle}/>
				</View>
			</CardSection>

			<CardSection>
				<Button />
			</CardSection>
		</Card>		
	)
}

const styles = {
	headerContentStyle : {
		justifyContent : 'space-around',
		flexDirection : 'column'
	},
	headerTextStyle :{
		fontSize : 18
	},
	thumbnailStyle : {
		height : 50, 
		width : 50
	},
	thumbnailContainerStyle : {
		justifyContent : 'center',
		alignItems : 'center',
		marginLeft : 10,
		marginRight : 10
	},
	albumImageStyle : {
		height : 300,
		width : 355
	}
}

export default AlbumDetail;