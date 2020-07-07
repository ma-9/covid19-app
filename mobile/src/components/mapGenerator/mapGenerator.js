import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import { pinColorSelector } from '../../helper';

const MapGenerator = ({ countryCases }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countryCases);
  }, [countryCases]);
  return (
    <MapView
      provider={PROVIDER_DEFAULT} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 23.0225,
        longitude: 72.5714,
        latitudeDelta: 100,
        longitudeDelta: 100,
      }}
      mapType="standard"
      toolbarEnabled={true}
      loadingEnabled={true}>
      {data.map((value, index) => {
        const Latitude = value.coordinates.latitude || 0;
        const Longitude = value.coordinates.longitude || 0;
        const countryName = value.countryName || '';
        const provinceName = value.provinceName || '';
        const confirmedCases = value.confirmed || '';
        const recoveredCases = value.recovered || '';
        const deathsCases = value.deaths || '';
        return (
          <Marker
            key={index}
            coordinate={{ latitude: Latitude, longitude: Longitude }}
            title={`${provinceName} ${countryName}`}
            description={`Confirmed: ${confirmedCases}, Recovered: ${recoveredCases}, Deaths: ${deathsCases}`}
            pinColor={pinColorSelector(
              confirmedCases,
              recoveredCases,
              deathsCases,
            )}
          />
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default MapGenerator;
