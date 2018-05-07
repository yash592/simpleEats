import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Search from './Search';


const RecipeDetail = (props) => {
  return (

      <Card>
        <CardSection>
      <View style={styles.headerContentStyle}>
        <Text style={styles.titleStyle}>
        {props.title}
        </Text>
        <Text style={styles.calStyle}>
        {props.cals} calories
        </Text>
        <Text>
        {props.servings} servings
        </Text>
      </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.imgStyle}
          source={{uri: props.img}} />
      </CardSection>
    </Card>
  );

};

const styles = {
  headerContentStyle: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 30
  },
  calStyle: {
    fontSize: 20
  },
  imgStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}
export default RecipeDetail;
