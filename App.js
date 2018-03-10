import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

export default class Albums extends Component {
  render() {
    return (
      <View>
        <Header headerText='Albums!'/>
        <AlbumList />
      </View>
    )
  }
}