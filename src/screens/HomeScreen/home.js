import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import {styles} from './styles';
import axios from 'axios';
const url =
const Home = ({navigation}) => {
  const [weather, setWeather] = useState({});
  const [isloading, setLoading] = useState(true);
  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = async () => {
    axios
      .get(url)
      .then(function (response) {
        setWeather(response.data.list);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigation.navigate('Detail', {item});
      }}>
      <View style={styles.box}>
        <View style={styles.innerBox1}>
          <Text style={styles.h2}>{item.name}</Text>
          <Text style={styles.h3}>{item.weather[0].description}</Text>
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.h1}>{Math.floor(item.main.temp - 273)} °c</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View>
      {isloading && (
        <Text> Loading....</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={weather}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Home;
