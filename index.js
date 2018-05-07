import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/header';
import RecipeList from './src/components/RecipeList';
import Search from './src/components/Search';


const App = () => (
  <View>
    <RecipeList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
