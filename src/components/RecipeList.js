import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import RecipeDetail from './RecipeDetail'
import Search from './Search'
import API from '../utils/API';
import Header from './Header';
import Button from './Button';




class RecipeList extends Component {

  state = {
    recipes: [],
    text: ''
  }

  componentWillMount() {
    API.search()
    .then(response => this.setState({ recipes: response.data.hits}));
  }

  renderRecipes() {
    return this.state.recipes.map(cp =>
       <RecipeDetail
       key={cp.recipe.calories}
       title={cp.recipe.label}
       cals={Math.floor(cp.recipe.calories)}
       servings={cp.recipe.yield}
       img={cp.recipe.image}
       />
  )}

  searchRecipes() {
    console.log(this.state.text)
  }

  render () {
    console.log(this.state.recipes)
    return (
      <View>
      <Header headerText={'Recipes'} />
        <ScrollView>
        <Search
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        />
        <Button onPress={this.searchRecipes} />
          {this.renderRecipes()}
        </ScrollView>
      </View>

    );
  }
}

export default RecipeList;
