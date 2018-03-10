import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const {headerText} = props;
  const { viewStyle, textStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle:{
    backgroundColor : '#f8f8f8',
    justifyContent : 'center',
    alignItems : 'center',
    height : 60,
    paddingTop : 15
  },
  textStyle : {
    fontSize : 25
  }
}
export default Header;