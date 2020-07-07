import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const CountryPicker = ({ countryData, country, setCountry }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(countryData);
  }, [countryData]);
  return (
    <View style={styles.root}>
      <Picker
        mode="dialog"
        selectedValue={country}
        style={styles.CountryPicker}
        onValueChange={(value) => setCountry(value)}>
        <Picker.Item label="🏳️‍🌈 Select Country" value="GLOBAL" />
        {data.map((value, index) => (
          <Picker.Item
            style={styles.pickerItem}
            label={`🚩 ${value.name}`}
            value={value.iso3}
            key={index}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#c5cae9',
    borderRadius: 50,
  },
  CountryPicker: {
    width: '90%',
  },
});

export default CountryPicker;
