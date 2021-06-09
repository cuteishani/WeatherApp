import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
const MapDesc = () => {
  const route = useRoute();
  const {item} = route.params;
  const getImage = type => {
    if (type == 'Rain') {
      return require('../../assets/images/rain.png');
    } else if (type == 'Haze') {
      return require('../../assets/images/haze.png');
    } else {
      return require('../../assets/images/clouds.jpeg');
    }
  };
  return (
    <View style={styles.box}>
      <View style={styles.innerBox}>
        <Text style={styles.h2}>{item.name}</Text>
        <Text style={styles.h3}>{item.weather[0].description}</Text>
        <Text style={styles.h3} t>
          Humidity: {item.main.humidity}
        </Text>
        <Text style={styles.h3}>Wind Speed: {item.wind.speed}</Text>
        <Text style={styles.h3}>
          Max. Temp.: {Math.floor(item.main.temp_max - 273)} °c
        </Text>
        <Text style={styles.h3}>
          Min. Temp.: {Math.floor(item.main.temp_min - 273)} °c
        </Text>
      </View>
      <View style={styles.innerBox}>
        <Text style={styles.h1}>{Math.floor(item.main.temp - 273)} °c</Text>
        <Image
          source={getImage(item.weather[0].main)}
          style={{height: 80, width: 80}}
        />
      </View>
    </View>
  );
};

export default MapDesc;
