import React from 'react';
import {SafeAreaView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Map from '../../components/MapView';
import MapDesc from '../../components/MapDesc';

const Detail = () => {
  const route = useRoute();
  const {item} = route.params;
  return (
    <SafeAreaView>
      <Map item />
      <MapDesc item />
    </SafeAreaView>
  );
};

export default Detail;
