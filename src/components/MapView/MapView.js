import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
const Map = () => {
  const route = useRoute();
  const {item} = route.params;
  const {lat, lon} = item.coord;
  return (
    <MapView
      style={{width: '100%', height: '75%'}}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.6,
        longitudeDelta: 0.6,
      }}
      // onRegionChange={this.onRegionChange}
    >
      <Marker
        key={'index'}
        coordinate={{
          latitude: lat,
          longitude: lon,
        }}
        // title={marker.title}
        // description={marker.description}
      />
    </MapView>
  );
};

export default Map;
