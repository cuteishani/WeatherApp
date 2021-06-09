import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import home from '../screens/HomeScreen';
import detail from '../screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const options = {
  title: 'WeatherApp',
  headerTitleStyle: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Roboto-Medium'
  },
  headerTintColor:'white',
  headerStyle: {
    backgroundColor: '#00804A',
  },
};
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} options={options} />
        <Stack.Screen name="Detail" component={detail} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeStack;
