import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Headache from '../../../assets/images/headache.png';
import Cough from '../../../assets/images/caugh.png';
import Fever from '../../../assets/images/fever.png';

const CountryPicker = ({ Infected, Deaths, Recovered }) => {
  return (
    <View>
      <View>
        <Text style={styles.heading}>Symptomps</Text>
      </View>
      <View style={styles.showCase}>
        <TouchableOpacity style={styles.symptompsContainer}>
          <Image source={Headache} />
          <Text>Headache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symptompsContainer}>
          <Image source={Cough} />
          <Text>Cough</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symptompsContainer}>
          <Image source={Fever} />
          <Text>Fever</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: '#424242',
    fontWeight: '700',
    marginBottom: 10,
  },
  showCase: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  symptompsContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
    borderBottomWidth: 5,
    alignItems: 'center',
  },
});

export default CountryPicker;
