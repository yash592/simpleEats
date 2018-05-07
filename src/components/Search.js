import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native'
import  Card  from './Card';
import  CardSection  from './CardSection';

class Search extends Component {
  render() {
    return (

          <TextInput underlineColorAndroid='transparent' placeholder="Enter something to cook!" style={{ height: 60, width: 200 }} />

    );
  }
}

export default Search;
