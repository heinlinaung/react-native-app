import React, {Component} from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	componentWithMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(res=>console.log('res',res))
	}

  render() {
    return(
      <View>
        <Text>ALbumList!!!</Text>
      </View>
    );
  }
}

export default AlbumList;