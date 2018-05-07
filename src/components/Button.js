import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Text>Search!</Text>
    </TouchableOpacity>
  )
}

export default Button;
